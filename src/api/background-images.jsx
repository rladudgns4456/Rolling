import { useEffect, useState } from 'react';

const BaseURL = 'https://rolling-api.vercel.app/';

const BackgroundImage = () => {
  const [data, setData] = useState([]); // 응답 데이터를 저장할 state

  useEffect(() => {
    fetch(`${BaseURL}background-images/`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log('API 응답 데이터:', data);
        if (data.imageUrls) {
          setData(data.imageUrls);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {data.map((item, index) => (
        <img key={index} src={item} />
      ))}
    </ul>
  );
};

export default BackgroundImage;
