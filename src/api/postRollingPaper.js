import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export async function postRollingPaper({ senderNameInput, bgUrl }) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/18-2/recipients/`,
      {
        team: '18-2',
        name: senderNameInput,
        backgroundColor: bgUrl.color,
        backgroundImageURL: bgUrl.image,
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': 'SiavuruSgGN33Nq0qpFxjnd1eNQZxmnKIu4we1DESeEmliQax8hnCGH1XH1dYeqU',
        },
      }
    );
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    throw new Error('롤링페이퍼 생성을 실패 했습니다.');
  }
}