const BaseURL = 'rolling-api.vercel.app/';

const BackgroundImage = () => {
  fetch(`${BaseURL}background-images`, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      console.log('API 응답 데이터:', data);
    })
    .catch((err) => console.error(err));
};

export default BackgroundImage;
