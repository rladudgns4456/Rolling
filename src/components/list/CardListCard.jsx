import Emoges from '../common/Emoge';
import ProfileCount from '../common/profileCount';

import Shadow from './Shadow';

export default function CardListCard({ bgColor, color, name, bgImageUrl }) {
  return (
    <>
      <div
        className={`bg-center bg-cover cardList relative z-1 ${bgColor} w-[275px] h-[260px] pt-[30px] pr-[24px] pb-[20px] pl-[24px] rounded-[16px]  border border-[#0000001A] shadow-[0px_2px_12px_0px_#00000014]`}
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <div className="p-0 w-[227px] h-[210px]">
          <span className="z-10 flex justify-start mb-3  text-[24px] font-bold leading-9 tracking-[-0.01em]">
            To. {name}
          </span>
          <ProfileCount totalCount="30" isColumn={true} />
          <Emoges className="flex z-10 pt-[17px] pr-[28px] gap-[10px] mt-[43px] w-[227px] h-[53px] border-t border-[#0000001F]" />
          {!bgImageUrl && <Shadow color={color} />}
        </div>
      </div>
    </>
  );
}
