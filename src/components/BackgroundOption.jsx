import { useState } from 'react';
import checkIcon from '../assets/icon/check.svg';
import bgImage1 from '../assets/images/bg_img_1.png';
import bgImage2 from '../assets/images/bg_img_2.png';
import bgBeige from '../assets/images/beige.png';
import bgPurple from '../assets/images/purple.png';
import bgBlue from '../assets/images/blue.png';
import bgGreen from '../assets/images/green.png';

const backgroundOptions = {
  colorOptions: [
    { value: 'beige', bgImg: bgBeige },
    { value: 'purple', bgImg: bgPurple },
    { value: 'blue', bgImg: bgBlue },
    { value: 'green', bgImg: bgGreen },
  ],
  imageOptions: [
    { value: 'bgImage1', bgImg: bgImage1 },
    { value: 'bgImage2', bgImg: bgImage2 },
    { value: 'bgImage3', bgImg: bgImage1 },
    { value: 'bgImage4', bgImg: bgImage2 },
  ],
};

function BackgroundOption({ tab }) {
  const [selectOption, setSelectOption] = useState('beige');

  const handleChange = (e) => {
    setSelectOption(e.target.value);
  };

  return (
    <>
      {/*선택 라디오 폼*/}
      <form>
        {tab ? (
          <div className="flex flex-wrap gap-3 overflow-hidden sm:gap-x-4">
            {backgroundOptions.colorOptions.map((option) => (
              <OptionItem
                key={option.value}
                value={option.value}
                bgImg={option.bgImg}
                formName="bgColor"
                selectOption={selectOption}
                onChange={handleChange}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 sm:gap-x-4">
            {backgroundOptions.imageOptions.map((option) => (
              <OptionItem
                key={option.value}
                value={option.value}
                bgImg={option.bgImg}
                formName="bgImage"
                selectOption={selectOption}
                onChange={handleChange}
              />
            ))}
          </div>
        )}
      </form>
    </>
  );
}

//선택 옵션 박스
function OptionItem({ value, bgImg, formName, selectOption, onChange }) {
  const isSelected = selectOption === value;
  const bgImage = formName === 'bgImage';

  return (
    <label className="overflow-hidden flex items-center justify-center w-[154px] y-[154px] sm:w-[168px] sm:h-[168px] rounded-2xl border border-black[.8] cursor-pointer">
      <input
        className="hidden"
        type="radio"
        value={value}
        name={formName}
        checked={isSelected}
        onChange={onChange}
      />
      {/*컬러 OR 이미지*/}
      {isSelected && bgImage ? (
        <img
          className="transition-opacity opacity-30 hover:opacity-30"
          src={bgImg}
          alt=""
        />
      ) : (
        <img
          className="transition-opacity hover:opacity-30"
          src={bgImg}
          alt=""
        />
      )}

      {isSelected && (
        <span className="absolute z-30 flex items-center justify-center rounded-full lex w-11 h-11 bg-grayscale5">
          <img
            className="transition-all duration-300 ease-in-out"
            src={checkIcon}
            alt="check"
          />
        </span>
      )}
    </label>
  );
}

export default BackgroundOption;
