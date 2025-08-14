import React, { useEffect, useState } from 'react';

import Header from '../components/common/Header';
import CardListCard from '../components/list/CardListCard';

function List() {
  const [recipients, setRecipients] = useState([]);
  const [listApiUrl, setListApiUrl] = useState(
    'https://rolling-api.vercel.app/18-2/recipients/?limit=4&offset=1'
  );
  useEffect(() => {
    fetch(`https://rolling-api.vercel.app/18-2/recipients/?limit=4&offset=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipients(data.results);
      })
      .catch((error) => {
        console.error('데이터 불러오기 실패:', error);
      });
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-6 xl:px-10">
      <p className="text-2xl font-bold leading-6 tracking-widest ">
        인기 롤링 페이퍼🔥
      </p>
      {recipients.map((item, index) => {
        return (
          <CardListCard
            key={index}
            bgColor={item.backgroundColor}
            bgImageUrl={item.backgroundImageURL}
            color={item.backgroundColor}
            name={item.name}
          />
        );
      })}
      <p className="text-2xl font-bold leading-6 tracking-widest">
        최근에 만든 롤링 페이퍼⭐
      </p>
    </div>
  );
}

export default List;
