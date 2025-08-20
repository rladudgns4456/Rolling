import InputField from './../components/common/InputField';
import Dropdown from './../components/message/Dropdown';
import TextEditor from '../components/message/TextEditor';
import ButtonBase from '../components/common/ButtonBase';
import { useMessageForm } from '../hooks/useMessageForm'; // Custom Hook 가져오기
import ProfileImageSkeleton from '../components/message/ProfileImageSkeleton';
import ProfileImages from '../components/message/ProfileImages';
import { FONT_CLASSES } from '../constants/FONT_CLASSES';
import { DROPDOWN_MENUS } from '../constants/DROPDOWN_MENUS';

function Message() {
  const { values, setters, ui, handleSubmit } = useMessageForm();
  const { sender, content, relationship, font, profileImageURL } = values;
  const {
    setSender,
    setContent,
    setRelationship,
    setFont,
    setProfileImageURL,
  } = setters;
  const {
    profileImages,
    isLoading,
    isSenderError,
    setIsSenderError,
    isDropdownError,
    setIsDropDownError,
    isSubmitting,
    isButtonDisabled,
  } = ui;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mobile:w-[360px] w-[720px] flex flex-col gap-12 px-5 mx-auto tablet:max-w-7xl pc:max-w-screen-xl"
      >
        <div>
          <p className="mb-3 text-2xl font-bold text-grayscale9">From.</p>
          <InputField
            value={sender}
            placeholder="이름을 입력해 주세요."
            isDisabled={isSubmitting}
            isError={isSenderError}
            onChange={(e) => {
              setSender(e.target.value);
              setIsSenderError(false);
            }}
            onBlur={() => !sender && setIsSenderError(true)}
          />
        </div>
        <div className="flex  mobile:w-[320px] ">
          {isLoading ? (
            <ProfileImageSkeleton />
          ) : (
            <ProfileImages
              profileImages={profileImages}
              profileImageURL={profileImageURL}
              setProfileImageURL={setProfileImageURL}
            />
          )}
        </div>
        <div>
          <p className="mb-3 text-2xl font-bold text-grayscale9">
            상대와의 관계
          </p>
          <Dropdown
            value={relationship}
            onChange={setRelationship}
            data={DROPDOWN_MENUS.relationship}
            isError={isDropdownError}
            isDisabled={isSubmitting}
          />
        </div>
        <div className="">
          <p className="mb-3 text-2xl font-bold text-grayscale9 ">
            내용을 입력해 주세요
          </p>
          <TextEditor
            value={content}
            className={`text-[100px] ${FONT_CLASSES[font]}`}
            onChange={setContent}
          />
        </div>
        <div>
          <p className="text-2xl font-bold text-grayscale9">폰트 선택</p>
          <Dropdown
            value={font}
            onChange={setFont}
            data={DROPDOWN_MENUS.font}
            isError={isDropdownError}
            isDisabled={isSubmitting}
          />
        </div>
        <ButtonBase disabled={isButtonDisabled || isSubmitting}>
          생성하기
        </ButtonBase>
      </form>
    </>
  );
}

export default Message;
