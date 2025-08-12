import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

/**
 * 상태(기본, 열림, 에러, 비활성화)에 따라 동적으로 스타일과 동작이 변경되는 드롭다운 컴포넌트입니다.
 */
const Dropdown = () => {
  // --- State 정의 ---
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 메뉴의 열림/닫힘 상태
  const [isError, setIsError] = useState(false); // 에러 상태 여부
  const [isDisabled, setIsDisabled] = useState(false); // 비활성화 상태 여부
  const dropdownRef = useRef(null);

  // 드롭다운 버튼 클릭 시 호출되는 핸들러
  const handleClick = () => {
    // 에러 또는 비활성화 상태에서는 드롭다운이 열리지 않도록 방어
    if (isError || isDisabled) return;
    // isOpen 상태를 반전시켜 메뉴를 열고 닫음
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handleClickOutside = (event) => {
      // dropdownRef.current가 존재하고, 클릭한 요소(event.target)가
      // 드롭다운(dropdownRef.current) 내부에 포함되지 않았을 경우
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // 메뉴를 닫습니다.
      }
    };

    // document에 mousedown 이벤트 리스너를 추가
    document.addEventListener('mousedown', handleClickOutside);

    // 클린업(cleanup) 함수: 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]); // 의존성 배열에 ref를 전달

  return (
    // 'relative' 클래스로 드롭다운 메뉴(ul)를 자식으로 위치시키기 위한 기준점을 설정
    <div className="relative w-80" ref={dropdownRef}>
      <div>
        <button
          onClick={handleClick}
          disabled={isError || isDisabled}
          // 'classnames' 라이브러리를 사용해 상태에 따라 클래스를 동적으로 적용
          className={classNames(
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
          )}
        >
          드롭다운
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
        <ul className="absolute bg-white border rounded-lg w-80 border-grayscale3">
          <li className="p-4 cursor-pointer hover:bg-grayscale1">데이터1</li>
          <li className="p-4 cursor-pointer hover:bg-grayscale1">데이터2</li>
          <li className="p-4 cursor-pointer hover:bg-grayscale1">데이터3</li>
          <li className="p-4 cursor-pointer hover:bg-grayscale1">데이터4</li>
        </ul>
      )}

      {/* 에러 상태일 때만 에러 메시지를 표시 */}
      {isError && <p className="absolute text-error ">에러 메세지</p>}
    </div>
  );
};

export default Dropdown;
