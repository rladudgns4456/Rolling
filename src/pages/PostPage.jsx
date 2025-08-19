import { data, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRollingPaper } from '../components/api/api';
import UserRollingContainer from '../components/post/UserRollingContainer';

function PostPage() {
  const { id } = useParams(); // URL에서 ID 추출

  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const body = await getRollingPaper({ id });
        setPostData(body);
      } catch (error) {
        console.error('이미지를 가져오지 못했습니다.:', error);
      }
    };

    if (id) {
      fetchData(); //api 호출
    }
  }, [id]);

  const bgColorStyle =
    postData && postData.backgroundColor
      ? { backgroundColor: postData.backgroundColor }
      : {};
  const bgImageStyle =
    postData && postData.backgroundImageURL
      ? { backgroundImage: `url(${postData.backgroundImageURL})` }
      : { backgroundImage: 'none' };

  return (    
    <div
      className={`min-h-screen bg-cover bg-no-repeat bg-center`}
      style={
        postData && postData.backgroundImageURL ? bgImageStyle : bgColorStyle
      }
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 xl:px-10">
        {postData !== null && <UserRollingContainer newUserId={postData} />}
      </div>
    </div>
  );
}

export default PostPage;
