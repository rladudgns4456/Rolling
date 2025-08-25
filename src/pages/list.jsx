// src/pages/List.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getRecipientsByUrl,
  POPULAR_FIRST_URL,
  NEW_FIRST_URL,
} from '../api/api';
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
    <div className="xl:pb-14 mx-auto w-full max-w-[1248px] md:pt-[50px] pt-10">
      {isPopularLoading ? (
        <div
          className={
            ' font-bold text-[30px] h-[274px] tablet:h-[312px] pc:h-[312px] mb-[74px] tablet:mb-[50px] pc:mb-[50px]  px-5 md:px-6'
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
        <div className="font-bold text-[30px] h-[274px] tablet:h-[312px] pc:h-[312px] mb-[66px] tablet:mb-[156px] pc:mb-[64px] px-5 md:px-6">
          최근에 만든 롤링 페이퍼 데이터 로딩중입니다
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
