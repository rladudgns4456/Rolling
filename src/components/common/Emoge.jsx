const emogeClass =
  'w-[66px] z-10 h-[36px] rounded-[32px] bg-[#0000008A] pt-2 pr-3 pb-2 pl-3 flex justify-center items-center text-[16px] text-white leading-[20px] tracking-[0]';

export default function Emoges({ topReactions, className }) {
  return (
    <div className={className}>
      {topReactions.map((reaction) => (
        <div key={reaction.id} className={emogeClass}>
          {reaction.emoji}
          <span>{reaction.count}</span>
        </div>
      ))}
    </div>
  );
}
