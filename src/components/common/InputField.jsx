import classNames from 'classnames';
import React, { useState } from 'react';

const InputField = ({
  name,
  value,
  isDisabled,
  isError,
  placeholder,
  onChange,
  onBlur,
}) => {
  const [isTyping, setIsTyping] = useState(false);

  const className = classNames(
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
  );

  return (
    <div>
      <input
        name={name}
        onChange={onChange}
        onFocus={() => {
          setIsTyping(true);
        }}
        onBlur={() => {
          onBlur?.();
          setIsTyping(false);
        }}
        value={value}
        disabled={isDisabled}
        placeholder={placeholder} //placeholder prop으로 받음
        className={className}
      />
      {isError === true && <p className="text-error">값을 입력해 주세요.</p>}
    </div>
  );
};

export default InputField;
