const emogeClass = `
  w-[53px] h-[32px] text-[14px] leading-[20px] tracking-[-0.5%] 
  rounded-[32px] pt-[6px] pr-[8px] pb-[6px] pl-[8px] opacity-100 gap-1

  tablet:w-[66px] tablet:h-[36px]  
  tablet:pt-2 tablet:pr-3 tablet:pb-2 tablet:pl-3
  tablet:text-[18px] tablet:leading-[26px]

  pc:w-[66px] pc:h-[36px]  
  pc:pt-2 pc:pr-3 pc:pb-2 pc:pl-3
  pc:text-[18px] pc:leading-[26px]

  z-10 rounded-[32px]              
  bg-[#0000008A]
  flex justify-center items-center
  text-white tracking-[0]

`;
export default function Emoges() {
  return (
    <div
      className="
        /* mobile */
        mobile:mt-[33px] mobile:pr-0 mobile:gap-1
        /* tablet */
        flex z-10 pt-[17px] tablet:pr-[28px]
        tablet:gap-[10px] mt-[43px] tablet:w-full tablet:h-[53px]
        border-t border-[#0000001F]

        /* pc */
        pc:pr-[28px]
        pc:gap-[10px] pc:w-full pc:h-[53px]
      "
    >
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
