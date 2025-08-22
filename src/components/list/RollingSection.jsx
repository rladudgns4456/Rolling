// src/components/list/RollingSection.jsx
import { Link } from 'react-router-dom';
import CardListCard from './CardListCard';

export default function RollingSection({
  title,
  items = [],
  pageMeta,
  onPaginate,
  groupSize = 4,
  outerClassName = '',
}) {
  const showPrev = !!pageMeta?.previous;
  const showNext = !!pageMeta?.next;
  console.log('delete');
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold leading-6 tracking-widest">
        {title}
      </h2>

      <div
        className={`xl:w-[1160px] -mx-5 px-5 md:-mx-6 md:px-6 overflow-x-auto xl:overflow-visible no-scrollbar ${outerClassName}`}
      >
        <div className="flex gap-5 w-max xl:w-auto">
          {items.map((item, index) => {
            const isFirstInGroup = index % groupSize === 0;
            const isLastInGroup = (index + 1) % groupSize === 0;

            return (
              <div className="relative shrink-0" key={item.id ?? index}>
                <Link to={`/post/${item.id}`}>
                  <CardListCard
                    bgColor={item.backgroundColor}
                    bgImageUrl={item.backgroundImageURL}
                    color={item.backgroundColor}
                    name={item.name}
                    messageCount={item.messageCount ?? 0}
                    recentImage={(item.recentMessages ?? [])
                      .map((m) => m.profileImageURL)
                      .filter(Boolean)}
                    topReactions={item.topReactions ?? []}
                  />
                </Link>

                {showPrev && isFirstInGroup && (
                  <button
                    aria-label="이전 페이지"
                    className="absolute left-[-12px] top-1/2 -translate-y-1/2 
                      bg-white rounded-full shadow-md 
                      w-8 h-8 flex items-center justify-center
                      border border-gray-200 hover:bg-gray-100"
                    onClick={() => onPaginate('prev')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                )}

                {showNext && isLastInGroup && (
                  <button
                    aria-label="다음 페이지"
                    className="absolute right-[-12px] top-1/2 -translate-y-1/2 
                      bg-white rounded-full shadow-md 
                      w-8 h-8 flex items-center justify-center
                      border border-gray-200 hover:bg-gray-100"
                    onClick={() => onPaginate('next')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
