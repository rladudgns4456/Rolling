import { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>CARD</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[600px] h-[476px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] bg-white rounded-2xl">
            <div className="w-[520px] flex justify-between items-center mx-auto pt-8 pb-4">
              <div className="flex gap-4 items-center">
                <div>API이미지</div> {/* 추후 img태그로 변경 */}
                <div>
                  <span className="font-normal text-xl">From.</span>
                  <span className="font-bold text-xl"> API 이름</span>
                  <div>동료</div>
                </div>
              </div>
              <span className="font-normal text-sm text-grayscale4">
                API 날짜
              </span>
            </div>
            <p className="w-[520px] h-64 mx-auto text-lg text-gray-600 border-t border-t-grayscale2 py-2">
              API 내용
            </p>
            <button className="mt-5" onClick={() => setIsOpen(false)}>
              확인
            </button>
            {/* 버튼 컴포넌트 쓸 예정 */}
          </div>
        </div>
      )}
    </>
  );
}
