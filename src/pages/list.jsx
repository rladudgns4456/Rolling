import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getRecipientsByUrl,
  POPULAR_FIRST_URL,
  NEW_FIRST_URL,
} from '../components/api/api';
import CardListCard from '../components/list/CardListCard';

function List() {
  const [popularRecipientsData, setPopularRecipientsData] = useState(null);
  const [popularRecipientsDataURL, setPopularRecipientsDataURL] =
    useState(POPULAR_FIRST_URL);

  const [newRecipientsData, setNewRecipientsData] = useState(null);
  const [newRecipientsDataURL, setNewRecipientsDataURL] =
    useState(NEW_FIRST_URL);
  const handlePopularPaginationBtn = (dir) => {
    const target =
      dir === 'prev'
        ? popularRecipientsData.previous
        : popularRecipientsData.next;

    if (target) {
      setPopularRecipientsDataURL(target); // URL만 state에 저장
    }
  };

  const handleNewPaginationBtn = (dir) => {
    const target =
      dir === 'prev' ? newRecipientsData.previous : newRecipientsData.next;

    if (target) {
      setNewRecipientsDataURL(target);
    }
  };

  useEffect(() => {
    if (!popularRecipientsDataURL) return;
    let alive = true;
    (async () => {
      try {
        const res = await getRecipientsByUrl(popularRecipientsDataURL);
        if (!alive) return;
        setPopularRecipientsData(res.body);
      } catch (e) {
        console.error('[popular] fetch error:', e);
      }
    })();
    return () => {
      alive = false;
    };
  }, [popularRecipientsDataURL]);

  useEffect(() => {
    if (!newRecipientsDataURL) return;
    let alive = true;
    (async () => {
      try {
        const res = await getRecipientsByUrl(newRecipientsDataURL);
        if (!alive) return;
        setNewRecipientsData(res.body);
      } catch (e) {
        console.error('[recent] fetch error:', e);
      }
    })();
    return () => {
      alive = false;
    };
  }, [newRecipientsDataURL]);

  const popularRecipientsItem = popularRecipientsData?.results ?? [];
  const newRecipientsItem = newRecipientsData?.results ?? [];

  return (
    <div className="max-w-[1280px] pt-[50px] mx-auto px-5 sm:px-6 xl:px-10">
      <h2 className="mb-4 text-2xl font-bold leading-6 tracking-widest ">
        인기 롤링 페이퍼🔥
      </h2>
      {/* 인기 섹션: 가로 스크롤 래퍼 추가 */}
      <div className="mb-[50px] xl:w-[1160px] -mx-5 px-5 md:-mx-6 md:px-6 overflow-x-auto xl:overflow-visible no-scrollbar">
        <div className="flex gap-5 w-max xl:w-auto">
          {popularRecipientsItem.map((item, index) => {
            const isLastInGroup = (index + 1) % 4 === 0; // 4번째 카드
            const isFirstInGroup = index % 4 === 0; // 첫 번째 카드
            return (
              // 줄어들지 않도록 shrink-0
              <div className="relative shrink-0" key={index}>
                <Link to={`/post/${item.id}`}>
                  <CardListCard
                    bgColor={item.backgroundColor}
                    bgImageUrl={item.backgroundImageURL}
                    color={item.backgroundColor}
                    name={item.name}
                    // ✅ 프로필/카운트
                    messageCount={item.messageCount ?? 0}
                    recentImage={(item.recentMessages ?? [])
                      .map((m) => m.profileImageURL)
                      .filter(Boolean)}
                    // ✅ 이모지: 목록에 없으면 빈 배열로
                    topReactions={item.topReactions ?? []}
                  />
                </Link>

                {popularRecipientsData?.previous && isFirstInGroup && (
                  <button
                    className="absolute left-[-12px] top-1/2 -translate-y-1/2 
                      bg-white rounded-full shadow-md 
                      w-8 h-8 flex items-center justify-center
                      border border-gray-200 hover:bg-gray-100"
                    onClick={() => handlePopularPaginationBtn('prev')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                )}

                {popularRecipientsData?.next && isLastInGroup && (
                  <button
                    className="absolute right-[-12px] top-1/2 -translate-y-1/2 
                      bg-white rounded-full shadow-md 
                      w-8 h-8 flex items-center justify-center
                      border border-gray-200 hover:bg-gray-100"
                    onClick={() => handlePopularPaginationBtn('next')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <p className="mb-4 text-2xl font-bold leading-6 tracking-widest">
        최근에 만든 롤링 페이퍼⭐
      </p>
      {/* 최근 섹션: 가로 스크롤 래퍼 */}
      <div className="mb-[40px] xl:w-[1160px] -mx-5 px-5 md:-mx-6 md:px-6 overflow-x-auto xl:overflow-visible no-scrollbar ">
        {/* 안쪽: 실제 너비만큼 확장되게 */}
        <div className="flex gap-5 w-max xl:w-auto">
          {newRecipientsItem.map((item, index) => {
            const isLastInGroup = (index + 1) % 4 === 0; // 4번째 카드
            const isFirstInGroup = index % 4 === 0; // 첫 번째 카드
            return (
              <div className="relative cursor-pointer shrink-0" key={index}>
                <Link to={`/post/${item.id}`}>
                  <CardListCard
                    bgColor={item.backgroundColor}
                    bgImageUrl={item.backgroundImageURL}
                    color={item.backgroundColor}
                    name={item.name}
                    messageCount={item.messageCount ?? 0}
                    recentImage={(item.recentMessages ?? [])
                      .map((m) => m.profileImageURL)
                      .filter(Boolean)}
                    // ✅ 이모지: 목록에 없으면 빈 배열로
                    topReactions={item.topReactions ?? []}
                  />
                </Link>
                {/* Prev 버튼 */}
                {newRecipientsData?.previous && isFirstInGroup && (
                  <button
                    className="absolute left-[-12px] top-1/2 -translate-y-1/2
                      bg-white rounded-full shadow-md
                      w-8 h-8 flex items-center justify-center
                      border border-gray-200 hover:bg-gray-100"
                    onClick={() => handleNewPaginationBtn('prev')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                )}

                {/* Next 버튼 */}
                {newRecipientsData?.next && isLastInGroup && (
                  <button
                    className="absolute right-[-12px] top-1/2 -translate-y-1/2
                    bg-white rounded-full shadow-md
                    w-8 h-8 flex items-center justify-center
                    border border-gray-200 hover:bg-gray-100"
                    onClick={() => handleNewPaginationBtn('next')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full py-6">
        {/* 컨테이너: 모바일 20px, 태블릿 24px, PC 40px 여백 */}
        <div className="mx-auto max-w-[1280px] px-5 tablet:px-6 pc:px-10 flex justify-center items-center">
          <Link
            to="/post"
            className="bg-purple6 rounded-xl w-[280px] min-w-[280px] h-[56px]
                shrink-0 whitespace-nowrap
                flex justify-center items-center
                font-bold text-[18px] tracking-[-1%] leading-[28px] text-white"
          >
            나도 만들어보기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default List;
