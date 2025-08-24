import { useNavigate } from 'react-router-dom';
import point1 from './assets/images/point_1.png';
import point2 from './assets/images/point_2.png';
import TextButton from './components/common/TextButton';

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-14 pb-20">
      <div
        className="
        mx-auto w-full max-w-[1248px]
        px-6 md:px-[clamp(24px,6vw,80px)] xl:px-0
        space-y-10 md:space-y-14 lg:space-y-16
      "
      >
        {/* Point 01 */}
        <section
          className="
          rounded-2xl bg-indigo-50/50
          px-6  py-8
          md:px-8  md:py-12
          lg:px-10 lg:py-16
        "
        >
          <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10">
            <div className="basis-1/2 max-w-[560px]">
              <span className="inline-block rounded-full bg-purple6 px-3 py-1 text-sm font-semibold text-white">
                Point. 01
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
                누구나 손쉽게, 온라인
                <br />
                롤링 페이퍼를 만들 수 있어요
              </h2>
              <p className="mt-2 text-gray-600">
                로그인 없이 자유롭게 만들어요.
              </p>
            </div>
            <div className="basis-1/2 w-full flex justify-center xl:justify-end">
              <img
                src={point1}
                alt="롤링 미리보기 1"
                className="w-full max-w-[560px] rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Point 02 */}
        <section
          className="
          rounded-2xl bg-indigo-50/50
          px-6  py-8
          md:px-8  md:py-12
          lg:px-10 lg:py-16
        "
        >
          <div className="flex flex-col xl:flex-row-reverse items-center gap-8 xl:gap-10">
            <div className="basis-1/2 max-w-[560px]">
              <span className="inline-block rounded-full bg-purple6 px-3 py-1 text-sm font-semibold text-white">
                Point. 02
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
                서로에게 이모지로 감정을
                <br />
                표현해보세요
              </h2>
              <p className="mt-2 text-gray-600">
                롤링 페이퍼에 이모지를 추가할 수 있어요.
              </p>
            </div>
            <div className="basis-1/2 w-full flex justify-center xl:justify-start">
              <img
                src={point2}
                alt="롤링 미리보기 2"
                className="w-full max-w-[560px] rounded-xl"
              />
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <TextButton
            variant="primary"
            size={56}
            className="w-full md:w-full lg:w-[clamp(280px,60vw,420px)] justify-center"
            onClick={() => navigate('/list')}
          >
            구경해보기
          </TextButton>
        </div>
      </div>
    </div>
  );
}
