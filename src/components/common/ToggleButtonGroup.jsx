// src/components/ToggleButtonGroup.jsx
import { useState } from 'react';

export default function ToggleButtonGroup({
  options, // ['컨텐츠','이미지','컬러','이미지']
  defaultIndex = 0,
  onChange,
  className = '',
}) {
  const [idx, setIdx] = useState(defaultIndex);

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
