// src/components/ToggleButtonGroup.jsx
import { useEffect, useState } from 'react';

export default function ToggleButtonGroup({
  options, // ['컨텐츠','이미지','컬러','이미지']
  defaultIndex,
  onChange,
  className = '',
}) {
  const [idx, setIdx] = useState(defaultIndex);

  useEffect(() => {
    setIdx(defaultIndex);
  }, [defaultIndex]); //prop 받은 인덱스의 변화에 의해 변경

  return (
    <div
      className={`inline-flex bg-grayscale1 p-1 rounded-[12px] border border-grayscale3 ${className}`}
    >
      {options.map((label, i) => {
        const selected = i === idx;
        const base =
          'px-5 h-10 min-w-[92px] rounded-[8px] text-sm transition whitespace-nowrap';
        const cls = selected
          ? 'bg-purple6 text-white'
          : 'text-grayscale6 hover:bg-white';
        return (
          <button
            key={label + i}
            className={`${base} ${cls}`}
            onClick={() => {
              setIdx(i);
              onChange?.(i);
            }}
            type="button"
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
