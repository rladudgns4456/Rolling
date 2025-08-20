import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardListCard from '../components/list/CardListCard';

const goodURL =
  'https://rolling-api.vercel.app/18-2/recipients/?limit=4&offset=1&sort=like';
const createURL =
  'https://rolling-api.vercel.app/18-2/recipients/?limit=4&offset=1';
function List() {
  const [goodRecipients, setGoodRecipients] = useState([]);
  const [creatRecipients, setCreateRecipients] = useState([]);
  const [createListApiUrl, setCreateListApiUrl] = useState(createURL);
  const [goodListApiUrl, setGoodListApiUrl] = useState(goodURL);

  const handleGoodNextPaginationBtn = () => {
    setGoodListApiUrl(goodRecipients.next);
  };
  const handleGoodPrevPaginationBtn = (e) => {
    setGoodListApiUrl(goodRecipients.previous);
  };
  const handleCreateNextPaginationBtn = () => {
    setCreateListApiUrl(creatRecipients.next);
  };
  const handleCreatePrevPaginationBtn = (e) => {
    setCreateListApiUrl(creatRecipients.previous);
  };

  useEffect(() => {
    fetch(goodListApiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGoodRecipients(data);
      });
  }, [goodListApiUrl]);

  useEffect(() => {
    fetch(createListApiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCreateRecipients(data);
      });
  }, [createListApiUrl]);

  const goodRecipientsSort = goodRecipients.results || [];

  const newRecipients = creatRecipients.results || [];

  return (
    <div className="max-w-[1280px] pt-[50px] mx-auto px-5 sm:px-6 xl:px-10">
      <p className="mb-4 text-2xl font-bold leading-6 tracking-widest ">
        인기 롤링 페이퍼🔥
      </p>
      {/* 인기 섹션: 가로 스크롤 래퍼 추가 */}
      <div className="mb-[50px] xl:w-[1160px] -mx-5 px-5 md:-mx-6 md:px-6 overflow-x-auto xl:overflow-visible no-scrollbar">
        <div className="flex gap-5 w-max xl:w-auto">
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

                {goodListApiUrl !== goodURL && isFirstInGroup && (
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

      <p className="mb-4 text-2xl font-bold leading-6 tracking-widest">
        최근에 만든 롤링 페이퍼⭐
      </p>
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

                {createListApiUrl !== createURL && isFirstInGroup && (
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
