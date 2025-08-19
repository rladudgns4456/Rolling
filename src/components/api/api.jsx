const BASE_URL = 'https://rolling-api.vercel.app/18-2';

export async function getRollingPaper({id}) {
  const response = await fetch(`${BASE_URL}/recipients/${id}/`);
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

export async function postRollingPaper({ senderNameInput, bgUrl }) {
  const response = await fetch(`${BASE_URL}/recipients/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken':
        'SiavuruSgGN33Nq0qpFxjnd1eNQZxmnKIu4we1DESeEmliQax8hnCGH1XH1dYeqU',
    },
    body: JSON.stringify({
      team: '18-2',
      name: senderNameInput,
      backgroundColor: bgUrl.color,
      backgroundImageURL: bgUrl.image,
    }),
  });

  if (!response.ok) {
    throw new Error('롤링페이퍼 생성을 실패 했습니다.');
  }
  const result = await response.json();
  return result; // 성공 시 결과 반환
}
