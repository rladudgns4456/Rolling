import completedIcon from '../../assets/icon/ic-completed.svg';
import closeIcon from '../../assets/icon/ic-close.svg';

export default function Toast({ visible, onCLose, message }) {
  if (!visible) return null;
  return (
    <>
      <div className="fixed bottom-10 left-1/3 w-[524px] h-16 rounded-lg bg-black/80 flex items-center justify-between px-6">
        <div className="flex gap-3">
          <img src={completedIcon} alt="완료 아이콘" />
          <span className="text-base font-normal text-white">{message}</span>
        </div>
        <button onClick={onCLose}>
          <img src={closeIcon} alt="닫기 아이콘" />
        </button>
      </div>
    </>
  );
}
