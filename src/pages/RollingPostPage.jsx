import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import RecipientInfo from '../components/post/RecipientInfo';
import UserRollingContainer from '../components/post/UserRollingContainer';
import { getRecipients } from '../api/api';
import { useParams } from 'react-router-dom';

export default function RollingPostPage() {
  const [recipientsInfo, setRecipientsInfo] = useState({});

  useEffect(() => {
    async function fetch() {
      try {
        const res = await getRecipients(12942);
        setRecipientsInfo(res);
      } catch (error) {
        throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
      }
    }
    fetch();
  }, []);

  return (
    <>
      <Header showButton={true} />
      <div className="w-[1200px] mx-auto">
        <RecipientInfo
          name={recipientsInfo.name}
          messageCount={recipientsInfo.messageCount}
          recentMessages={recipientsInfo.recentMessages}
          topReactions={recipientsInfo.topReactions}
        />
      </div>
      <UserRollingContainer />
    </>
  );
}

/*

  {
      "id": 12950,
      "name": "정소민",
      "backgroundColor": "green",
      "backgroundImageURL": "https://picsum.photos/id/24/3840/2160",
      "createdAt": "2025-08-14T10:04:27.992501Z",
      "messageCount": 0,
      "recentMessages": [],
      "reactionCount": 0,
      "topReactions": []
  }


  name messageCount recentMessages topReactions
*/
