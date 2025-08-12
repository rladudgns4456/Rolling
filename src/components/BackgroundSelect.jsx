import { useState } from 'react';
import checkIcon from '../assets/icon/check.svg';
import bgImage1 from '../assets/images/bg_img_1.png';
import bgImage2 from '../assets/images/bg_img_2.png';
import bgBeige from '../assets/images/beige.png';
import bgPurple from '../assets/images/purple.png';
import bgBlue from '../assets/images/blue.png';
import bgGreen from '../assets/images/green.png';

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
      <SelectTab tab={tab} handleClick={handleClick} />
      <BackgroundOption tab={tab} />
    </>
  );
}

function SelectTab({ tab, handleClick }) {
  return (
    <>
      {/*선택 탭*/}
      <ul className="flex h-10 w-fit rounded-2xl bg-grayscale1">
        <li
          className="flex items-center justify-center w-[7.275rem] sm:w-[7.625rem] "
          onClick={handleClick}
        >
          color
        </li>
        <li
          className="flex items-center justify-center w-[7.275rem] sm:w-[7.625rem] "
          onClick={handleClick}
        >
          image
        </li>
      </ul>
    </>
  );
}

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
            <OptionItem
              value={'beige'}
              bgImg={bgBeige}
              formName={'bgColor'}
              selectOption={selectOption}
              onChange={handleChange}
            />
            <OptionItem
              value={'purple'}
              bgImg={bgPurple}
              formName={'bgColor'}
              selectOption={selectOption}
              onChange={handleChange}
            />
            <OptionItem
              value={'blue'}
              bgImg={bgBlue}
              formName={'bgColor'}
              selectOption={selectOption}
              onChange={handleChange}
            />
            <OptionItem
              value={'green'}
              bgImg={bgGreen}
              formName={'bgColor'}
              selectOption={selectOption}
              onChange={handleChange}
            />
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 sm:gap-x-4">
            <OptionItem
              value={'bgImage1'}
              bgImg={bgImage1}
              formName={'bgImage'}
              selectOption={selectOption}
              onChange={handleChange}
            />
            <OptionItem
              value={'bgImage2'}
              bgImg={bgImage2}
              formName={'bgImage'}
              selectOption={selectOption}
              onChange={handleChange}
            />
            <OptionItem
              value={'bgImage3'}
              bgImg={bgImage1}
              formName={'bgImage'}
              selectOption={selectOption}
              onChange={handleChange}
            />
            <OptionItem
              value={'bgImage4'}
              bgImg={bgImage2}
              formName={'bgImage'}
              selectOption={selectOption}
              onChange={handleChange}
            />
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
    <label className="overflow-hidden flex items-center justify-center w-[9.625rem] y-[9.625rem] sm:w-[10.5rem] sm:h-[10.5rem] rounded-2xl border border-black[.8] cursor-pointer">
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

export default BackgroundSelect;
