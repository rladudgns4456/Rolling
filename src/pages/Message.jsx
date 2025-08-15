import Header from './../components/common/Header';
import InputField from './../components/common/InputField';
import Dropdown from './../components/message/Dropdown';
import 'react-quill/dist/quill.snow.css';
import TextEditor from '../components/message/TextEditor';
import { useState } from 'react';
import defaultProfile from '../assets/profile/default_profile.jpeg';
import ButtonBase from '../components/common/ButtonBase';
import { PROFILE_IMGS } from '../constants/PROFILE_IMGS.JS';

const mockData = {
  relationship: ['친구', '지인', '동료', '가족'],
  font: ['Noto Sans', 'pretenDard', '나눔명조', '나눔손글씨 손편지체'],
};

function Message() {
  const [selectRelationship, setSelectRelationship] = useState(
    mockData.relationship[0]
  );
  const [selectFont, setSelectFont] = useState(mockData.font[0]);
  const [selectedProfile, setSelectedProfile] = useState(defaultProfile);

  const handleBtnChange = (type, value) => {
    if (type === 'relationship') {
      setSelectRelationship(value);
    } else {
      setSelectFont(value);
    }
  };

  const handleProfileClick = (src) => {
    setSelectedProfile(src);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="mobile:w-[360px] w-[720px] flex flex-col gap-12 px-5 mx-auto tablet:max-w-7xl pc:max-w-screen-xl"
      >
        <div>
          <p className="mb-3 text-2xl font-bold text-grayscale9">From.</p>
          <InputField name={'from'} />
        </div>
        <div className="flex  mobile:w-[320px] ">
          <input type="hidden" name={'profile'} value={selectedProfile} />
          <div>
            <p className="mb-3 text-2xl font-bold text-grayscale9 whitespace-nowrap">
              프로필 이미지
            </p>
            <img
              src={selectedProfile}
              className="w-20 h-20 rounded-full"
              alt=""
            />
          </div>
          <div className="pt-[50px] mobile:pt-10">
            <p className="whitespace-nowrap">프로필 이미지를 선택해주세요!</p>
            <div className="flex mobile:flex-wrap">
              {PROFILE_IMGS.map((item) => (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="px-1 bg-white rounded-full cursor-pointer mobile:w-9 mobile:h-9 w-14 h-14"
                  onClick={() => handleProfileClick(item.src)}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="mb-3 text-2xl font-bold text-grayscale9">
            상대와의 관계
          </p>
          <Dropdown
            name={'relationship'}
            onChange={(value) => handleBtnChange('relationship', value)}
            value={selectRelationship}
            data={mockData.relationship}
          />
        </div>
        <div className="">
          <p className="mb-3 text-2xl font-bold text-grayscale9">
            내용을 입력해 주세요
          </p>
          <TextEditor name={'content'} />
        </div>
        <div>
          <p className="text-2xl font-bold text-grayscale9">폰트 선택</p>
          <Dropdown
            name={'font'}
            onChange={(value) => handleBtnChange('font', value)}
            value={selectFont}
            data={mockData.font}
          />
        </div>
        <ButtonBase>생성하기</ButtonBase>
      </form>
    </>
  );
}

export default Message;
