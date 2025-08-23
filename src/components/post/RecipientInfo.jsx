import { useEffect, useState, useRef } from 'react';
import ProfileCount from '../common/profileCount';
import Emoges from '../common/Emoge';
import Toast from './Toast';
import ArrowDown from '../../assets/icon/arrow_down.svg';
import EmojiPicker from 'emoji-picker-react';
import { getReactions, postReactions } from '../../api/api';

const RecipientInfo = ({
  name = '',
  messageCount = 0,
  recentMessages = [],
  topReactions = [],
  reactionsInfo,
  handleEmojiPost,
}) => {
  const [isShare, setIsShare] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const shareMenuRef = useRef(null);

  const recentImage = recentMessages.map((message) => message.profileImageURL);

  const handleEmojiAddButton = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const handleEmojiOpen = () => {
    setIsEmojiOpen((prev) => !prev);
  };

  const handleShareClick = () => {
    setIsShare((prev) => !prev);
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToastVisible(true);
    } catch (error) {
      alert('URL 복사가 실패하였습니다.', error);
    }
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

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  const handleEmojiClick = (emoji) => {
    handleEmojiPost(emoji);
    setShowEmojiPicker(false);
  };

  const BASE_URL = 'netlify 배포 주소 들어올 곳';

  const shareToKakao = () => {
    if (window.Kakao) {
      const currentPath = window.location.pathname;
      const shareUrl = BASE_URL + currentPath;

      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '롤링페이퍼',
          description: 'FE_18_2_TEAM RollingPaper',
          imageUrl:
            'https://rolling-paper-client-blue.vercel.app/imgs/thumbnail.png',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
        ],
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between h-auto md:h-16 max-w-full m-auto tablet:max-w-7xl pc:max-w-[1200px] ">
      <h2 className="h-[52px] flex items-center md:h-fit md:text-center font-bold text-lg tablet:text-[1.75rem] pc:text-[1.75rem] text-grayscale8 border-b md:border-0">
        To. {name}
      </h2>

      <div className="flex justify-end items-center gap-2 md:gap-4 h-[52px] md:h-fit">
        <ProfileCount
          messageCount={messageCount}
          isColumn={false}
          recentImage={recentImage}
        />
        <Emoges
          topReactions={topReactions}
          className="flex gap-3 md:pl-8 xl:border-l border-[#0000001F]"
        />
        <div className="relative">
          <button onClick={handleEmojiOpen}>
            <img src={ArrowDown} alt="이모지 더보기 버튼" />
          </button>
          {isEmojiOpen && (
            <div className="z-20 overflow-auto scrollbar-0 flex absolute px-4 py-4 md:px-6 md:py-6 border shadow-[0_2px_12px_rgba(0,0,0,0.08)] rounded-lg bg-white top-10 right-1/2 min-w-[200px] max-w-[210px] md:min-w-[312px] md:max-w-[312px] h-fit">
              <div className="flex flex-wrap gap-x-2 gap-y-[10px] md:gap-[10px]">
                {(reactionsInfo ?? []).map((reaction, idx) => {
                  const key =
                    reaction?.id ?? `${reaction?.emoji ?? 'emoji'}-${idx}`;
                  const emoji =
                    typeof reaction?.emoji === 'string' ? reaction.emoji : '🙂';
                  const count = Number.isFinite(reaction?.count)
                    ? reaction.count
                    : 0;

                  return (
                    <div
                      key={key}
                      className="gap-[2px] text-white px-2.5 md:px-3 py-[6px] rounded-[32px] flex items-center justify-center bg-black/55 h-fit w-fit text-[14px] md:text-base"
                    >
                      {emoji}
                      <span>{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={handleEmojiAddButton}
            className="flex items-center gap-1 w-fit md:w-[88px] h-9 px-2 py-[6px] rounded-md border border-grayscale3"
          >
            <img
              className="w-6 h-6"
              src="/emoji_add_icon.svg"
              alt="add emoji"
            />
            <span className="hidden text-base md:inline">추가</span>
          </button>
          {showEmojiPicker && (
            <div className="absolute z-20 md:right-0 top-11 -right-20">
              <EmojiPicker
                onEmojiClick={(emojiData) => handleEmojiClick(emojiData.emoji)}
              />
            </div>
          )}
        </div>
        <div className="border-l border-grayscale2 h-7 mx-[7px] md:mx-0"></div>

        {/* 공유 버튼 및 메뉴 영역 */}
        <div className="relative flex items-center md:w-14 h-9">
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
              className="absolute right-0 z-20 flex flex-col bg-white border rounded-lg top-12 border-grayscale3"
            >
              <li
                onClick={shareToKakao}
                className="px-4 py-3 cursor-pointer text-grayscale9 hover:bg-grayscale1 whitespace-nowrap"
              >
                카카오톡 공유
              </li>
              <li
                onClick={copyUrl}
                className="px-4 py-3 cursor-pointer text-grayscale9 hover:bg-grayscale1 whitespace-nowrap"
              >
                URL 공유
              </li>
            </ul>
          )}
        </div>
      </div>
      <Toast
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
        message="URL이 복사 되었습니다."
      />
    </div>
  );
};

export default RecipientInfo;
