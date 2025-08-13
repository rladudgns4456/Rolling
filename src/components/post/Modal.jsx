import { useState } from 'react';
import Badge from './Badge';

export default function Modal({}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>CARD 예시 버튼</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[600px] h-[476px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] bg-white rounded-2xl">
            <div className="w-[520px] flex justify-between items-center mx-auto pt-8 pb-4">
              <div className="flex items-center gap-4">
                <div>API이미지</div> {/* 추후 img태그로 변경 */}
                <div>
                  <span className="text-xl font-normal">From.</span>
                  <span className="text-xl font-bold"> API 이름</span>
                  <Badge relationship="친구" />
                </div>
              </div>
              <span className="text-sm font-normal text-grayscale4">
                API 날짜
              </span>
            </div>
            <p className="w-[520px] h-64 mx-auto text-lg text-gray-600 border-t border-t-grayscale2 py-2">
              API 내용
            </p>
            <div className="flex justify-center mt-5">
              <button onClick={() => setIsOpen(false)}>확인</button>
            </div>
            {/* 버튼 컴포넌트 쓸 예정 */}
          </div>
        </div>
      )}
    </>
  );
}
