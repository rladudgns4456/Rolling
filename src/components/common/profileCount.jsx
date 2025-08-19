import profileManLeft from '../../assets/profile/profile-man-left.png';
import profileManRight from '../../assets/profile/profile-man-right.png';
import profileWoman from '../../assets/profile/profile-woman.png';
export default function ProfileCount({ isColumn, messageCount, recentImage }) {
  return (
    <div
      className={`z-10 flex justify-start ${isColumn ? 'flex-col items-start gap-3' : 'flex-row items-center'}`}
    >
      <div className="mr-[11px] profileBox relative  flex w-[76px] h-8">
        <img
          className="absolute z-10 rounded-full w-7 h-7"
          src={recentImage[0]}
          alt=""
        />
        <img
          className="absolute z-20 rounded-full w-7 h-7 left-4"
          src={recentImage[1]}
          alt=""
        />
        <img
          className="absolute z-30 rounded-full w-7 h-7 left-8"
          src={recentImage[2]}
          alt=""
        />
        <div className="z-40 font-bold-500 bg-white absolute rounded-full border border-[#E3E3E3] left-12 w-[33px] h-[28px] flex justify-center items-center text-[12px] leading-[18px] tracking-normal">
          {`+${messageCount - 3}`}
        </div>
      </div>
      <p className="text-lg leading-6 tracking-wide">
        <span className="font-bold ">{messageCount}</span>명이 작성했어요!
      </p>
    </div>
  );
}
