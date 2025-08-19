// src/Header.jsx
import { useNavigate } from 'react-router-dom';
import RollingIcon from '../../assets/icon/Rolling_icon.svg';

export default function Header({ showCta = true }) {
  const nav = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      {/* PC: 1248px 컨테이너 / 그 미만은 좌우 24px 고정 */}
      <div className="mx-auto w-full max-w-[1248px] mobile:px-6 tablet:px-6 pc:px-0 h-16 flex items-center justify-between">
        {/* 로고 → / */}
        <button
          onClick={() => nav('/')}
          className="inline-flex items-center gap-[clamp(8px,8vw,16px)] tablet:gap-6 pc:gap-4"
          aria-label="메인으로 이동"
        >
          <img src={RollingIcon} alt="롤링 로고" width={28} height={28} />
          <span className="text-xl font-bold text-gray-900">Rolling</span>
        </button>

        {/* 우측 CTA → /post (페이지에 따라 노출 제어) */}
        {showCta && (
          <button
            onClick={() => nav('/post')}
            className="px-4 py-2 border rounded-md border-gray-300 text-gray-900 hover:bg-gray-50 active:scale-[.98]"
          >
            롤링 페이퍼 만들기
          </button>
        )}
      </div>
    </header>
  );
}
