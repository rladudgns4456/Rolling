import { useState, useEffect } from 'react';
import './App.css';
const BaseURL = 'https://rolling-api.vercel.app/';

import CardListCard from './components/CardListCard';

function App() {
  const [bgImageUrl, setBgImageUrl] = useState([]);
  useEffect(() => {
    fetch(`${BaseURL}background-images/`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log('API 응답 데이터:', data);
        if (data.imageUrls) {
          setBgImageUrl(data.imageUrls);
          console.log(data.imageUrls);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="cardList grid grid-cols-4 gap-[10px]">
      <CardListCard bgColor="bg-purple1" color="purple" name="Sowon" />
      <CardListCard bgColor="bg-beige2" color="beige" name="Sowon" />
      <CardListCard bgColor="bg-blue2" color="blue" name="Sowon" />
      <CardListCard bgColor="bg-green1" color="green" name="Sowon" />
      <CardListCard
        bgColor="bg-purple1"
        color="purple"
        name="Sowon"
        bgImageUrl={bgImageUrl[0]} //길이는 0~3까지만 4부터는 아무것도없음 나중에 수정
      />
      <CardListCard
        bgColor="bg-purple1"
        color="purple"
        name="Sowon"
        bgImageUrl={bgImageUrl[1]} //길이는 0~3까지만 4부터는 아무것도없음 나중에 수정
      />
      <CardListCard
        bgColor="bg-purple1"
        color="purple"
        name="Sowon"
        bgImageUrl={bgImageUrl[2]} //길이는 0~3까지만 4부터는 아무것도없음 나중에 수정
      />
      <CardListCard
        bgColor="bg-purple1"
        color="purple"
        name="Sowon"
        bgImageUrl={bgImageUrl[3]} //길이는 0~3까지만 4부터는 아무것도없음 나중에 수정
      />
    </div>
  );
}

export default App;
