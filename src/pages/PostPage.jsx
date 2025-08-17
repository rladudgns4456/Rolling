import { useEffect, useState } from 'react';
import RecipientInfo from '../components/post/RecipientInfo';
import UserRollingContainer from '../components/post/UserRollingContainer';
import { getMessages, getReactions, getRecipients } from '../api/api';
import { useParams } from 'react-router-dom';

export default function PostPage() {
  const [recipientsInfo, setRecipientsInfo] = useState({});
  const [reactionsInfo, setReactionsInfo] = useState({});
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
          setReactionsInfo(reactionsRes);
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

  return (
    <>
      <div className="w-[1200px] mx-auto">
        <RecipientInfo
          name={recipientsInfo.name}
          messageCount={recipientsInfo.messageCount}
          recentMessages={recipientsInfo.recentMessages}
          topReactions={recipientsInfo.topReactions}
          Reactions={reactionsInfo.results}
          recipientId={recipientId}
        />
      </div>
      <UserRollingContainer
        recipientsInfo={recipientsInfo}
        messageInfo={messageInfo.results}
      />
    </>
  );
}
