import { Outlet } from 'react-router-dom';
import CreateRollingPaper from './CreateRollingPaper';

export default function Home() {
  return (
    <>
      {/* <div className="min-h-screen">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 xl:px-10"> */}
          <CreateRollingPaper />
        {/* </div>
      </div> 배경화면이 있는 페이지가 있어 각페이지에서 사용 */}
    </>
  );
}
