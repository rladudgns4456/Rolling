import Emoge from './Emoge';
import ProfileCount from './profileCount';
import UserName from './UserName';

import Shadow from './Shadow';
const Color = {
  purple: 'top-[118px] left-[133px] absolute',
  beige: 'top-[118px] left-[133px] absolute',
  blue: 'top-[118px] left-[133px] absolute',
  green: 'top-[118px] left-[133px] absolute',
};
export default function CardList({ bgColor, color }) {
  return (
    <>
      <div
        className={`cardList relative z-1 ${bgColor} w-[275px] h-[260px] pt-[30px] pr-[24px] pb-[20px] pl-[24px] rounded-[16px]  border border-[#0000001A] shadow-[0px_2px_12px_0px_#00000014]`}
      >
        <div className="p-0 w-[227px] h-[210px]">
          <UserName
            className="z-10 flex justify-start mb-3  text-[24px] font-bold leading-9 tracking-[-0.01em]"
            cardList={true}
            name="Sowon"
          />
          <ProfileCount totalCount="30" isColumn={true} />
          <Emoge className="flex pt-[17px] pr-[28px] gap-[10px] mt-[43px] w-[227px] h-[53px] border-t border-[#0000001F]" />
          <Shadow color={color} />
        </div>
      </div>
    </>
  );
}
