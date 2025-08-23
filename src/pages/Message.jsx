import InputField from './../components/common/InputField';
import Dropdown from './../components/message/Dropdown';
import TextEditor from '../components/message/TextEditor';
import ButtonBase from '../components/common/ButtonBase';
import ProfileImageSkeleton from '../components/message/ProfileImageSkeleton';
import ProfileImages from '../components/message/ProfileImages';
import { FONT_CLASSES } from '../constants/FONT_CLASSES';
import { DROPDOWN_MENUS } from '../constants/DROPDOWN_MENUS';

import { useMessageValues } from '../hooks/useMessageValues';
import { useMessageUI } from '../hooks/useMessageUI';
import { useMessageActions } from '../hooks/useMessageActions';

function Message() {
  const values = useMessageValues();
  const ui = useMessageUI(values);
  const { handleSubmit } = useMessageActions(values, ui);

  return (
    <form
      onSubmit={handleSubmit}
      className="mobile:w-[360px] w-[720px] flex flex-col gap-12 px-5 mx-auto tablet:max-w-7xl pc:max-w-screen-xl"
    >
      <fieldset>
        <legend className="mb-3 text-2xl font-bold text-grayscale9">
          From.
        </legend>
        <InputField
          value={values.sender}
          placeholder="이름을 입력해 주세요."
          isDisabled={ui.isSubmitting}
          isError={ui.isSenderError}
          onChange={(e) => {
            values.setSender(e.target.value);
            ui.setIsSenderError(false);
          }}
          onBlur={() => !values.sender && ui.setIsSenderError(true)}
        />
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-2xl font-bold text-grayscale9 whitespace-nowrap ">
          프로필 이미지
        </legend>
        {ui.isLoading ? (
          <ProfileImageSkeleton />
        ) : (
          <ProfileImages
            profileImages={ui.profileImages}
            profileImageURL={values.profileImageURL}
            setProfileImageURL={values.setProfileImageURL}
          />
        )}
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-2xl font-bold text-grayscale9">
          상대와의 관계
        </legend>
        <Dropdown
          value={values.relationship}
          onChange={values.setRelationship}
          dropdownMenus={DROPDOWN_MENUS.relationship}
          isError={ui.isDropdownError}
          isDisabled={ui.isSubmitting}
          ariaLabel={'관계 선택'}
        />
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-2xl font-bold text-grayscale9 ">
          내용을 입력해 주세요
        </legend>
        <TextEditor
          value={values.content}
          className={`text-[100px] ${FONT_CLASSES[values.font]}`}
          onChange={values.setContent}
        />
      </fieldset>

      <fieldset>
        <legend className="text-2xl font-bold text-grayscale9">
          폰트 선택
        </legend>
        <Dropdown
          value={values.font}
          onChange={values.setFont}
          dropdownMenus={DROPDOWN_MENUS.font}
          isError={ui.isDropdownError}
          isDisabled={ui.isSubmitting}
          ariaLabel={'폰트 선택'}
        />
      </fieldset>

      <ButtonBase
        disabled={
          ui.isButtonDisabled(values.sender, values.content) || ui.isSubmitting
        }
      >
        생성하기
      </ButtonBase>
    </form>
  );
}

export default Message;
