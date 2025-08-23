import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

const Dropdown = ({
  dropdownMenus,
  value,
  onChange,
  isError,
  isDisabled,
  ariaLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const listRef = useRef(null);
  const dropdownRef = useRef(null);

  const className = classNames(
    // 공통 기본 스타일
    'flex justify-between p-4 mb-2 border-2  text-left rounded-lg cursor-pointer w-80',
    {
      // --- 상태별 조건부 스타일 ---
      // 기본 닫힘 상태
      'text-grayscale5 bg-white border-grayscale3':
        !isOpen && !isError && !isDisabled,
      // 열린 상태
      'text-grayscale9 bg-white border-grayscale5':
        isOpen && !isError && !isDisabled,
      // 에러 상태
      'text-grayscale9 bg-white border-error': isError && !isDisabled,
      // 비활성화 상태
      'text-grayscale4 bg-grayscale1 border-grayscale3': isDisabled,
    }
  );

  const handleKeyDown = (e) => {
    if (isDisabled) return;
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        setIsOpen((prev) => !prev);
        if (isOpen && highlightedIndex >= 0) {
          onChange(dropdownMenus[highlightedIndex]);
        }
        break;

      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) setIsOpen(true);
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : dropdownMenus.length - 1
        );
        break;

      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) setIsOpen(true);
        setHighlightedIndex((prev) =>
          prev < dropdownMenus.length ? prev + 1 : 0
        );
        break;

      case 'Escape':
        setIsOpen(false);
        break;

      case 'Tab':
        setIsOpen(false);
        break;

      default:
        break;
    }
  };

  const handleDropdownClick = () => {
    if (isError || isDisabled) return;
    setIsOpen(!isOpen);
  };

  // 컴포넌트 외부를 클릭하면 드롭다운이 닫히도록 하는 로직
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]); // 의존성 배열에 ref를 전달

  useEffect(() => {
    if (isOpen && highlightedIndex >= 0) {
      listRef.current?.children[highlightedIndex]?.scrollIntoView({
        block: 'nearest',
      });
    }
  }, [isOpen, highlightedIndex]);

  return (
    <div className="relative w-80" ref={dropdownRef} onKeyDown={handleKeyDown}>
      <label id={`dropdown-label`} className="sr-only">
        {ariaLabel} 선택
      </label>
      <input type="hidden" value={value} />
      <div>
        <button
          type="button"
          aria-labelledby="dropdown-label"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={handleDropdownClick}
          disabled={isError || isDisabled}
          className={className}
        >
          {value}
          {/* 상태에 따라 다른 화살표 아이콘을 조건부로 렌더링 */}
          {isDisabled ? (
            <img src="/arrow_disabled.svg" alt="비활성화 화살표 아이콘" />
          ) : (
            <img
              src={isOpen ? '/arrow_top.svg' : '/arrow_bottom.svg'}
              alt={isOpen ? '윗 방향 화살표 아이콘' : '아랫방향 화살표 아이콘'}
            />
          )}
        </button>
      </div>

      {/* 메뉴가 열려있고, 에러 또는 비활성화 상태가 아닐 때만 목록을 표시 */}
      {!isError && !isDisabled && isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          className="absolute z-10 bg-white border rounded-lg w-80 border-grayscale3"
        >
          {dropdownMenus.map((item, index) => (
            <li
              key={index}
              role="option"
              aria-selected={highlightedIndex === index || value === item}
              className={`p-4 cursor-pointer ${highlightedIndex === index && 'bg-grayscale1'}`}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* 에러 상태일 때만 에러 메시지를 표시 */}
      {isError && <p className="absolute text-error ">에러 메세지</p>}
    </div>
  );
};

export default Dropdown;
