import instance from './axiosinstance';

const TEAM_ID = '18-2';

// GET /{team}/recipients/{recipientId}/messages/ -> 대상에게 보낸 메세지 목록 조회 / 모든 메시지 다 볼 수 있음

// GET /{team}/recipients/{id} -> 롤링 페이퍼 대상 조회 / 최근 3개 메시지까지만
export async function getRecipients(recipientId) {
  try {
    const response = await instance.get(
      `/${TEAM_ID}/recipients/${recipientId}/`
    );
    console.log('response:', response);

    return response.data;
  } catch (error) {
    throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
  }
}
// getRecipients(recipientId) {

// }

// getRecipientMessages(recipientId) {

// }

/**
 *
 * 부모 컴포넌트
 *                               header
 *       (주인공 이름, 리액션 수) info
 *        (배경 이미지나 컬러)  body
 *
 */
