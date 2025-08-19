const emogeClass = `
  w-[53px] h-[32px] text-[14px] leading-[20px] tracking-[-0.5%] 
  rounded-[32px] pt-[6px] pr-[8px] pb-[6px] pl-[8px] opacity-100 gap-1`;

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
