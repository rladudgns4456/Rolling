import { useState } from 'react';
import SelectTab from './SelectTab';
import BackgroundOption from './BackgroundOption';

function BackgroundSelect() {
  const [tab, setTab] = useState(1);
  const handleClick = (e) => {
    if (e.target.innerText === 'color') {
      setTab(1);
    } else {
      setTab(0);
    }
  };

  return (
    <>
      {/*탭 버튼 영훈님 컴포넌트로 교체 */}
      <SelectTab tab={tab} handleClick={handleClick} />
      <BackgroundOption tab={tab} />
    </>
  );
}

export default BackgroundSelect;
