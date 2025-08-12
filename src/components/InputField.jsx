import classNames from 'classnames';
import React, { useState } from 'react';

/**
 * 사용자의 상태(기본, 타이핑, 에러, 비활성화)에 따라
 * 스타일이 동적으로 변경되는 Input 컴포넌트입니다.
 * 'classnames' 라이브러리를 사용하여 조건부 스타일링을 구현합니다.
 */
const InputField = () => {
  // --- State 정의 ---
  const [inputState, setInputState] = useState(''); // input의 실제 값
  const [isTyping, setIsTyping] = useState(false); // 포커스 여부 (타이핑 중인지)
  const [isDisabled, setIsDisabled] = useState(false); // 비활성화 여부
  const [isError, setIsError] = useState(false); // 에러 상태 여부

  // input 값이 변경될 때 호출되는 핸들러
  const handleInput = (e) => {
    if (isDisabled) return; // 비활성화 상태에서는 입력을 막음
    setInputState(e.target.value);
  };

  return (
    <input
      onChange={handleInput}
      onFocus={() => setIsTyping(true)} // 포커스되면 isTyping을 true로 설정
      onBlur={() => setIsTyping(false)} // 포커스를 잃으면 isTyping을 false로 설정
      value={inputState}
      disabled={isDisabled}
      placeholder="placeholder"
      className={classNames(
        // 모든 상태에 공통으로 적용될 기본 스타일
        'flex justify-between p-4 mb-2 border-2 text-left rounded-lg w-80 focus:outline-none',

        // --- 상태별 조건부 스타일 ---
        {
          // 기본 상태 (포커스 X, 비활성화 X, 에러 X)
          'text-grayscale5 placeholder-grayscale5 cursor-pointer bg-white border-grayscale3':
            !isTyping && !isDisabled && !isError,

          // 타이핑 중인 상태
          'text-grayscale9 placeholder-grayscale9 cursor-pointer bg-white border-grayscale5':
            isTyping && !isDisabled && !isError,

          // 에러 상태
          'placeholder-grayscale9 bg-white cursor-pointer border-error':
            isError && !isDisabled,

          // 비활성화 상태
          'placeholder-grayscale4 bg-grayscale1 border-grayscale3': isDisabled,
        }
      )}
    />
  );
};

export default InputField;
