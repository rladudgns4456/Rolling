// Emoges.jsx
const emogeClass = `
<<<<<<< HEAD
  w-fit h-[32px] md:h-9 text-[14px] leading-[20px] tracking-[-0.5%] 
  rounded-[32px] pt-[6px] pb-[6px] px-2 md:px-3 opacity-100 gap-1 md:gap-2 bg-[#0000008A] flex 
=======
  w-[55px] h-[32px] text-[14px] leading-[20px] tracking-[-0.5%] 
  rounded-[32px] pt-[6px] pr-[8px] pb-[6px] pl-[8px] opacity-100 gap-1 bg-[#0000008A] flex 
>>>>>>> b2cd11d28ce4083b2fb95fef2ee9a57ea7e2bbd9
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
            <span className="text-[14px] md:text-[16px] tracking-normal leading-5 text-white">
              {count}
            </span>
          </div>
        );
      })}
    </div>
  );
}
