import instance from './axiosinstance';

const TEAM_ID = '18-2';

// GET /{team}/recipients/{recipientId}/messages/ -> 대상에게 보낸 메세지 목록 조회 / 모든 메시지 다 볼 수 있음

// GET /{team}/recipients/{id}/ -> 롤링 페이퍼 대상 조회 / 최근 3개 메시지까지만
export async function getRecipients(recipientId) {
  try {
    const response = await instance.get(
      `/${TEAM_ID}/recipients/${recipientId}/`
    );
    return response.data;
  } catch (error) {
    throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
  }
}

// GET /{team}/recipients/{id}/reacions/ -> 롤링 페이퍼 대상 리액션 조회
export async function getReactions(recipientId) {
  try {
    const response = await instance.get(
      `/${TEAM_ID}/recipients/${recipientId}/reactions/`
    );
    return response.data;
  } catch (error) {
    throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
  }
}

export async function getMessages(recipientId) {
  try {
    const response = await instance.get(
      `/${TEAM_ID}/recipients/${recipientId}/messages/`
    );
    return response.data;
  } catch (error) {
    throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
  }
}
