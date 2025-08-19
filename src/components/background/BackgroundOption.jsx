import { useEffect, useState } from 'react';

import checkIcon from '/src/assets/icon/check.svg';
import bgBeige from '/src/assets/images/beige.png';
import bgPurple from '/src/assets/images/purple.png';
import bgBlue from '/src/assets/images/blue.png';
import bgGreen from '/src/assets/images/green.png';
import bgImage1 from '/src/assets/images/bgImage1.jpg';
import bgImage2 from '/src/assets/images/bgImage2.jpg';
import bgImage3 from '/src/assets/images/bgImage3.jpg';
import bgImage4 from '/src/assets/images/bgImage4.jpg';

const backgroundOptions = {
  colorOptions: [
    { item: 'bgBeige', bgImg: bgBeige, value: 'beige' },
    { item: 'bgPurple', bgImg: bgPurple, value: 'purple' },
    { item: 'bgBlue', bgImg: bgBlue, value: 'blue' },
    { item: 'bgGreen', bgImg: bgGreen, value: 'green' },
  ],
  imageOptions: [
    {
      item: 'bgImage1',
      bgImg: bgImage1,
      value: 'https://picsum.photos/id/683/3840/2160',
    },
    {
      item: 'bgImage2',
      bgImg: bgImage2,
      value: 'https://picsum.photos/id/24/3840/2160',
    },
    {
      item: 'bgImage3',
      bgImg: bgImage3,
      value: 'https://picsum.photos/id/599/3840/2160',
    },
    {
      item: 'bgImage4',
      bgImg: bgImage4,
      value: 'https://picsum.photos/id/1058/3840/2160',
    },
  ],
};

//배경 옵션 라디오 폼
function BackgroundOption({ tabIndex, handleBgChange }) {
  //첫번째 요소 체크
  const [selectOption, setSelectOption] = useState(
    tabIndex == 0
      ? backgroundOptions.colorOptions[0].item
      : backgroundOptions.imageOptions[0].item
  );

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectOption(e.target.dataset.value);
    //배경 선택 요소 상위로 전달
    if (tabIndex == 0) {
      handleBgChange(selectedValue, null);
    } else {
      handleBgChange('beige', selectedValue);
    }
    return selectedValue; // 선택된 값을 반환
  };

  useEffect(() => {
    if (tabIndex === 0) {
      setSelectOption(backgroundOptions.colorOptions[0].item);
    } else {
      setSelectOption(backgroundOptions.imageOptions[0].item);
    }
  }, [tabIndex]);

  return (
    <>
      {/*선택 라디오 폼*/}
      <form>
        <div className="flex flex-wrap gap-3 overflow-hidden sm:gap-x-4">
          {(tabIndex === 0
            ? backgroundOptions.colorOptions
            : backgroundOptions.imageOptions
          ).map((option) => (
            <OptionItem
              key={option.item}
              value={option.value}
              dataValue={option.item}
              bgImg={option.bgImg}
              formName={tabIndex === 0 ? 'bgColor' : 'bgImage'}
              selectOption={selectOption}
              onChange={handleChange}
            />
          ))}
        </div>
      </form>
    </>
  );
}

//선택 옵션 박스
function OptionItem({
  value,
  bgImg,
  formName,
  selectOption,
  dataValue,
  onChange,
}) {
  const isSelected = selectOption === dataValue;
  const bgImage = formName === 'bgImage';

  return (
    <label className="overflow-hidden flex items-center justify-center w-[154px] h-[154px] sm:w-[168px] sm:h-[168px] rounded-2xl border border-black[.8] cursor-pointer">
      <input
        className="hidden"
        type="radio"
        value={value}
        name={formName}
        data-value={dataValue}
        checked={isSelected}
        onChange={onChange}
      />

      <img
        className={`object-cover h-full transition-opacity ${isSelected && bgImage ? 'opacity-30' : 'hover:opacity-30'}`}
        src={bgImg}
        alt={bgImg}
      />

      {/*선택 체크 표시 */}
      {isSelected && (
        <span className="absolute z-30 flex items-center justify-center rounded-full w-11 h-11 bg-grayscale5">
          <img
            className="transition-all duration-1000 ease-in-out"
            src={checkIcon}
            alt="check"
          />
        </span>
      )}
    </label>
  );
}

export default BackgroundOption;
