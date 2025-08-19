import { useEffect, useState } from 'react';
import BackgroundSelect from '../components/background/BackgroundSelect';
import InputField from '../components/common/InputField';
import TextButton from '../components/common/TextButton';
import { postRollingPaper } from '../components/api/api';
import { useNavigate } from 'react-router-dom';

function CreateRollingPaper() {
  const [senderNameInput, setSenderNameInput] = useState(''); //받는 사람 이름
  const [isDisabled, setIsDisabled] = useState(false); //인풋 박스 Disabled
  const [isError, setIsError] = useState(false);
  const [defaultIndex, setDefaultIndex] = useState(0);
  const navigate = useNavigate();
  const [bgUrl, setBgUrl] = useState({
    color: 'beige',
    image: null,
  }); //배경 선택
  const isButtonDisabled = !senderNameInput; //버튼 비활성화

  //인풋 값 감지
  const handleInputChange = (e) => {
    if (isDisabled) return;
    setIsError(false);
    setSenderNameInput(e.target.value);
  };

  //포커스 아웃 에러
  const handleFocusout = () => {
    if (senderNameInput === '') setIsError(true);
  };

  //배경 변경 감지
  const handleBgChange = (color, image) => {
    setBgUrl({ color: color, image: image });
  };

  //탭 인덱스 변경 감지
  const handleTabChange = (index) => {
    setDefaultIndex(index);
  };

  //탭 변경만 았고 옵션 선택 안했을 경우
  useEffect(() => {
    if (defaultIndex === 0) {
      setBgUrl({ color: 'beige', image: null });
    } else {
      setBgUrl({
        color: 'beige',
        image: 'https://picsum.photos/id/683/3840/2160',
      });
    }
  }, [defaultIndex]);

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
      const result = await postRollingPaper({ senderNameInput, bgUrl });
      const { id } = result;

      navigate(`/PostPage/${id}`);
    } catch (error) {
      alert(error);
      return;
    } finally {
      setSenderNameInput('');
      setDefaultIndex(0);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 xl:px-10">
        <article className="flex flex-col mx-auto min-h-screen sm:max-w-[720px] pt-[122px] pb-6">
          <div className="flex flex-col gap-y-3 mb-[50px]">
            <h2 className="text-2xl font-bold">To.</h2>
            <form onKeyDown={handlePreventSubmit}>
              <InputField
                name={'from'}
                value={senderNameInput}
                placeholder="받는 사람 이름을 입력하세요."
                isDisabled={isDisabled}
                isError={isError}
                onChange={handleInputChange}
                onBlur={handleFocusout}
              />
            </form>
          </div>
          <div className="mb-[45px]">
            <h3 className="mb-1 text-2xl font-bold">
              배경화면을 선택해 주세요.
            </h3>
            <p className="mb-6">
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </p>
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
            disabled={isButtonDisabled}
            onClick={handleSubmit}
          >
            생성하기
          </TextButton>
        </article>
      </div>
    </div>
  );
}

export default CreateRollingPaper;
