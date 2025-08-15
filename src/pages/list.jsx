import React, { useEffect, useState } from 'react';

import Header from '../components/common/Header';
import CardListCard from '../components/list/CardListCard';

function List() {
  const [sortGood, setSortGood] = useState('reactionCount');
  const [sortNew, setSortNew] = useState('createdAt');
  const [goodRecipients, setGoodRecipients] = useState([]);
  const [creatRecipients, setCreateRecipients] = useState([]);
  const [createListApiUrl, setCreateListApiUrl] = useState(
    'https://rolling-api.vercel.app/18-2/recipients/?limit=4&offset=1'
  );
  const [goodListApiUrl, setGoodListApiUrl] = useState(
    'https://rolling-api.vercel.app/18-2/recipients/?limit=4&offset=1'
  );

  const handleGoodPaginationBtn = () => {
    setGoodListApiUrl(goodRecipients.next);
  };
  const handleCreatePaginationBtn = () => {
    setCreateListApiUrl(creatRecipients.next);
  };

  useEffect(() => {
    fetch(goodListApiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGoodRecipients(data);
      })
      .catch((error) => {
        console.error('데이터 불러오기 실패:', error);
      });
  }, [goodListApiUrl]);

  useEffect(() => {
    fetch(createListApiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCreateRecipients(data);
      })
      .catch((error) => {
        console.error('데이터 불러오기 실패:', error);
      });
  }, [createListApiUrl]);

  const goodRecipientsSort = goodRecipients.results
    ? goodRecipients.results.slice().sort((a, b) => b[sortGood] - a[sortGood])
    : [];

  const newRecipients = creatRecipients.results
    ? creatRecipients.results.slice().sort((a, b) => b[sortNew] - a[sortNew])
    : [];
  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-6 xl:px-10">
      <p className="mb-4 text-2xl font-bold leading-6 tracking-widest ">
        인기 롤링 페이퍼🔥
      </p>
      <div className="flex gap-5 mb-[50px]">
        {goodRecipientsSort.map((item, index) => {
          const isLastInGroup = (index + 1) % 4 === 0; // 4번째마다 true

          return (
            <div className="relative" key={index}>
              <CardListCard
                bgColor={item.backgroundColor}
                bgImageUrl={item.backgroundImageURL}
                color={item.backgroundColor}
                name={item.name}
              />
              {isLastInGroup && (
                <button
                  className="absolute right-[-12px] top-1/2 -translate-y-1/2 
                       bg-white rounded-full shadow-md 
                       w-8 h-8 flex items-center justify-center
                       border border-gray-200 hover:bg-gray-100"
                  onClick={handleGoodPaginationBtn}
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
      <p className="mb-4 text-2xl font-bold leading-6 tracking-widest">
        최근에 만든 롤링 페이퍼⭐
      </p>
      <div className="flex gap-5 mb-[50px]">
        {newRecipients.map((item, index) => {
          const isLastInGroup = (index + 1) % 4 === 0; // 4번째마다 true

          return (
            <div className="relative" key={index}>
              <CardListCard
                bgColor={item.backgroundColor}
                bgImageUrl={item.backgroundImageURL}
                color={item.backgroundColor}
                name={item.name}
              />
              {isLastInGroup && (
                <button
                  className="absolute right-[-12px] top-1/2 -translate-y-1/2 
                       bg-white rounded-full shadow-md 
                       w-8 h-8 flex items-center justify-center
                       border border-gray-200 hover:bg-gray-100"
                  onClick={handleCreatePaginationBtn}
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
  );
}

export default List;
