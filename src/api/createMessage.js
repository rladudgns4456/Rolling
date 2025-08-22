import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export async function createMessage(messageInfo) {
  const { team, recipientId, ...bodyData } = messageInfo;

  try {
    const response = await axios.post(
      `${API_BASE_URL}/${team}/recipients/${recipientId}/messages/`,
      bodyData
    );
    return response.data;
  } catch (error) {
    console.error('메세지 생성 실패', error);
    throw error;
  }
}
