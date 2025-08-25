import instance from './axiosinstance';

const TEAM_ID = '18-2';

export const POPULAR_FIRST_URL = import.meta.env.VITE_POPULAR_FIRST_URL;
export const NEW_FIRST_URL = import.meta.env.VITE_NEW_FIRST_URL;

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

export async function getRollingPaper({ id }) {
  try {
    const response = await instance.get(`/${TEAM_ID}/recipients/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }
}

export async function postRollingPaper({ senderNameInput, bgUrl }) {
  try {
    const response = await instance.post(
      `/${TEAM_ID}/recipients/`,
      {
        team: `${TEAM_ID}`,
        name: senderNameInput,
        backgroundColor: bgUrl.color,
        backgroundImageURL: bgUrl.image,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken':
            'SiavuruSgGN33Nq0qpFxjnd1eNQZxmnKIu4we1DESeEmliQax8hnCGH1XH1dYeqU',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('롤링페이퍼 생성을 실패 했습니다.');
  }
}

export async function getRecipientsByUrl(url) {
  try {
    const response = await instance.get(url);
    return { body: response.data, url: response.config.url || url };
  } catch (error) {
    throw new Error('데이터 불러오기 실패');
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
