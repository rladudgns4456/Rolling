import axios from 'axios';

const API_BASE_URL = 'https://rolling-api.vercel.app/profile-images/';

export async function getProfileImages() {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data.imageUrls;
  } catch (error) {
    console.log('API 요청 실패: ', error);
  }
}
