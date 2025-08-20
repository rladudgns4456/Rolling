import Emoges from '../common/Emoge';
import ProfileCount from '../common/profileCount';

import Shadow from './Shadow';
// API에서 받은 color 키와 Tailwind 클래스 매핑
const bgColorMap = {
  green: 'bg-green2', // green → green2 (#D0F5C3)
  blue: 'bg-blue2', // blue → blue2
  purple: 'bg-purple2', // purple → purple2
  beige: 'bg-beige2', // beige → beige2
};
// CardListCard.jsx
export default function CardListCard({
  bgColor,
  color,
  name,
  bgImageUrl,
  messageCount = 0,
  recentImage = [],
  topReactions = [], // ← 추가: 이모지 상위 배열
}) {
  return (
    <div
      className={`cardList relative z-0 ${bgColorMap[bgColor]}
                  bg-center bg-cover shrink-0
                  /* 모바일 */
                  w-[208px] h-[232px]
                  /* 태블릿 */
                  tablet:w-[275px] tablet:h-[260px]
                  /* PC (태블릿과 동일) */
                  pc:w-[275px] pc:h-[260px]
                  pt-[30px] pr-[24px] pb-[20px] pl-[24px]
                  rounded-[16px] border border-[#0000001A] opacity-100
                  shadow-[0px_2px_12px_0px_#00000014]`}
      style={{ backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : undefined }}
    >
      <div className="relative z-30 w-full h-full p-0 re ">
        <span
          className="
            text-[18px] leading-[28px] tracking-[-0.01em] font-pretendard font-bold
            tablet:z-10 pc:z-10
            tablet:flex pc:flex
            tablet:justify-start pc:justify-start
            tablet:mb-3 pc:mb-3
            tablet:text-[24px] pc:text-[24px]
            tablet:leading-9 pc:leading-9
            tablet:tracking-[-0.01em] pc:tracking-[-0.01em]
            tablet:whitespace-nowrap pc:whitespace-nowrap
            tablet:overflow-hidden pc:overflow-hidden
            tablet:text-ellipsis pc:text-ellipsis
          "
        >
          To. {name}
        </span>

        <ProfileCount
          messageCount={messageCount}
          recentImage={recentImage}
          isColumn
        />

        <Emoges
          topReactions={topReactions}
          className="flex gap-3 mt-[43px] border-t border-[#0000001F] pt-[17px] z-30"
        />
      </div>
      {!bgImageUrl && <Shadow color={color} />}
    </div>
  );
}
