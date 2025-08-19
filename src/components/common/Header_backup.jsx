// import React from 'react';

// const Header = () => {
//   const handleClick = () => {
//     //롤링페이퍼 페이지로 이동
//   };

//   return (
//     <header className="border-b">
//       <div className="flex items-center justify-between h-16 max-w-full px-5 mx-auto tablet:max-w-7xl pc:max-w-screen-xl">
//         <div className="flex items-center gap-3">
//           <img
//             src="Rolling_icon.svg"
//             alt="롤링페이퍼 로고"
//             width={27.82}
//             height={27.82}
//           />
//           <h3 className="font-bold text-gray-900">Rolling</h3>
//         </div>
//         <div>
//           <button
//             onClick={handleClick}
//             className="px-4 py-2 border rounded-md border-grayscale3 text-grayscale9"
//           >
//             롤링 페이퍼 만들기
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

import { useLocation } from 'react-router-dom';

const Header = () => {
  const handleClick = () => {
    //롤링페이퍼 페이지로 이동
  };

  const location = useLocation();

  // 특정 페이지에서 버튼을 숨기고 싶다면
  const hideButtonOnPaths = ['/RollingPaperCreate', '/Post'];
  const shouldHideButton = hideButtonOnPaths.includes(location.pathname);

  return (
    <header className="border-b">
      <div className="flex items-center justify-between h-16 max-w-full px-5 mx-auto tablet:max-w-7xl pc:max-w-screen-xl">
        <div className="flex items-center gap-3">
          <img
            src="Rolling_icon.svg"
            alt="롤링페이퍼 로고"
            width={27.82}
            height={27.82}
          />
          <h3 className="font-bold text-gray-900">Rolling</h3>
        </div>
        <div>
          {!shouldHideButton && (
            <button
              onClick={handleClick}
              className="px-4 py-2 border rounded-md border-grayscale3 text-grayscale9"
            >
              롤링 페이퍼 만들기
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
