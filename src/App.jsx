import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './Home';
import Header from './components/common/Header';
import List from './pages/list';
import CreateRollingPaper from './pages/CreateRollingPaper';
import PostPage from './pages/PostPage';
import Message from './pages/Message';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ 버튼이 보여야 하는 라우트 묶음 */}
        {/* 버튼 보이는 페이지를 여기에 계속 추가 */}
        {/* <Route path="/list" element={<ListPage />} /> */}
        <Route element={<Layout showCta={true} />}>
          <Route path="/" element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        {/* 🚫 버튼이 보이면 안 되는 라우트 묶음 */}
        {/* <Route path="/post" element={<PostPage>}*/}
        {/* 숨겨야 하는 페이지들을 여기에 */}
        <Route element={<Layout showCta={false} />}>
          <Route path="/post/" element={<CreateRollingPaper />} />
          <Route path="/post/:recipientId" element={<PostPage />} />
          <Route path="/post/:recipientId/message" element={<Message />} />   
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
