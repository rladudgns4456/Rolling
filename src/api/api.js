import instance from './axiosinstance';

const TEAM_ID = '18-2';

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

// GET /{team}/recipients/{recipientId}/messages/ -> 대상에게 보낸 메세지 목록 조회 / 모든 메시지 다 볼 수 있음
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

export async function postReactions(recipientId, body) {
  try {
    const response = await instance.post(
      `/${TEAM_ID}/recipients/${recipientId}/reactions/`,
      body
    );
    return response.data;
  } catch (error) {
    throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
  }
}

export async function deleteMessages(messageId) {
  try {
    const response = await instance.delete(
      `/${TEAM_ID}/messages/${messageId}/`
    );
    return response.data;
  } catch (error) {
    throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
  }
}

export async function deleteRecipients(recipientId) {
  try {
    const response = await instance.delete(
      `/${TEAM_ID}/recipients/${recipientId}/`
    );
    return response.data;
  } catch (error) {
    throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
  }
}

const BASE_URL = 'https://rolling-api.vercel.app/18-2';
export const POPULAR_FIRST_URL = //첫번째 offset (prev 버튼 X)
  'https://rolling-api.vercel.app/18-2/recipients/?limit=4&&sort=like';
export const NEW_FIRST_URL = //첫번째 offset (prev 버튼 X)
  'https://rolling-api.vercel.app/18-2/recipients/?limit=4&';
export async function getRollingPaper({ id }) {
  const response = await fetch(`${BASE_URL}/recipients/${id}/`);
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

// 페이지네이션 포함: 넘긴 URL 그대로 가져오기
export async function getRecipientsByUrl(url) {
  const res = await fetch(url);
  return { body: await res.json(), url: res.url || url };
}
