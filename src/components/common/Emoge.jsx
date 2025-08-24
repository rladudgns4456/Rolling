// Emoges.jsx
const emogeClass = `
  w-fit h-[32px] md:h-9 text-[14px] leading-[20px] tracking-[-0.5%] 
  rounded-[32px] pt-[6px] pb-[6px] px-2 md:px-3 opacity-100 gap-1 md:gap-2 bg-[#0000008A] flex 
`;

export default function Emoges({ topReactions = [], className = '' }) {
  const items = Array.isArray(topReactions) ? topReactions : [];

  return (
    <div className={className}>
      {items.map((reaction, idx) => {
        const key = reaction?.id ?? `${reaction?.emoji ?? 'emoji'}-${idx}`;
        const emoji =
          typeof reaction?.emoji === 'string' ? reaction.emoji : '🙂';
        const count = Number.isFinite(reaction?.count) ? reaction.count : 0;
z
        return (
          <div key={key} className={emogeClass}>
            {emoji}
            <span className="text-[14px] md:text-[16px] tracking-normal leading-5 text-white">
              {count}
            </span>
          </div>
        );
      })}
    </div>
  );
}
