import {  useState } from 'react';
import ToggleButtonGroup from '../common/ToggleButtonGroup';
import BackgroundOption from './BackgroundOption';

//배경 옵션 선택 wrap
function BackgroundSelect() {
  const [tab, setTab] = useState(0); //첫번째 탭 선택

  const onHandleClick = (index) => {
    setTab(index);
  };

  return (
    <>
      <ToggleButtonGroup
        className={`mb-[45px]`}
        options={['컬러', '이미지']}
        defaultIndex={tab}
        onChange={onHandleClick}
      />
      <BackgroundOption tab={tab} />
    </>
  );
}


export default BackgroundSelect;
