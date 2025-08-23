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

