import Header from '../common/Header';
import { Outlet } from 'react-router-dom';

export default function Layout({ showCta = true }) {
  return (
    <>
      <Header showButton={showCta} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
