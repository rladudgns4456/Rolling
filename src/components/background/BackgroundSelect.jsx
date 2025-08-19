import { useEffect, useState } from 'react';
import ToggleButtonGroup from '../common/ToggleButtonGroup';
import BackgroundOption from './BackgroundOption';

//배경 옵션 선택 wrap
function BackgroundSelect({ handleTabChange, handleBgChange, defaultIndex }) {
  const [tabIndex, setTabIndex] = useState(defaultIndex); //첫번째 탭 선택

  const onHandleClick = (index) => {
    setTabIndex(index);
    handleTabChange(index);
  };

  useEffect(()=>{
    setTabIndex(defaultIndex);
  },[defaultIndex]);  

  return (
    <>
      <ToggleButtonGroup
        className={`mb-[45px]`}
        options={['컬러', '이미지']}
        defaultIndex={tabIndex}
        onChange={onHandleClick}
      />
      <BackgroundOption tabIndex={tabIndex} handleBgChange={handleBgChange} />
    </>
  );
}

export default BackgroundSelect;
