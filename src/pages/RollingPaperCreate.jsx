import { useState } from 'react';
import BackgroundSelect from '../components/background/BackgroundSelect';
import InputField from '../components/common/InputField';
import TextButton from '../components/common/TextButton';
import { createRollingPaper } from '../components/api/api';
import { useNavigate } from 'react-router-dom';

import { use } from 'react';

function RollingPaperCreate() {
  const [toNameValue, setToNameValue] = useState(''); //받는 사람 이름
  const [isDisabled, setIsDisabled] = useState(true); //생성하기 버튼 활성화
  const [placeholder, setPlaceholder] =
    useState('받는 사람 이름을 입력허세요.');
  const [bgUrl, setBgUrl] = useState({ color: 'beige', image: 'https://picsum.photos/id/683/3840/2160' }); //배경 선택
  const [defaultIndex, setDefaultIndex] = useState(0);
  const [resultId,setResultId]=useState();

  //value 리턴 값으로 인풋 변경 감지
  const handleNameCheck = (value) => {
    setToNameValue(value);
    if (value.trim() !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  //이름 빈 값 에러 감지
  const handleBlur = () => {
    setPlaceholder('값을 입력해 주세요.');
  };

  //배경 변경 감지
  const handleBgChange = (color, image) => {
    setBgUrl({ color: color, image: image });
    console.log(setBgUrl);
  };

  //탭 인덱스 변경 감지
  const handleTabChange = (index) => {
    setDefaultIndex(index);
  };

  //엔터로 폼 전송 막기
  const handlePreventSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  //폼 전송
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsDisabled(false);
      const result=  await createRollingPaper({ toNameValue, bgUrl });
      console.log(result.id)

      alert('생성 완료!'); // 성공 메시지  
    } catch (error) {         
      alert(error);
      return;
    } finally {
      setIsDisabled(true);
      setToNameValue('');
      setDefaultIndex(0);
      setPlaceholder('받는 사람 이름을 입력허세요.');
    }
  };

  return (
    <article className="flex flex-col mx-auto min-h-screen sm:max-w-[720px] pt-[122px] pb-6">
      <div className="flex flex-col gap-y-3 mb-[50px]">
        <h2 className="text-2xl font-bold">To.</h2>
        <form onKeyDown={handlePreventSubmit}>
          <InputField
            placeholder={placeholder}
            onValueCheck={handleNameCheck}
            handleBlur={handleBlur}
            value={toNameValue} //상위 요소의 상태와 동기화 시킴
          />
        </form>
      </div>
      <div className="mb-[45px]">
        <h3 className="mb-1 text-2xl font-bold">배경화면을 선택해 주세요.</h3>
        <p className="mb-6">컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        <BackgroundSelect
          handleBgChange={handleBgChange}
          handleTabChange={handleTabChange}
          defaultIndex={defaultIndex}
        />
      </div>
      <TextButton
        className="w-full mt-auto xl:my-6"
        size={56}
        variant="primary"
        responsive="hug"
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        생성하기
      </TextButton>
    </article>
  );
}

export default RollingPaperCreate;
