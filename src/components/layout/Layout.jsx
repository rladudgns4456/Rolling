// src/layout/Layout.jsx
import Header from '../common/Header';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useWindowReSize from '../../hooks/useWindowResize';

export default function Layout({ showCta = true }) {
  const location = useLocation();
  const windowWidth = useWindowReSize(); //브라우저 크기 변화 감지
  const isMobile =  location.pathname.startsWith('/post');
  const hiddenHeader = windowWidth<768 && isMobile;

  return (
    <>
      {!hiddenHeader && <Header showCta={showCta} />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
