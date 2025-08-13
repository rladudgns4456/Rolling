import { useEffect, useState, useRef } from 'react';

const RecipientInfo = () => {
  const [isShare, setIsShare] = useState(false);
  const shareMenuRef = useRef(null);

  const handleShareClick = () => {
    setIsShare(!isShare);
  };

  // 컴포넌트 외부를 클릭하면 공유 메뉴가 닫히도록 하는 로직
  useEffect(() => {
    const handleClickOutside = (e) => {
      // 메뉴가 열려있고, 클릭한 영역이 메뉴 바깥일 경우
      if (shareMenuRef.current && !shareMenuRef.current.contains(e.target)) {
        setIsShare(false); // 메뉴 닫기
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between h-16 max-w-full px-5 m-auto tablet:max-w-7xl pc:max-w-screen-xl">
      <p className="text-center font-bold text-lg tablet:text-[1.75rem] pc:text-[1.75rem]  text-grayscale8">
        To. (이름 데이터)
      </p>

      <div className="flex items-center gap-4">
        <div className="hidden md:inline">(23명이 작성했어요)</div>
        <button>(좋아요 아이콘)</button>
        <button className="flex items-center  gap-1 w-9 h-9 px-2 py-[6px] md:px-4 rounded-md md:w-[88px] border border-grayscale3">
          <img src="/emoji_add_icon.svg" alt="add emoji" />
          <span className="hidden md:inline">추가</span>
        </button>
        <div className="border-l border-grayscale2 h-7"></div>

        {/* 공유 버튼 및 메뉴 영역 */}
        <div className="relative flex items-center w-14 h-9">
          <button
            onClick={handleShareClick}
            className="border border-grayscale3 w-9 h-9 md:w-14 px-2 py-[6px] flex justify-center rounded-md md:px-4"
          >
            <img src="/share_icon.svg" alt="share" />
          </button>

          {/* isShare가 true일 때만 공유 메뉴를 렌더링 */}
          {isShare && (
            <ul
              ref={shareMenuRef} // 외부 클릭 감지를 위해 ref를 DOM에 연결
              className="absolute right-0 flex flex-col bg-white border rounded-lg top-12 border-grayscale3"
            >
              <li className="px-4 py-3 cursor-pointer text-grayscale9 hover:bg-grayscale1 whitespace-nowrap">
                카카오톡 공유
              </li>
              <li className="px-4 py-3 cursor-pointer text-grayscale9 hover:bg-grayscale1 whitespace-nowrap">
                URL 공유
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipientInfo;
