import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

const InputField = ({ value, placeholder, onValueCheck, handleBlur }) => {
  //placeholder prop으로 받음
  const [inputState, setInputState] = useState(value);
  const [isTyping, setIsTyping] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const INNER_CLASS_NAME = {
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
  };

  const handleInput = (e) => {
    if (isDisabled) return;
    const value = e.target.value;
    setInputState(value);

    //상위 컴포넌트로 값 전달
    if (value.trim() !== '') {
      onValueCheck(value);
      setIsError(false); //에러가 있었을 경우 없앰
    }
  };

  useEffect(() => {
    setInputState(value);
     setIsError(false);
  }, [value]);//부모로 부터 받은 값의 변화에 따라 inputState를 변경

  return (
    <input
      onChange={handleInput}
      onFocus={() => setIsTyping(true)}
      onBlur={() => {
        setIsTyping(false);
        //포커스를 잃었을때 상위 컴포넌트로 값 전달
        handleBlur();
        //인풋이 공백일때만 에러
        if (inputState === '') {
          setIsError(true);
        }
      }}
      value={inputState}
      disabled={isDisabled}
      placeholder={placeholder} //placeholder prop으로 받음
      // inputValueClear={inputValueClear}
      className={classNames(
        // 모든 상태에 공통으로 적용될 기본 스타일
        'flex justify-between p-4 mb-2 border-2 text-left rounded-lg w-80 focus:outline-none',
        INNER_CLASS_NAME
      )}
      maxlength="9" //9자 글자 제한
    />
  );
};

export default InputField;
