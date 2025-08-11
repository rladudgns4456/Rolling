import React, { useState } from 'react';
import classNames from 'classnames';

const Dropdown = () => {
  const [dropdownStatus, setDropdownStatus] = useState('inactive');

  const handleClick = () => {
    setDropdownStatus(dropdownStatus === 'error' ? 'error' : 'active');
  };

  return (
    <div className="">
      <div>
        <button
          onClick={handleDropdown}
          className={classNames(
            'flex justify-between p-4 mb-2 border-2 text-grayscale5 border-grayscale3 text-left rounded-lg cursor-pointer w-80',
            {
              'text-grayscale9 bg-grayscale5': dropdownStatus === 'active',
              'text-grayscale9 bg-error': dropdownStatus === 'error',
            }
          )}
        >
          드롭다운{' '}
          {dropdownStatus === 'deActive' ? (
            <img src="/arrow_bottom.svg" alt="" />
          ) : (
            <img src="/arrow_top.svg" />
          )}
        </button>
      </div>
      {dropdown && (
        <ul className="border rounded-lg w-80 border-grayscale3">
          <li className="p-4 cursor-pointer hover:bg-grayscale1">데이터1</li>
          <li className="p-4 cursor-pointer hover:bg-grayscale1">데이터2</li>
          <li className="p-4 cursor-pointer hover:bg-grayscale1">데이터3</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
