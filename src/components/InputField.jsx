import classNames from 'classnames';
import React, { useState } from 'react';

const InputField = () => {
  const [inputState, setInputState] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInput = (e) => {
    if (isDisabled) return;
    setInputState(e.target.value);
  };

  return (
    <input
      onChange={handleInput}
      onFocus={() => setIsTyping(true)}
      onBlur={() => setIsTyping(false)}
      value={inputState}
      disabled={isDisabled}
      placeholder="placeholder"
      className={classNames(
        // 모든 상태에 공통으로 적용될 기본 스타일
        'flex justify-between p-4 mb-2 border-2 text-left rounded-lg w-80 focus:outline-none',

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
