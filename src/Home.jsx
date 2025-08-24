import { useNavigate } from 'react-router-dom';
import point1 from './assets/images/point_1.png';
import point2 from './assets/images/point_2.png';
import TextButton from './components/common/TextButton';
import useWindowReSize from './hooks/useWindowResize';

export default function MainPage() {
  const navigate = useNavigate();
  const windowWidth = useWindowReSize(); //브라우저 크기 변화 감지
  return (
    <div className="pb-20 pt-14">
      <div
        className="
        mx-auto w-full max-w-[1248px]    
        px-5 md:px-6       
        flex
        flex-col
        gap-y-6
        md:gap-y-8
      "
      >
        {/* Point 01 */}
        <section className="px-6 py-8 rounded-2xl bg-indigo-50/50 md:px-8 md:py-12 lg:px-10 lg:py-16">
          <div className="flex flex-col items-center gap-8 xl:flex-row xl:gap-10">
            <div className="basis-1/2 max-w-[560px]">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-full bg-purple6">
                Point. 01
              </span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
                누구나 손쉽게, 온라인
                <br />
                롤링 페이퍼를 만들 수 있어요
              </h2>
              <p className="mt-2 text-gray-600 md:text-lg text-[15px]">
                로그인 없이 자유롭게 만들어요.
              </p>
            </div>
            <div className="flex justify-center w-full basis-1/2 xl:justify-end">
              <img
                className="absolute max-h-full -translate-x-1/2 -translate-y-1/2 md:relative max-w-none md:max-w-full top-1/2 left-1/2 md:max-h-full md:translate-x-0 md:translate-y-0 md:top-0 md:left-0"
                src={point1}
                alt="롤링 미리보기 1"
              />
            </div>
          </div>
        </section>

        {/* Point 02 */}
        <section className="px-6 py-8 rounded-2xl bg-indigo-50/50 md:px-8 md:py-12 lg:px-10 lg:py-16">
          <div className="flex flex-col items-center gap-8 xl:flex-row-reverse xl:gap-10">
            <div className="basis-1/2 max-w-[560px]">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-full bg-purple6">
                Point. 02
              </span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
                서로에게 이모지로 감정을
                <br />
                표현해보세요
              </h2>
              <p className="mt-2 text-gray-600 md:text-lg text-[15px]">
                롤링 페이퍼에 이모지를 추가할 수 있어요.
              </p>
            </div>
            <div className="flex justify-center w-full basis-1/2 xl:justify-start">
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
