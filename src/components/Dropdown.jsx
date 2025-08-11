import React, { useState } from 'react';
import classNames from 'classnames';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(true);

  const handleClick = () => {
    if (isError) {
      setIsOpen(isOpen);
    } else {
      setIsOpen(!isOpen);
    }
  };
  return (
    <div className="">
      <div>
        <button
          onClick={handleClick}
          className={classNames(
            'flex justify-between p-4 mb-2 border-2 text-grayscale5 border-grayscale3 text-left rounded-lg cursor-pointer w-80',
            {
              'text-grayscale9 border-grayscale5': isOpen,
              'text-grayscale9 border-error': isError,
            }
          )}
        >
          드롭다운
          {isOpen ? (
            <img src="/arrow_top.svg" alt="윗 방향 화살표 아이콘" />
          ) : (
            <img src="/arrow_bottom.svg" alt="아랫방향 화살표 아이콘" />
          )}
        </button>
      </div>
      {isError ||
        (isOpen && (
          <ul className="border rounded-lg w-80 border-grayscale3">
            <li className="p-4 cursor-pointer hover:bg-grayscale1">데이터1</li>
            <li className="p-4 cursor-pointer hover:bg-grayscale1">데이터2</li>
            <li className="p-4 cursor-pointer hover:bg-grayscale1">데이터3</li>
          </ul>
        ))}
      {isError && <p className="text-error">에러 메세지</p>}
    </div>
  );
};

export default Dropdown;
