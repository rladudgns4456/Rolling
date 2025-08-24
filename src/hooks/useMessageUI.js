import { useEffect, useState } from 'react';
import { getProfileImages } from '../api/getProfileImages';
import { preloadImages } from '../utils/preloadImages';

export function useMessageUI({ setProfileImageURL }) {
  const [profileImages, setProfileImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSenderError, setIsSenderError] = useState(false);
  const [isDropdownError, setIsDropdownError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isButtonDisabled = (sender, content) =>
    !sender || !content.replace(/<p><br><\p>/g, '').trim();

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
  }, [setProfileImageURL]);

  return {
    profileImages,
    isLoading,
    isSenderError,
    setIsSenderError,
    isDropdownError,
    setIsDropdownError,
    isSubmitting,
    setIsSubmitting,
    isButtonDisabled,
  };
}
