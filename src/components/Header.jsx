import React from 'react';

const Header = () => {
  const handleClick = () => {
    //롤링페이퍼 페이지로 이동
  };

  return (
    <header className="border-b">
      <div className="flex items-center justify-between h-16 max-w-full mx-auto tablet:max-w-7xl pc:max-w-[1200px]">
        <div className="flex items-center gap-3">
          <img
            src="Rolling_icon.svg"
            alt="롤링페이퍼 로고"
            width={27.82}
            height={27.82}
          />
          <h3 className="font-bold text-gray-900">Rolling</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
