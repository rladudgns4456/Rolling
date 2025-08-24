// CardListCard.jsx
import Emoges from '../common/Emoge';
import ProfileCount from '../common/profileCount';
import Shadow from './Shadow';

// API color → Tailwind 매핑
const bgColorMap = {
  green: 'bg-green2',
  blue: 'bg-blue2',
  purple: 'bg-purple2',
  beige: 'bg-beige2',
};

/** 공통 유틸 클래스 */
const CARD_BASE =
  'cardList relative z-0 bg-center bg-cover shrink-0 rounded-[16px] border border-[#0000001A] opacity-100 shadow-[0px_2px_12px_0px_#00000014]';
const CARD_SIZE =
  // 모바일 크기 + 태블릿/PC 동일
  'w-[208px] h-[232px] tablet:w-[275px] tablet:h-[260px] pc:w-[275px] pc:h-[260px]';
const CARD_PADDING = 'pt-[30px] pr-[24px] pb-[20px] pl-[24px]';

const TITLE =
  // 기본(모바일) + 태블릿/PC 동일 규칙만 추가
  'text-[18px] leading-[28px] tracking-[-0.01em] font-pretendard font-bold ' +
  'tablet:mb-3 mb-3 tablet:text-[24px] pc:text-[24px] tablet:leading-9 pc:leading-9 ' +
  'tablet:flex pc:flex tablet:justify-start pc:justify-start ' +
  'tablet:whitespace-nowrap pc:whitespace-nowrap tablet:overflow-hidden pc:overflow-hidden ' +
  'tablet:text-ellipsis pc:text-ellipsis';

const INNER_WRAP = 'relative flex flex-col z-30 w-full h-full p-0';

export default function CardListCard({
  bgColor,
  color,
  name,
  bgImageUrl,
  messageCount = 0,
  recentImage = [],
  topReactions = [],
}) {
  return (
    <div
      className={[
        CARD_BASE,
        CARD_SIZE,
        CARD_PADDING,
        bgColorMap[bgColor] ?? '',
      ].join(' ')}
      style={bgImageUrl ? { backgroundImage: `url(${bgImageUrl})`} : undefined}
      aria-label={name ? `To. ${name}` : undefined}
    >
      <div className={INNER_WRAP}>
        <span className={TITLE}>To. {name}</span>

        <ProfileCount
          messageCount={messageCount}
          recentImage={recentImage}
          bgImageUrl={bgImageUrl}
          isColumn
        />
        {topReactions.length > 0 && (
          <Emoges
            topReactions={topReactions}
            className="flex gap-1 md:gap-3 border-t border-[#0000001F] pt-[17px] z-30 mt-auto"
          />
        )}
      </div>

      {/* 배경 이미지가 없을 때만 색 그림자 */}
      {!bgImageUrl && <Shadow color={color} />}
    </div>
  );
}
