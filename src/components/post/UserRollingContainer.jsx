import UserProfile from '../common/UserProfile';
import CardCreateAt from './CardCreateAt';
import CircleIconButton from '../common/CircleIconButton';
import Plus from '../../assets/icon/ic_plus.svg';
import Badge from './Badge';
import Modal from './Modal';
import { useState } from 'react';
import deleteIcon from '../../assets/icon/deleted.svg';
import { useNavigate } from 'react-router-dom';
import useWindowReSize from '../../hooks/useWindowResize';
import { deleteRecipients } from '../../api/api';
const bgMap = {
  beige: 'bg-beige2',
  green: 'bg-green2',
  blue: 'bg-blue2',
  purple: 'bg-purple2',
};

//개인롤링페이지 컨테이너
function UserRollingContainer({
  recipientsInfo,
  messageInfo,
  onDeleteMessage,
  recipientId,
}) {
  const [isOpenModal, setIsOpenModal] = useState(null);
  const navigate = useNavigate();
  const handleDeleteRecipientsClick = async () => {
    navigate(`/list`);
    await deleteRecipients(recipientId);
  };

  const bgMap = {
    beige: 'bg-beige2',
    green: 'bg-green2',
    blue: 'bg-blue2',
    purple: 'bg-purple2',
  };
  const windowWidth = useWindowReSize(); //브라우저 크기 변화 감지

  const handleCardClick = (message) => {
    setIsOpenModal(message);
  };

  const closeModal = () => {
    setIsOpenModal(null);
  };

  // 메시지 데이터 있을 때 아래 렌더링
  return (
    <div
      className={`${bgMap[recipientsInfo.backgroundColor]} bg-cover bg-center`}
      style={{
        backgroundImage: `url(${recipientsInfo.backgroundImageURL})`,
        minHeight:
          windowWidth >= 768 ? 'calc(100vh - 129px)' : 'calc(100vh - 108px)',
      }}
    >
      <div
        className="   
        relative    
        mx-auto w-full max-w-[1248px]    
        px-5 md:px-6"
      >
        <button
          onClick={handleDeleteRecipientsClick}
          className="z-10 cursor-pointer w-[calc(100%-40px)] md:w-[calc(100%-48px)] xl:w-[92px] h-10 rounded-md text-base text-white bg-purple6 xl:absolute xl:top-[63px] xl:right-[24px] fixed bottom-6"
        >
          삭제하기
        </button>
        <div className="relative grid grid-cols-1 py-28 max-w-[1200px] mx-auto sm:grid-cols-2 xl:grid-cols-3 xl:gap-y-7 xl:gap-x-6 gap-4">
          <CardCreate recipientId={recipientId} />
          {messageInfo.map((message) => (
            <article
              key={message.id}
              tabIndex={'0'}
              role="button"
              aria-label="클릭하여 모달 열기"
              className="flex flex-col px-6 pb-6 bg-white rounded-2xl shadow-lg min-h-[230px] sm:min-h-[284px] xl:min-h-[280px] cursor-pointer"
              onClick={() => handleCardClick(message)}
            >
              <RollingCard
                message={message}
                onDeleteMessage={onDeleteMessage}
              />
            </article>
          ))}
        </div>
      </div>
      {isOpenModal && (
        <Modal
          proFile={isOpenModal.profileImageURL}
          userName={isOpenModal.sender}
          relationship={isOpenModal.relationship}
          createDate={isOpenModal.createdAt}
          content={isOpenModal.content}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

//카드 만들기 버튼
function CardCreate({ recipientId }) {
  const navigate = useNavigate();
  const handleCardCreateClick = () => {
    navigate(`/post/${recipientId}/message`);
  };
  return (
    <div
      onClick={handleCardCreateClick}
      className="flex justify-center items-center bg-white rounded-2xl shadow-lg min-h-[230px] sm:min-h-[284px] xl:min-h-[280px]"
    >
      <CircleIconButton size={56} variant="dark" iconSrc={Plus} demo="hover" />
    </div>
  );
}

// 카드
function RollingCard({ message, onDeleteMessage }) {
  return (
    <>
      <CardHeader
        userName={message.sender}
        relationship={message.relationship}
        proFile={message.profileImageURL}
        messageId={message.id}
        onDeleteMessage={onDeleteMessage}
      />
      <CardBodyView content={message.content} />
      <CardCreateAt createDate={message.createdAt} />
    </>
  );
}

//카드 헤더
function CardHeader({
  userName,
  relationship,
  proFile,
  messageId,
  onDeleteMessage,
}) {
  const handleDeleteClick = async (event) => {
    event.stopPropagation();
    await onDeleteMessage(messageId);
  };

  return (
    <div className="flex items-center justify-between w-full pb-4 border-b pt-7 border-grayscale2">
      <div className="flex gap-x-3.5">
        <UserProfile proFile={proFile} />
        <div className="flex flex-col gap-y-[3px]">
          <div className="flex gap-x-1.5 text-base sm:text-xl">
            From.
            <h3 className="font-bold">{userName}</h3>
          </div>
          <Badge relationship={relationship} />
        </div>
      </div>
      <button
        onClick={handleDeleteClick}
        className="flex items-center justify-center w-10 h-10 border rounded-md"
      >
        <img className="w-6 h-6 " src={deleteIcon} alt="지우기 아이콘" />
      </button>
    </div>
  );
}

//콘텐츠
function CardBodyView({ content }) {
  return (
    <div className="my-4 text-[15px] sm:text-lg text-grayscale6 line-clamp-3">
      {content}
    </div>
  );
}

export default UserRollingContainer;
