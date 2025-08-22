import { useEffect, useState } from 'react';
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
  const [messageInfo, setMessageInfo] = useState({ results: [] });
  const { recipientId } = useParams();

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
        messageCount: prev.messageCount - 1,
      }));
      setMessageInfo((prev) => ({
        ...prev,
        results: prev.results.filter((message) => message.id !== messageId),
      }));
    } catch (error) {
      console.log('메시지 삭제 실패:', error);
    }
  }

  console.log(messageInfo);
  return (
    <>
      <div className="sticky top-0 md:top-[65px] bg-white/80 z-50 mx-auto w-full    
        px-5 md:px-6">
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
    </>
  );
}
