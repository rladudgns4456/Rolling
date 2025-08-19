import completedIcon from '../../assets/icon/ic-completed.svg';
import closeIcon from '../../assets/icon/ic-close.svg';
import { useEffect, useState } from 'react';

export default function Toast() {
  const [toastVisible, setToastVisible] = useState(false);
  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToastVisible(true);
    } catch (error) {
      alert('URL 복사가 실패하였습니다.', error);
    }
  };

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);
  return (
    <>
      <button onClick={copyUrl}>URL 복사 테스트 버튼</button>
      {toastVisible && (
        <div className="fixed bottom-10 left-1/3 w-[524px] h-16 rounded-lg bg-black/80 flex items-center justify-between px-6">
          <div className="flex gap-3">
            <img src={completedIcon} alt="완료 아이콘" />
            <span className="text-base font-normal text-white">
              URL이 복사 되었습니다.
            </span>
          </div>
          <button onClick={() => setToastVisible(false)}>
            <img src={closeIcon} alt="닫기 아이콘" />
          </button>
        </div>
      )}
    </>
  );
}
