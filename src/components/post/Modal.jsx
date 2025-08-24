import Badge from './Badge';

export default function Modal({
  proFile,
  userName,
  relationship,
  createDate,
  content,
  onClose,
}) {
  const dateObject = new Date(createDate);
  const formattedDate = dateObject.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return (
    <>
      <div className="fixed inset-0 z-30 flex items-center justify-center px-5 bg-black/60">
        <div className="max-w-[600px] h-[476px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] bg-white rounded-2xl w-full">
          <div className="flex items-center justify-between px-10 pt-8 pb-4">
            <div className="flex items-center gap-4">
              <img
                className="rounded-full w-14 h-14"
                src={proFile}
                alt="프로필 이미지"
              />{' '}
              {/* 추후 img태그로 변경 */}
              <div>
                <span className="text-xl font-normal">From. </span>
                <span className="text-xl font-bold">{userName}</span>
                <Badge relationship={relationship} />
              </div>
            </div>
            <span className="text-sm font-normal text-grayscale4">
              {formattedDate}
            </span>
          </div>
          <p className="h-64 px-10 py-4 mx-auto text-lg leading-7 text-gray-600 border-t border-t-grayscale2">
            {content}
          </p>
          <div className="flex justify-center mt-5">
            <button
              className="w-[120px] h-10 rounded-md px-4 py-[7px] bg-purple6 text-white text-base"
              onClick={onClose}
            >
              확인
            </button>
          </div>
          {/* 버튼 컴포넌트 쓸 예정 */}
        </div>
      </div>
    </>
  );
}
