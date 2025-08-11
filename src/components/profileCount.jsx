import profileManLeft from '../assets/profile/profile-man-left.png';
import profileManRight from '../assets/profile/profile-man-right.png';
import profileWoman from '../assets/profile/profile-woman.png';
export default function ProfileCount({ isColumn, totalCount }) {
  return (
    <div
      className={`flex justify-start ${isColumn ? 'flex-col items-start gap-3' : 'flex-row items-center'}`}
    >
      <div className="mr-[11px] profileBox relative  flex w-[76px] h-[28px]">
        <img
          className="z-10 absolute w-[28px] h-[28px]"
          src={profileManLeft}
          alt=""
        />
        <img
          className="z-20 absolute left-4 w-[28px] h-[28px]"
          src={profileWoman}
          alt=""
        />
        <img
          className="z-30 absolute left-8 w-[28px] h-[28px]"
          src={profileManRight}
          alt=""
        />
        <div className="z-40 bg-white absolute rounded-full border border-[#E3E3E3] left-12 w-[28px] h-[28px] flex justify-center items-center font-bold-500 text-[12px] leading-[18px] tracking-normal">
          {`+${totalCount - 3}`}
        </div>
      </div>

      <p className="text-lg leading-6 tracking-wide">
        <span className="font-bold ">{totalCount}</span>명이 작성했어요!
      </p>
    </div>
  );
}
