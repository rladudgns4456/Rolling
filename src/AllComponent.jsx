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
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IconButton from './components/post/IconButton';
import IconLabelButton from './components/common/IconLabelButton';
import TextButton from './components/common/TextButton';
import CircleIconButton from './components/common/CircleIconButton';
import ToggleButtonGroup from './components/common/ToggleButtonGroup';
import RichTextEditor from './components/message/RichTexteditor';
import Dropdown from './components/message/Dropdown';
import Header from './components/common/Header';
import InputField from './components/common/InputField';
import RecipientInfo from './components/post/RecipientInfo';
// 아이콘(asset 경로/파일명 대소문자 주의)
import Smile from './assets/icon/ic_smile.svg';
import Deleted from './assets/icon/ic_deleted.svg';
import Plus from './assets/icon/ic_plus.svg';
import ArrowLeft from './assets/icon/arrow_left.svg';
import ArrowRight from './assets/icon/arrow_right.svg';

import { useState, useEffect } from 'react';
import UserRollingContainer from './components/post/UserRollingContainer';
import BackgroundSelect from './components/background/BackgroundSelect';
import UserProfilePreview from './components/post/UserProfilePreview';
import Modal from './components/post/Modal';
import Toast from './components/post/Toast';

const BaseURL = 'https://rolling-api.vercel.app';

import CardListCard from './components/list/CardListCard';

