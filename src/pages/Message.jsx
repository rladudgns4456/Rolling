import InputField from './../components/common/InputField';
import Dropdown from './../components/message/Dropdown';
import TextEditor from '../components/message/TextEditor';
import ButtonBase from '../components/common/ButtonBase';
import { useMessageForm } from '../hooks/useMessageForm'; // Custom Hook 가져오기
import ProfileImageSkeleton from '../components/message/ProfileImageSkeleton';
import ProfileImages from '../components/message/ProfileImages';
import { FONT_CLASSES } from '../constants/FONT_CLASSES';
import { DROPDOWN_MENUS } from '../constants/DROPDOWN_MENUS';
import useWindowReSize from '../hooks/useWindowResize';

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
  const windowWidth = useWindowReSize(); //브라우저 크기 변화 감지

  return (
    <div
      className="
    mx-auto w-full max-w-[1248px]    
        px-5 md:px-6 py-12"
    >
    <form
      onSubmit={handleSubmit}
      className="max-w-[720px] flex flex-col gap-12 mx-auto"
    >
      <fieldset>
        <legend className="mb-3 text-2xl font-bold leading-10 text-grayscale9">
          From.
        </legend>
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
      </fieldset>
      <fieldset>
        <legend className="mb-3 text-2xl font-bold text-grayscale9 whitespace-nowrap ">
          프로필 이미지
        </legend>
        {isLoading ? (
          <ProfileImageSkeleton />
        ) : (
          <ProfileImages
            profileImages={profileImages}
            profileImageURL={profileImageURL}
            setProfileImageURL={setProfileImageURL}
          />
        )}
      </fieldset>
      <fieldset>
        <legend className="mb-3 text-2xl font-bold text-grayscale9">
          상대와의 관계
        </legend>
        <Dropdown
          value={relationship}
          onChange={setRelationship}
          dropdownMenus={DROPDOWN_MENUS.relationship}
          isError={isDropdownError}
          isDisabled={isSubmitting}
          ariaLabel={'관계 선택'}
        />
      </fieldset>
      <fieldset className="">
        <legend className="mb-3 text-2xl font-bold text-grayscale9 ">
          내용을 입력해 주세요
        </legend>
        <TextEditor
          value={content}
          className={`text-[100px] ${FONT_CLASSES[font]}`}
          onChange={setContent}
        />
      </fieldset>
      <fieldset>
        <legend className="mb-3 text-2xl font-bold text-grayscale9">
          폰트 선택
        </legend>
        <Dropdown
          name="font"
          value={font}
          onChange={setFont}
          dropdownMenus={DROPDOWN_MENUS.font}
          isError={isDropdownError}
          isDisabled={isSubmitting}
          ariaLabel={'폰트 선택'}
        />
      </fieldset>
      <ButtonBase disabled={isButtonDisabled || isSubmitting}>
        생성하기
      </ButtonBase>
    </form>
    </div>
  );
}

export default Message;
