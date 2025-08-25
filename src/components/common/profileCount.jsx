// ProfileCount.jsx
export default function ProfileCount({
  customClassname,
  isColumn = false,
  messageCount = 0,
  recentImage = [],
}) {
  const img0 = recentImage?.[0] ?? '/default-profile.png';
  const img1 = recentImage?.[1] ?? '/default-profile.png';
  const img2 = recentImage?.[2] ?? '/default-profile.png';
  const extra = Math.max(0, messageCount - 3);

  return (
    <div
      className={`${customClassname} z-20 flex justify-start ${isColumn ? 'flex-col items-start gap-3' : 'flex-row items-center'}`}
    >
      <div className="mr-[11px] profileBox relative flex w-[76px] h-8">
        {messageCount > 0 && (
          <img
            className="absolute z-10 rounded-full w-7 h-7"
            src={img0}
            alt=""
          />
        )}
        {messageCount > 1 && (
          <img
            className="absolute z-20 rounded-full w-7 h-7 left-4"
            src={img1}
            alt=""
          />
        )}
        {messageCount > 2 && (
          <img
            className="absolute z-30 rounded-full w-7 h-7 left-8"
            src={img2}
            alt=""
          />
        )}
        {extra > 0 && (
          <div className="z-40 font-bold-500 bg-white absolute rounded-full border border-[#E3E3E3] left-12 w-[33px] h-[28px] flex justify-center items-center text-[12px] leading-[18px] tracking-normal">
            {`+${extra}`}
          </div>
        )}
      </div>
      <p className="text-lg leading-6 tracking-wide">
        <span className="font-bold">{messageCount}</span>명이 작성했어요!
      </p>
    </div>
  );
}
