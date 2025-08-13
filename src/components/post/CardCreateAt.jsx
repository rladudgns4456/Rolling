//카드 생성 날짜
function CardCreateAt({ createDate }) {
  return (
    <div className="mt-auto text-xs text-grayscale4">
      <span>{createDate}</span>
    </div>
  );
}

export default CardCreateAt;