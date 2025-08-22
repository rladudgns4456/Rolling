// Emoges.jsx
const emogeClass = `
  w-[55px] h-[32px] text-[14px] leading-[20px] tracking-[-0.5%] 
  rounded-[32px] pt-[6px] pr-[8px] pb-[6px] pl-[8px] opacity-100 gap-1 bg-[#0000008A] flex 
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

        return (
          <div key={key} className={emogeClass}>
            {emoji}
            <span className="text-[16px] tracking-normal leading-5 text-white">
              {count}
            </span>
          </div>
        );
      })}
    </div>
  );
}
