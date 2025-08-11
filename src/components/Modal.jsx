import { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달클릭</button>

      {isOpen && (
        <div className="w-[600px] h-[476px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-8">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div>API이미지</div> {/* 추후 img태그로 변경 */}
              <div>
                <span className="font-normal text-xl">From.</span>
                <span className="font-bold text-xl"> 코드잇</span>
                <div>동료</div>
              </div>
            </div>
            <span>2025.08.11</span>
          </div>
          <p>블라블라</p>
        </div>
      )}
    </>
  );
}