export default function Allcomponent() {
  const [bgImageUrl, setBgImageUrl] = useState([]);
  useEffect(() => {
    fetch(`${BaseURL}/background-images/`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log('API 응답 데이터:', data);
        if (data.imageUrls) {
          setBgImageUrl(data.imageUrls);
          console.log(data.imageUrls);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <>
        <Toast />
        <div></div>
        <Modal />{' '}
        <div className="cardList grid grid-cols-4 gap-[10px]">
          <CardListCard bgColor="bg-purple1" color="purple" name="Sowon" />
          <CardListCard bgColor="bg-beige2" color="beige" name="Sowon" />
          <CardListCard bgColor="bg-blue2" color="blue" name="Sowon" />
          <CardListCard bgColor="bg-green1" color="green" name="Sowon" />
          <CardListCard
            bgColor="bg-purple1"
            color="purple"
            name="Sowon"
            bgImageUrl={bgImageUrl[0]} //길이는 0~3까지만 4부터는 아무것도없음 나중에 수정
          />
          <CardListCard
            bgColor="bg-purple1"
            color="purple"
            name="Sowon"
            bgImageUrl={bgImageUrl[1]} //길이는 0~3까지만 4부터는 아무것도없음 나중에 수정
          />
          <CardListCard
            bgColor="bg-purple1"
            color="purple"
            name="Sowon"
            bgImageUrl={bgImageUrl[2]} //길이는 0~3까지만 4부터는 아무것도없음 나중에 수정
          />
          <CardListCard
            bgColor="bg-purple1"
            color="purple"
            name="Sowon"
            bgImageUrl={bgImageUrl[3]} //길이는 0~3까지만 4부터는 아무것도없음 나중에 수정
          />
        </div>
        <div className="px-5 sm:px-6 xl:px-10 w-max-[1280px]">
          <UserRollingContainer />
          <BackgroundSelect />
          <UserProfilePreview />
        </div>
        <div className="p-6 space-y-10">
          {/* ------------------------------------------------------------------ */}
          {/* Primary
          - 브랜드 기본 버튼 계열
          - size 56(주 버튼) / 40(서브)
          - demo: hover/pressed/focus 로 시뮬레이션 */}
          {/* ------------------------------------------------------------------ */}
          <section className="space-y-4">
            <h2 className="font-semibold">Primary</h2>

            <div className="flex gap-8">
              {/* size 56: 텍스트 전용 */}
              <div className="space-y-2">
                {/* 패턴: 같은 props에 상태만 바꿔서 시연 */}
                <TextButton size={56} variant="primary" responsive="hug">
                  Enabled
                </TextButton>
                <TextButton
                  size={56}
                  variant="primary"
                  responsive="hug"
                  disabled
                >
                  Disabled
                </TextButton>
                <TextButton
                  size={56}
                  variant="primary"
                  responsive="hug"
                  demo="hover"
                >
                  Hover
                </TextButton>
                <TextButton
                  size={56}
                  variant="primary"
                  responsive="hug"
                  demo="pressed"
                >
                  Pressed
                </TextButton>
                <TextButton
                  size={56}
                  variant="primary"
                  responsive="hug"
                  demo="focus"
                >
                  Focus
                </TextButton>
              </div>

              {/* size 40: 서브 버튼 */}
              <div className="space-y-2">
                <TextButton size={40} variant="servePrimary" responsive="hug">
                  Enabled
                </TextButton>
                <TextButton
                  size={40}
                  variant="servePrimary"
                  responsive="hug"
                  disabled
                >
                  Disabled
                </TextButton>
                <TextButton
                  size={40}
                  variant="servePrimary"
                  responsive="hug"
                  demo="hover"
                >
                  Hover
                </TextButton>
                <TextButton
                  size={40}
                  variant="servePrimary"
                  responsive="hug"
                  demo="pressed"
                >
                  Pressed
                </TextButton>
                <TextButton
                  size={40}
                  variant="servePrimary"
                  responsive="hug"
                  demo="focus"
                >
                  Focus
                </TextButton>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* Secondary
          - 보조 버튼(보라색 아웃라인/텍스트)
          - size 28 고정, responsive="default" 로 모바일/태블릿에서 넓이 대응 */}
          {/* ------------------------------------------------------------------ */}
          <section className="space-y-4">
            <h2 className="font-semibold">Secondary</h2>

            <div className="space-y-2">
              <TextButton size={28} variant="secondary" responsive="default">
                Enabled
              </TextButton>
              <TextButton
                size={28}
                variant="secondary"
                responsive="default"
                disabled
              >
                Disabled
              </TextButton>
              {/* Secondary는 hover/pressed 동일 데모 키 사용 */}
              <TextButton
                size={28}
                variant="secondary"
                responsive="default"
                demo="secondary"
              >
                Hover
              </TextButton>
              <TextButton
                size={28}
                variant="secondary"
                responsive="default"
                demo="secondary"
              >
                Pressed
              </TextButton>
              <TextButton size={28} variant="secondary" responsive="default">
                Focus
              </TextButton>
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* Outlined
          - 흰 배경 + 회색 보더
          - 56/40/36/28(텍스트), 40/36/28(아이콘+라벨), 24(아이콘-only) */}
          {/* ------------------------------------------------------------------ */}
          <section className="space-y-4">
            <h2 className="font-semibold">Outlined</h2>

            {/* size 56: 텍스트 전용 라인 */}
            <div className="space-y-2">
              <TextButton size={56} variant="outlined" responsive="hug">
                Enabled
              </TextButton>
              <TextButton
                size={56}
                variant="outlined"
                responsive="hug"
                disabled
              >
                Disabled
              </TextButton>
              <TextButton
                size={56}
                variant="outlined"
                responsive="hug"
                demo="outlined"
              >
                Hover
              </TextButton>
              <TextButton
                size={56}
                variant="outlined"
                responsive="hug"
                demo="outlined"
              >
                Pressed
              </TextButton>
              <TextButton
                size={56}
                variant="outlined"
                responsive="hug"
                demo="outlinedFocus"
              >
                Focus
              </TextButton>
            </div>

            {/* 40/36/28 묶음: 텍스트 / 아이콘+라벨 / 아이콘-only */}
            {/* 참고: 여기도 향후 RBText/RBIconLabel/RBIconOnly 로 교체하면
                 '한 세트 + 뷰포트별 size 교체' 방식으로 전환 가능 */}
            <div className="grid grid-cols-4 gap-8">
              {/* --- 40 텍스트 --- */}
              <div className="space-y-2">
                <TextButton size={40} variant="outlined" responsive="hug">
                  Enabled
                </TextButton>
                <TextButton
                  size={40}
                  variant="outlined"
                  responsive="hug"
                  disabled
                >
                  Disabled
                </TextButton>
                <TextButton
                  size={40}
                  variant="outlined"
                  responsive="hug"
                  demo="outlined"
                >
                  Hover
                </TextButton>
                <TextButton
                  size={40}
                  variant="outlined"
                  responsive="hug"
                  demo="outlined"
                >
                  Pressed
                </TextButton>
                <TextButton
                  size={40}
                  variant="outlined"
                  responsive="hug"
                  demo="outlinedFocus"
                >
                  Focus
                </TextButton>
              </div>

              {/* --- 40 아이콘+라벨 --- */}
              <div className="space-y-2">
                {/* iconSrc 로 svg 파일 전달 */}
                <IconLabelButton size={40} variant="outlined" iconSrc={Smile}>
                  Enabled
                </IconLabelButton>
                <IconLabelButton
                  size={40}
                  variant="outlined"
                  iconSrc={Smile}
                  disabled
                >
                  Disabled
                </IconLabelButton>
                <IconLabelButton
                  size={40}
                  variant="outlined"
                  iconSrc={Smile}
                  demo="outlined"
                >
                  Hover
                </IconLabelButton>
                <IconLabelButton
                  size={40}
                  variant="outlined"
                  iconSrc={Smile}
                  demo="outlined"
                >
                  Pressed
                </IconLabelButton>
                <IconLabelButton
                  size={40}
                  variant="outlined"
                  iconSrc={Smile}
                  demo="outlinedFocus"
                >
                  Focus
                </IconLabelButton>
              </div>

              {/* --- 24 아이콘-only (Deleted 아이콘) --- */}
              <div className="flex flex-col justify-start gap-2">
                {/* 아이콘-only는 size 24 고정(정사각) */}
                <IconButton size={24} variant="outlined" iconSrc={Deleted} />
                <IconButton size={24} variant="outlined" iconSrc={Deleted} />
                <IconButton size={24} variant="outlined" iconSrc={Deleted} />
                <IconButton size={24} variant="outlined" iconSrc={Deleted} />
              </div>

              {/* --- 36 텍스트 --- */}
              <div className="space-y-2">
                <TextButton size={36} variant="outlined" responsive="hug">
                  Enabled
                </TextButton>
                <TextButton
                  size={36}
                  variant="outlined"
                  responsive="hug"
                  disabled
                >
                  Disabled
                </TextButton>
                <TextButton
                  size={36}
                  variant="outlined"
                  responsive="hug"
                  demo="outlined"
                >
                  Hover
                </TextButton>
                <TextButton
                  size={36}
                  variant="outlined"
                  responsive="hug"
                  demo="outlined"
                >
                  Pressed
                </TextButton>
                <TextButton
                  size={36}
                  variant="outlined"
                  responsive="hug"
                  demo="outlinedFocus"
                >
                  Focus
                </TextButton>
              </div>

              {/* --- 36 아이콘+라벨 --- */}
              <div className="space-y-2">
                <IconLabelButton size={36} variant="outlined" iconSrc={Smile}>
                  Enabled
                </IconLabelButton>
                <IconLabelButton
                  size={36}
                  variant="outlined"
                  iconSrc={Smile}
                  disabled
                >
                  Disabled
                </IconLabelButton>
                <IconLabelButton
                  size={36}
                  variant="outlined"
                  iconSrc={Smile}
                  demo="outlined"
                >
                  Hover
                </IconLabelButton>
                <IconLabelButton
                  size={36}
                  variant="outlined"
                  iconSrc={Smile}
                  demo="outlined"
                >
                  Pressed
                </IconLabelButton>
                <IconLabelButton
                  size={36}
                  variant="outlined"
                  iconSrc={Smile}
                  demo="outlinedFocus"
                >
                  Focus
                </IconLabelButton>
              </div>

              {/* --- 28 텍스트 --- */}
              <div className="space-y-2">
                <TextButton size={28} variant="outlined" responsive="hug">
                  Enabled
                </TextButton>
                <TextButton
                  size={28}
                  variant="outlined"
                  responsive="hug"
                  disabled
                >
                  Disabled
                </TextButton>
                <TextButton
                  size={28}
                  variant="outlined"
                  responsive="hug"
                  demo="outlined"
                >
                  Hover
                </TextButton>
                <TextButton
                  size={28}
                  variant="outlined"
                  responsive="hug"
                  demo="outlined"
                >
                  Pressed
                </TextButton>
                <TextButton
                  size={28}
                  variant="outlined"
                  responsive="hug"
                  demo="outlinedFocus"
                >
                  Focus
                </TextButton>
              </div>

              {/* --- 28 아이콘+라벨 --- */}
              <div className="space-y-2">
                <IconLabelButton size={28} variant="outlined" iconSrc={Smile}>
                  Enabled
                </IconLabelButton>
                <IconLabelButton
                  size={28}
                  variant="outlined"
                  iconSrc={Smile}
                  disabled
                >
                  Disabled
                </IconLabelButton>
                <IconLabelButton
                  size={28}
                  variant="outlined"
                  iconSrc={Smile}
                  demo="outlined"
                >
                  Hover
                </IconLabelButton>
                <IconLabelButton
                  size={28}
                  variant="outlined"
                  iconSrc={Smile}
                  demo="outlined"
                >
                  Pressed
                </IconLabelButton>
                <IconLabelButton
                  size={28}
                  variant="outlined"
                  iconSrc={Smile}
                  demo="outlinedFocus"
                >
                  Focus
                </IconLabelButton>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* Arrow Button (원형 아이콘) : 정적 데모 */}
          {/* ------------------------------------------------------------------ */}
          <section className="space-y-4">
            <h2 className="font-semibold">Arrow Button</h2>
            <div className="flex items-center gap-3">
              <CircleIconButton
                size={32}
                variant="outlined"
                iconSrc={ArrowRight}
              />
              <CircleIconButton
                size={32}
                variant="outlined"
                iconSrc={ArrowLeft}
              />
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* Toggle Button (세그먼트) */}
          {/* ------------------------------------------------------------------ */}
          <section className="space-y-4">
            <h2 className="font-semibold">Toggle Button</h2>
            <div>
              <ToggleButtonGroup
                options={['컬러', '이미지']}
                defaultIndex={0}
              />
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* Circle Icon Button 상태 데모 (dark variant) */}
          {/* ------------------------------------------------------------------ */}
          <section className="space-y-3">
            <div className="flex flex-col gap-2">
              <CircleIconButton variant="dark" iconSrc={Plus} /> {/* Enabled */}
              <CircleIconButton variant="dark" iconSrc={Plus} disabled />{' '}
              {/* Disabled */}
              <CircleIconButton
                variant="dark"
                iconSrc={Plus}
                demo="hover"
              />{' '}
              {/* Hover */}
              <CircleIconButton
                variant="dark"
                iconSrc={Plus}
                demo="pressed"
              />{' '}
              {/* Pressed */}
              <CircleIconButton
                variant="dark"
                iconSrc={Plus}
                demo="none"
              />{' '}
              {/* Focus */}
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* Rich Text Editor (정적 UI) */}
          {/* ------------------------------------------------------------------ */}
          <div className="p-6">
            <RichTextEditor />
          </div>
        </div>
        <Header />
        <RecipientInfo />
        <Dropdown />
        <InputField />
      </>
    </>
  );
}
