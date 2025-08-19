// src/App.jsx
// -----------------------------------------------------------------------------
// Design System Showcase (협업 가이드)
// - 목적: 버튼 컴포넌트(TextButton / IconLabelButton / IconButton / CircleIconButton)
//   를 스타일/사이즈/상태별로 한 화면에서 확인하기 위한 데모 페이지.
// - 공통 props
//   * size: 56/40/36/28/24(아이콘-only)
//   * variant: 'primary' | 'servePrimary' | 'secondary' | 'outlined' | (etc.)
//   * responsive: 'hug' | 'default' | 'none'  // width 정책
//   * demo: 상태 시뮬레이션 ('hover'|'pressed'|'focus'|'outlined'|'outlinedFocus'|'secondary')
//   * iconSrc: 아이콘 URL(svg), IconLabelButton/IconButton 전용
// - 정렬/간격은 Tailwind 유틸만 사용(별도 CSS 없음).
//
// [중요] 반응형 전략(향후 적용):
//   지금 화면은 “상태 데모”를 위해 사이즈마다 별도로 렌더링합니다.
//   만약 화면 폭에 따라 **같은 버튼 세트의 size만 바꾸는** UX가 필요하면
//   components/ResponsiveButton.jsx 의 RBText/RBIconLabel/RBIconOnly 래퍼를 사용하세요.
//   → 예: <RBText map={{ mobile: 28, tablet: 40, pc: 56 }} variant="outlined">Enabled</RBText>
//   (이 파일은 데모 유지, 실제 제품 화면에선 RB* 사용 권장)
// -----------------------------------------------------------------------------

// 아이콘(asset 경로/파일명 대소문자 주의)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './layout/Layout';
import Message from './pages/Message';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 버튼이 보여야 하는 라우트 묶음 */}
          <Route element={<Layout showCta={true} />}>
            <Route path="/post/:recipientId/message" element={<Message />} />

            {/* 버튼이 보여야 하는 추가 페이지들을 여기에 */}
          </Route>

          {/* 버튼이 보이면 안 되는 라우트 묶음 */}
          <Route element={<Layout showCta={false} />}>
            {/* 예: /post/preview, /editor 등도 여기에 */}
            {/* <Route path="/post/preview" element={<PostPreview />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
