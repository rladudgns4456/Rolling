import { Link } from 'react-router-dom';

const Header = ({ showButton = true }) => {
  return (
    <header className="border-b">
      {/* 모바일: 20px(px-5), Tablet: 24px(px-6), PC: 40px(px-10) */}
      <div className="mx-auto w-full max-w-[1280px] mobile:px-5 tablet:px-6 pc:px-10 h-16 flex items-center justify-between">
        {/* 로고 클릭 시 / 이동 + 간격이 화면 크기에 따라 자연스럽게 변함 */}
        <Link to="/" className="flex items-center gap-3 tablet:gap-6">
          <img
            src="Rolling_icon.svg"
            alt="롤링페이퍼 로고"
            width={28}
            height={28}
          />
          <h3 className="text-xl font-bold text-gray-900">Rolling</h3>
        </Link>

        {showButton && (
          // '롤링 페이퍼 만들기' 클릭 시 /post 이동
          <Link
            to="/post"
            className="px-4 py-2 border rounded-md border-grayscale3 text-grayscale9"
          >
            롤링 페이퍼 만들기
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
