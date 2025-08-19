import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProfileImages } from '../api/getProfileImages';
import { createMessage } from '../api/createMessage';
import { preloadImages } from '../utils/preloadImages';

const TEAM = '18-2';

export function useMessageForm() {
  const navigate = useNavigate();
  const { recipientId } = useParams();

  //폼 데이터 관련 상태
  const [sender, setSender] = useState('');
  const [content, setContent] = useState('');
  const [relationship, setRelationship] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const [profileImageURL, setProfileImageURL] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  //UI 및 데이터 로딩 관련 상태
  const [profileImages, setProfileImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSenderError, setIsSenderError] = useState(false);
  const [isDropdownError, setIsDropdownError] = useState(false);

  //버튼 활성화 여부
  const isButtonDisabled =
    !sender || !content.replace(/<p><br><\p>/g, '').trim();

  //프로필 이미지 로딩 및 사전 로딩
  useEffect(() => {
    const fetchAndPreload = async () => {
      try {
        const images = await getProfileImages();
        setProfileImages(images);
        if (images.length > 0) {
          setProfileImageURL(images[0]);
          await preloadImages(images);
        }
      } catch (error) {
        console.error('이미지 로딩 실패', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAndPreload();
  }, []);

  //폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isButtonDisabled || isSubmitting) return;

    const messageData = {
      team: TEAM,
      recipientId,
      sender,
      profileImageURL,
      relationship,
      content,
      font,
    };
    console.log('서버에 전송할 데이터:', messageData);

    try {
      await createMessage(messageData);
      window.alert('메시지가 성공적으로 전송되었습니다.');
      navigate(`/post/${recipientId}`);
    } catch (error) {
      console.error('메시지 전송 실패', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values: { sender, content, relationship, font, profileImageURL },
    setters: {
      setSender,
      setContent,
      setRelationship,
      setFont,
      setProfileImageURL,
    },
    ui: {
      profileImages,
      isLoading,
      isSenderError,
      setIsSenderError,
      isDropdownError,
      setIsDropdownError,
      isButtonDisabled,
      isSubmitting,
    },
    handleSubmit,
  };
}
