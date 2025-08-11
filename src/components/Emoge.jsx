export default function Emoge({ className }) {
  const emogeClass =
    'w-[66px] h-[36px] rounded-[32px] bg-[#0000008A] pt-2 pr-3 pb-2 pl-3 flex justify-center items-center text-[16px] text-white leading-[20px] tracking-[0]';
  return (
    <div className={className}>
      <div className={emogeClass}>
        👍<span>24</span>
      </div>
      <div className={emogeClass}>
        😍<span>16</span>
      </div>
      <div className={emogeClass}>
        🎉<span>10</span>
      </div>
    </div>
  );
}
