import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between py-2 mx-auto max ">
      <div className="flex gap-3">
        <img
          src="RollingIcon.svg"
          alt="롤링페이퍼 로고"
          width={27.82}
          height={27.82}
        />
        <h3 className="font-bold text-gray-900">Rolling</h3>
      </div>
      <div>
        <button className="">임시 버튼</button>
      </div>
    </header>
  );
};

export default Header;
