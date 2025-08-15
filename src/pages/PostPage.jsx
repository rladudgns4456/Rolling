import { useEffect, useState } from 'react';
import RecipientInfo from '../components/post/RecipientInfo';
import UserRollingContainer from '../components/post/UserRollingContainer';
import { getMessages, getReactions, getRecipients } from '../api/api';

export default function PostPage() {
  const [recipientsInfo, setRecipientsInfo] = useState({});
  const [reactionsInfo, setReactionsInfo] = useState({});
  const [messageInfo, setMessageInfo] = useState({ results: [] });

  useEffect(() => {
    async function fetchRecipients() {
      try {
        const res = await getRecipients(12942);
        setRecipientsInfo(res);
        console.log('recipients테스트', res);
      } catch (error) {
        throw new Error(`데이터를 불러오는데 실패했습니다 : ${error.message}`);
      }
    }
    async function fetchReactions() {
      try {
        const res = await getReactions(12942);
        setReactionsInfo(res);
        console.log('reactions테스트', res);
      } catch (error) {
        throw new Error(`데이터를 불러오는데 실패했습니다 : ${error.message}`);
      }
    }
    async function fetchMessages() {
      try {
        const res = await getMessages(12942);
        setMessageInfo(res);
        console.log('message테스트', res);
      } catch (error) {
        throw new Error(`데이터를 불러오는데 실패했습니다 : ${error.message}`);
      }
    }
    fetchRecipients();
    fetchReactions();
    fetchMessages();
  }, []);

  return (
    <>
      <div className="w-[1200px] mx-auto">
        <RecipientInfo
          name={recipientsInfo.name}
          messageCount={recipientsInfo.messageCount}
          recentMessages={recipientsInfo.recentMessages}
          topReactions={recipientsInfo.topReactions}
          Reactions={reactionsInfo.results}
        />
      </div>
      <UserRollingContainer
        recipientsInfo={recipientsInfo}
        messageInfo={messageInfo.results}
      />
    </>
  );
}

/*
{
    "id": 12942,
    "name": "양재영",
    "backgroundColor": "purple",
    "backgroundImageURL": null,
    "createdAt": "2025-08-14T09:49:10.688513Z",
    "messageCount": 12,
    "recentMessages": [
        {
            "id": 25149,
            "recipientId": 12942,
            "sender": "송지효",
            "profileImageURL": "https://fastly.picsum.photos/id/539/200/200.jpg?hmac=8uIu6eeXIH6tNIHiVORkXIi3GaBh5DO0XR2AXfO7mzA",
            "relationship": "동료",
            "content": "기초 팀프로젝트",
            "font": "Noto Sans",
            "createdAt": "2025-08-15T07:37:46.548899Z"
        },
        {
            "id": 25148,
            "recipientId": 12942,
            "sender": "하하",
            "profileImageURL": "https://fastly.picsum.photos/id/466/200/200.jpg?hmac=VydiBydfVntkv5HY6NXsWaNXDedBW2VWNmm8MqF5Cew",
            "relationship": "지인",
            "content": "코드잇",
            "font": "Noto Sans",
            "createdAt": "2025-08-15T07:37:11.403997Z"
        },
        {
            "id": 25147,
            "recipientId": 12942,
            "sender": "김종국",
            "profileImageURL": "https://fastly.picsum.photos/id/66/200/200.jpg?hmac=gaKXe-rWmo5fSEm79TTkW_yFJLECw3FdRCh6Dm7jp4g",
            "relationship": "가족",
            "content": "광복절",
            "font": "Noto Sans",
            "createdAt": "2025-08-15T07:36:46.263606Z"
        }
    ],
    "reactionCount": 40,
    "topReactions": [
        {
            "id": 13372,
            "emoji": "👍",
            "count": 11
        },
        {
            "id": 13379,
            "emoji": "🙋‍♂️",
            "count": 5
        },
        {
            "id": 13373,
            "emoji": "😍",
            "count": 5
        }
    ]
}

*/
