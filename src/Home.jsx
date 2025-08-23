import { useNavigate } from 'react-router-dom';
import point1 from './assets/images/point_1.png';
import point2 from './assets/images/point_2.png';
import TextButton from './components/common/TextButton';
import useWindowReSize from './hooks/useWindowResize';

export default function MainPage() {
  const navigate = useNavigate();
  const windowWidth = useWindowReSize(); //브라우저 크기 변화 감지
  return (
    <div className="pb-8 md:pb-20 pt-14">
      <div
        className="
        mx-auto w-full max-w-[1248px]    
        px-5 md:px-6 
      "
      >
        {/* Point 01 */}
        <section className="py-8 rounded-2xl bg-indigo-50/50 md:py-10  xl:py-[60px] min-h-[324px]">
          <div className="flex flex-col justify-between h-full xl:flex-row md:gap-y-9 xl:gap-0 gap-y-12">
            <div className="px-6 md:px-10 xl:px-0  xl:pl-[60px] xl:pr-0">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-full bg-purple6">
                Point. 01
              </span>
              <h2 className="mt-3 text-lg font-bold text-gray-900 md:text-2xl">
                누구나 손쉽게, 온라인
                <br />
                롤링 페이퍼를 만들 수 있어요
              </h2>
              <p className="mt-2 text-gray-600 md:text-lg text-[15px]">
                로그인 없이 자유롭게 만들어요.
              </p>
            </div>
            <div
              className="relative overflow-hidden text-0 min-h-[114px]"
              style={{ minHeight: windowWidth < 768 ? '30.4vw' : 'auto' }}
            >
              <img
                className="absolute max-h-full -translate-x-1/2 -translate-y-1/2 md:relative max-w-none md:max-w-full top-1/2 left-1/2 md:max-h-full md:translate-x-0 md:translate-y-0 md:top-0 md:left-0"
                src={point1}
                alt="롤링 미리보기 1"
              />
            </div>
          </div>
        </section>

        {/* Point 02 */}
        <section className="px-6 py-8 rounded-2xl bg-indigo-50/50 md:px-0 md:py-12 xl:pr-[60px] xl:pl-0  xl:py-16 min-h-[324px] ">
          <div className="flex flex-col justify-end h-full xl:flex-row-reverse md:gap-y-9 xl:gap-0 gap-y-12">
            <div className="md:px-10 xl:px-0">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-full bg-purple6">
                Point. 02
              </span>
              <h2 className="mt-3 text-lg font-bold text-gray-900 md:text-2xl">
                서로에게 이모지로 감정을
                <br />
                표현해보세요
              </h2>
              <p className="mt-2 text-gray-600 md:text-lg text-[15px]">
                롤링 페이퍼에 이모지를 추가할 수 있어요.
              </p>
            </div>
            <div className="flex justify-center w-full max-w-[720px] xl:justify-center">
              <img src={point2} alt="롤링 미리보기 2" />
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
