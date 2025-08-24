import { useEffect, useState } from 'react';
import BackgroundSelect from '../components/background/BackgroundSelect';
import InputField from '../components/common/InputField';
import TextButton from '../components/common/TextButton';
import { postRollingPaper } from '../api/postRollingPaper';
import { useNavigate } from 'react-router-dom';
import useWindowReSize from '../hooks/useWindowResize';


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
  const windowWidth = useWindowReSize(); //브라우저 크기 변화 감지

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
      navigate(`/post/${id}`);

    } catch (error) {
      alert(error);
      return;
    } finally {
      setSenderNameInput('');
      setDefaultIndex(0);
    }
  };

  return (
    <div
      className=" mx-auto w-full max-w-[1248px]    
        px-5 md:px-6"
    >
      <article
        className="flex flex-col mx-auto sm:max-w-[720px] pt-[49px] md:pt-[57px] pb-6"
        style={{
          minHeight: windowWidth >= 768 ? 'calc(100vh - 65px)' : 0,
        }}
      >
        <div className="flex flex-col mb-[42px] gap-y-3">
          <h2 className="text-2xl font-bold leading-10 text-grayscale9">To.</h2>
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
          <h3 className="text-2xl font-bold leading-normal">
            배경화면을 선택해 주세요.
          </h3>
          <p className="mb-6 leading-relaxed">
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
  );
}

export default CreateRollingPaper;
