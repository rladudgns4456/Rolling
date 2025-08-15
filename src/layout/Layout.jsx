// src/layout/Layout.jsx
import Header from '../components/common/Header';
import { Outlet } from 'react-router-dom';

export default function Layout({ showCta = true }) {
  return (
    <>
      <Header showCta={showCta} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
