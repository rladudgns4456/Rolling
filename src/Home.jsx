// src/pages/MainPage.jsx
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="py-10">
      {/* 섹션 공통 컨테이너:
          - mobile: 좌우 24px 고정
          - tablet: 좌우 여백이 화면 폭에 따라 가변 (조건 5)
          - pc: 중앙 1248px 고정, 좌우 0 */}
      <div
        className="
        mx-auto w-full max-w-[1248px]
        mobile:px-6
        tablet:px-[clamp(24px,6vw,80px)]
        pc:px-0
      "
      >
        {/* Point 01 */}
        <section className="rounded-2xl bg-indigo-50/50 p-6 tablet:p-8 pc:p-10">
          <div className="grid gap-8 tablet:grid-cols-2 tablet:items-center">
            {/* 왼쪽 텍스트 */}
            <div>
              <span className="inline-block rounded-full bg-purple-600/10 px-3 py-1 text-sm font-semibold text-purple-600">
                Point. 01
              </span>
              <h2 className="mt-3 text-2xl font-bold tablet:text-3xl">
                누구나 손쉽게, 온라인
                <br />
                롤링 페이퍼를 만들 수 있어요
              </h2>
              <p className="mt-2 text-gray-600">
                로그인 없이 자유롭게 만들어요.
              </p>
            </div>
            {/* 오른쪽 미리보기(자유롭게 교체) */}
            <div className="flex items-center justify-center">
              <div className="flex gap-4">
                <div className="h-28 w-44 rounded-xl bg-white shadow" />
                <div className="h-28 w-44 rounded-xl bg-white shadow" />
                <div className="h-28 w-44 rounded-xl border-2 border-dashed border-gray-300" />
              </div>
            </div>
          </div>
        </section>

        {/* 여백 */}
        <div className="h-8" />

        {/* Point 02 */}
        <section className="rounded-2xl bg-indigo-50/50 p-6 tablet:p-8 pc:p-10">
          <div className="grid gap-8 tablet:grid-cols-2 tablet:items-center">
            {/* 왼쪽 미리보기 */}
            <div className="flex items-center justify-center order-2 tablet:order-1">
              <div className="h-28 w-72 rounded-xl bg-white shadow flex items-center justify-center">
                <div className="grid grid-cols-5 gap-2">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="h-6 w-10 rounded bg-gray-100 shadow-inner"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* 오른쪽 텍스트 */}
            <div className="order-1 tablet:order-2">
              <span className="inline-block rounded-full bg-purple-600/10 px-3 py-1 text-sm font-semibold text-purple-600">
                Point. 02
              </span>
              <h2 className="mt-3 text-2xl font-bold tablet:text-3xl">
                서로에게 이모지로 감정을 표현해보세요
              </h2>
              <p className="mt-2 text-gray-600">
                롤링 페이퍼에 이모지를 추가할 수 있어요.
              </p>
            </div>
          </div>
        </section>

        {/* CTA: 구경해보기 (조건 3,6) */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/list"
            className="
              rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow
              mobile:w-full
              tablet:w-[clamp(220px,40vw,360px)]  /* Tablet에서 버튼 너비 가변 */
              pc:w-auto
              text-center
              active:scale-[.98] hover:opacity-95
            "
          >
            구경해보기
          </Link>
        </div>
      </div>
    </div>
  );
}
