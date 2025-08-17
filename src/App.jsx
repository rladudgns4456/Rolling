// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

import PostPage from './pages/PostPage';
import Allcomponent from './AllComponent';
// 필요하면 다른 페이지들 import

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 버튼이 보여야 하는 라우트 묶음 */}
        <Route element={<Layout showCta={true} />}>
          {/* 버튼이 보여야 하는 추가 페이지들을 여기에 */}
        </Route>

        {/* 버튼이 보이면 안 되는 라우트 묶음 */}
        <Route element={<Layout showCta={false} />}>
          <Route path="/post/:recipientId" element={<PostPage />} />

          {/* 예: /post/preview, /editor 등도 여기에 */}
          {/* <Route path="/post/preview" element={<PostPreview />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
