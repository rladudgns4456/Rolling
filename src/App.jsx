import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ 버튼이 보여야 하는 라우트 묶음 */}
        <Route element={<Layout showCta={true} />}>
          <Route path="/" element={<Home />} />
          {/* 버튼 보이는 페이지를 여기에 계속 추가 */}
          {/* <Route path="/list" element={<ListPage />} /> */}
        </Route>

        {/* 🚫 버튼이 보이면 안 되는 라우트 묶음 */}
        <Route element={<Layout showCta={false} />}>
          {/* <Route path="/post" element={<PostPage />} /> */}
          {/* 숨겨야 하는 페이지들을 여기에 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
