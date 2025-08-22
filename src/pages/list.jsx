// src/pages/List.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getRecipientsByUrl,
  POPULAR_FIRST_URL,
  NEW_FIRST_URL,
} from '../components/api/api';
import RollingSection from '../components/list/RollingSection';

function List() {
  const [isPopularLoading, setIsPopularLoading] = useState(true);
  const [isNewLoading, setIsNewLoading] = useState(true);
  const [popularRecipientsData, setPopularRecipientsData] = useState(null);
  const [popularRecipientsDataURL, setPopularRecipientsDataURL] =
    useState(POPULAR_FIRST_URL);

  const [newRecipientsData, setNewRecipientsData] = useState(null);
  const [newRecipientsDataURL, setNewRecipientsDataURL] =
    useState(NEW_FIRST_URL);

  const handlePopularPaginationBtn = (dir) => {
    const target =
      dir === 'prev'
        ? popularRecipientsData?.previous
        : popularRecipientsData?.next;
    if (target) setPopularRecipientsDataURL(target);
  };

  const handleNewPaginationBtn = (dir) => {
    const target =
      dir === 'prev' ? newRecipientsData?.previous : newRecipientsData?.next;
    if (target) setNewRecipientsDataURL(target);
  };

  useEffect(() => {
    if (!popularRecipientsDataURL) return;
    let alive = true;
    (async () => {
      try {
        const res = await getRecipientsByUrl(popularRecipientsDataURL);
        if (alive) setPopularRecipientsData(res.body);
        setIsPopularLoading(false);
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
        if (alive) setNewRecipientsData(res.body);
        setIsNewLoading(false);
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
<<<<<<< HEAD
      <h2 className="mb-4 text-2xl font-bold leading-9 tracking-widest ">
        인기 롤링 페이퍼🔥
      </h2>
      {/* 인기 섹션: 가로 스크롤 래퍼 추가 */}
      <div className="mb-[40px] xl:w-[1160px] -mx-5 px-5 md:-mx-6 md:px-6 overflow-x-auto xl:overflow-visible no-scrollbar">
        <div className="flex gap-3 md:gap-5 pb-2.5 w-max xl:w-auto">
          {goodRecipientsSort.map((item, index) => {
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

                {goodListApiUrl !== firstURL && isFirstInGroup && (
                  <button
                    className="absolute left-[-12px] top-1/2 -translate-y-1/2 
                         bg-white rounded-full shadow-md 
                         w-8 h-8 flex items-center justify-center
                         border border-gray-200 hover:bg-gray-100"
                    onClick={handleGoodPrevPaginationBtn}
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

                {isLastInGroup && (
                  <button
                    className="absolute right-[-12px] top-1/2 -translate-y-1/2 
                         bg-white rounded-full shadow-md 
                         w-8 h-8 flex items-center justify-center
                         border border-gray-200 hover:bg-gray-100"
                    onClick={handleGoodNextPaginationBtn}
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

      <h2 className="mb-4 text-2xl font-bold leading-9 tracking-widest">
        최근에 만든 롤링 페이퍼⭐
      </h2>
      {/* 최근 섹션: 가로 스크롤 래퍼 */}
      <div className="mb-[40px] xl:w-[1160px] -mx-5 px-5 md:-mx-6 md:px-6 overflow-x-auto xl:overflow-visible no-scrollbar ">
        {/* 안쪽: 실제 너비만큼 확장되게 */}
        <div className="flex gap-5 w-max xl:w-auto">
          {newRecipients.map((item, index) => {
            const isLastInGroup = (index + 1) % 4 === 0;
            const isFirstInGroup = index % 4 === 0;

            return (
              // 카드가 줄어들지 않도록 shrink-0 추가
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

                {createListApiUrl !== firstURL && isFirstInGroup && (
                  <button
                    className="absolute left-[-12px] top-1/2 -translate-y-1/2
                         bg-white rounded-full shadow-md
                         w-8 h-8 flex items-center justify-center
                         border border-gray-200 hover:bg-gray-100"
                    onClick={handleCreatePrevPaginationBtn}
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

                {isLastInGroup && (
                  <button
                    className="absolute right-[-12px] top-1/2 -translate-y-1/2
                         bg-white rounded-full shadow-md
                         w-8 h-8 flex items-center justify-center
                         border border-gray-200 hover:bg-gray-100"
                    onClick={handleCreateNextPaginationBtn}
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
=======
      {isPopularLoading ? (
        <div
          className={
            ' font-bold text-[30px] h-[274px] tablet:h-[312px] pc:h-[312px] mb-[74px] tablet:mb-[50px] pc:mb-[50px]'
          }
        >
          인기 롤링 페이퍼 데이터 로딩중입니다
        </div>
      ) : (
        <RollingSection
          title="인기 롤링 페이퍼🔥"
          items={popularRecipientsItem}
          pageMeta={popularRecipientsData} // {previous, next}
          onPaginate={handlePopularPaginationBtn}
          groupSize={4}
          outerClassName="mb-[50px]" // 요소마다 mb이 달라 따로 관리
        />
      )}
      {isNewLoading ? (
        <div className="font-bold text-[30px] h-[274px] tablet:h-[312px] pc:h-[312px] mb-[66px] tablet:mb-[156px] pc:mb-[64px]">
          최근에 만든 롤링 페이퍼 데이터 로딩중입니다
>>>>>>> b2cd11d28ce4083b2fb95fef2ee9a57ea7e2bbd9
        </div>
      ) : (
        <RollingSection
          title="최근에 만든 롤링 페이퍼⭐"
          items={newRecipientsItem}
          pageMeta={newRecipientsData}
          onPaginate={handleNewPaginationBtn}
          groupSize={4}
          outerClassName="mb-[40px]"
        />
      )}

      <div className="w-full py-6">
        <div className="mx-auto max-w-[1280px] px-5 tablet:px-6 pc:px-10 flex justify-center items-center">
          <Link
            to="/post"
            className="bg-purple6 rounded-xl w-[280px] min-w-[280px] h-[56px]
              shrink-0 whitespace-nowrap flex justify-center items-center
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
