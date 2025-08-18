import React from 'react';
import { useState } from 'react';
import BackgroundSelect from '../components/background/BackgroundSelect';
import InputField from '../components/common/InputField';
import TextButton from '../components/common/TextButton';
import { use } from 'react';

function List({ bgImageUrl }) {
  const [toSpace, setToSpace] = useState(true); //받는 사람 이름
  const [isDisabled, setIsDisabled] = useState(true); //받는 사람 이름
  const [placeholder, setPlaceholder] =
    useState('받는 사람 이름을 입력허세요.');
  const [backGround, setBackground] = useState();

  return (
    <article className="flex flex-col mx-auto min-h-screen sm:max-w-[720px] pt-[122px] pb-6">
      <div className="flex flex-col gap-y-3 mb-[50px]">
        <h2 className="text-2xl font-bold">To.</h2>
        <InputField placeholder={placeholder} />
      </div>
      <div className="mb-[45px]">
        <h3 className="mb-1 text-2xl font-bold">배경화면을 선택해 주세요.</h3>
        <p className="mb-6">컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        <BackgroundSelect bgImageUrl={bgImageUrl} />
      </div>
      {toSpace && (
        <TextButton
          className="w-full mt-auto xl:my-6"
          size={56}
          variant="primary"
          responsive="hug"
          disabled={isDisabled}
        >
          리스트 페이지
        </TextButton>
      )}
    </article>
  );
}

export default Post;
