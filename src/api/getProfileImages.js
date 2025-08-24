import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getProfileImages() {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile-images/`);
    return response.data.imageUrls;
  } catch (error) {
    console.error('API 요청 실패: ', error);
  }
}
