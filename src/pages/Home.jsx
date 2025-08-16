import { Outlet } from 'react-router-dom';
import BackgroundCreate from './BackgroundCreate';

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 xl:px-10">
          <BackgroundCreate />
        </div>
      </div>
    </>
  );
}
