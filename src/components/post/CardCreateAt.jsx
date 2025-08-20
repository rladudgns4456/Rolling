//카드 생성 날짜
function CardCreateAt({ createDate }) {
  const dateObject = new Date(createDate);
  const formattedDate = dateObject.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return (
    <div className="mt-auto text-xs text-grayscale4">
      <span>{formattedDate}</span>
    </div>
  );
}

export default CardCreateAt;
