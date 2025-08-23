import { useCallback, useEffect, useRef, useState } from 'react';
import RecipientInfo from '../components/post/RecipientInfo';
import UserRollingContainer from '../components/post/UserRollingContainer';
import {
  deleteMessages,
  getMessages,
  getReactions,
  getRecipients,
  postReactions,
} from '../api/api';
import { useParams } from 'react-router-dom';

export default function PostPage() {
  const [recipientsInfo, setRecipientsInfo] = useState({});
  const [reactionsInfo, setReactionsInfo] = useState([]);
  const [messageInfo, setMessageInfo] = useState({
    count: 0,
    next: null,
    results: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const { recipientId } = useParams();

  const observerTarget = useRef(null);

  useEffect(() => {
    async function fetchData() {
      if (recipientId) {
        try {
          const [recipientsRes, reactionsRes, messagesRes] = await Promise.all([
            getRecipients(recipientId),
            getReactions(recipientId),
            getMessages(recipientId),
          ]);
          setRecipientsInfo(recipientsRes);
          setReactionsInfo(reactionsRes.results);
          setMessageInfo(messagesRes);
        } catch (error) {
          throw new Error(
            `데이터를 불러오는데 실패했습니다 : ${error.message}`
          );
        }
      }
    }
    fetchData();
  }, [recipientId]);

  const loadMoreMessages = useCallback(async () => {
    if (!messageInfo.next || isLoading) return;
    setIsLoading(true);

    try {
      const res = await fetch(messageInfo.next);
      const data = await res.json();

      setMessageInfo((prev) => ({
        ...prev,
        next: data.next,
        results: [...prev.results, ...data.results],
      }));
    } catch (error) {
      console.log('추가 메시지 로딩 실패', error);
    } finally {
      setIsLoading(false);
    }
  }, [messageInfo.next, isLoading]);

  async function handleEmojiPost(newEmoji) {
    try {
      await postReactions(recipientId, {
        emoji: newEmoji,
        type: 'increase',
      });
      const updated = await getReactions(recipientId);
      setReactionsInfo(updated.results || []);

      // 성능 최적화 위해 API 두 번 호출 대신 직접 topReactions
      setRecipientsInfo((prev) => {
        if (!prev) return prev;
        const sorted = [...updated.results]
          .sort((a, b) => b.count - a.count)
          .slice(0, 3);

        return {
          ...prev,
          topReactions: sorted,
        };
      });
    } catch (error) {
      console.error('이모지 추가 실패:', error);
    }
  }

  async function handleDeleteMessage(messageId) {
    try {
      await deleteMessages(messageId);
      setMessageInfo((prev) => ({
        ...prev,
        count: prev.count - 1,
        results: prev.results.filter((message) => message.id !== messageId),
      }));
      setRecipientsInfo((prev) => ({
        ...prev,
        messageCount: prev.messageCount - 1,
      }));
      const updated = await getMessages(recipientId);
      setMessageInfo(updated);
    } catch (error) {
      console.log('메시지 삭제 실패:', error);
    }
  }

  useEffect(() => {
    if (!observerTarget.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && messageInfo.next) {
          loadMoreMessages();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(observerTarget.current);
    return () => observer.disconnect();
  }, [messageInfo.next, loadMoreMessages]);

  console.log('메시지 테스트', messageInfo);
  console.log('recipients 테스트', recipientsInfo);
  return (
    <>
      <div className="w-[1200px] mx-auto">
        <RecipientInfo
          name={recipientsInfo.name}
          messageCount={recipientsInfo.messageCount}
          recentMessages={recipientsInfo.recentMessages}
          topReactions={recipientsInfo.topReactions}
          recipientId={recipientId}
          reactionsInfo={reactionsInfo}
          handleEmojiPost={handleEmojiPost}
        />
      </div>
      <UserRollingContainer
        recipientsInfo={recipientsInfo}
        messageInfo={messageInfo.results}
        onDeleteMessage={handleDeleteMessage}
        recipientId={recipientId}
      />
      <div ref={observerTarget} className="h-10"></div>
    </>
  );
}
