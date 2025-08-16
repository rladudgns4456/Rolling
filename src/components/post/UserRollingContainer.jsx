import UserProfile from '../common/UserProfile';
import CardCreateAt from './CardCreateAt';
import CircleIconButton from '../common/CircleIconButton';
import Plus from '../../assets/icon/ic_plus.svg';
import Badge from './Badge';
import Modal from './Modal';
import { useState } from 'react';

//개인롤링페이지 컨테이너
function UserRollingContainer({ recipientsInfo, messageInfo }) {
  const [isOpenModal, setIsOpenModal] = useState(null);
  const bgMap = {
    beige: 'bg-beige2',
    green: 'bg-green2',
    blue: 'bg-blue2',
    purple: 'bg-purple2',
  };

  const handleCardClick = (message) => {
    setIsOpenModal(message);
  };

  const closeModal = () => {
    setIsOpenModal(null);
  };

  if (!Array.isArray(messageInfo) || messageInfo.length === 0) {
    return (
      <div
        className={`min-h-dvh ${bgMap[recipientsInfo.backgroundColor]} bg-cover bg-center`}
        style={{ backgroundImage: `url(${recipientsInfo.backgroundImageURL})` }}
      >
        <div className="grid grid-cols-1 py-28 max-w-[1200px] mx-auto">
          <CardCreate />
        </div>
      </div>
    );
  }

  // 메시지 데이터 있을 때 아래 렌더링
  return (
    <div
      className={`min-h-dvh ${bgMap[recipientsInfo.backgroundColor]} bg-cover bg-center`}
      style={{ backgroundImage: `url(${recipientsInfo.backgroundImageURL})` }}
    >
      <div className="grid grid-cols-1 py-28 max-w-[1200px] mx-auto sm:grid-cols-2 xl:grid-cols-3 gap-y-5">
        <CardCreate />
        {messageInfo.map((message) => (
          <article
            key={message.id}
            className="flex flex-col px-6 pb-6 w-96 bg-white rounded-2xl shadow-lg min-h-[230px] sm:min-h-[284px] xl:min-h-[280px] cursor-pointer"
            onClick={() => handleCardClick(message)}
          >
            <RollingCard message={message} />
          </article>
        ))}
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
function CardCreate() {
  return (
    <div className="flex justify-center items-center w-96 bg-white rounded-2xl shadow-lg min-h-[230px] sm:min-h-[284px] xl:min-h-[280px]">
      <CircleIconButton size={56} variant="dark" iconSrc={Plus} demo="hover" />
    </div>
  );
}

// 카드
function RollingCard({ message }) {
  return (
    <>
      <CardHeader
        userName={message.sender}
        relationship={message.relationship}
        proFile={message.profileImageURL}
      />
      <CardBodyView content={message.content} />
      <CardCreateAt createDate={message.createdAt} />
    </>
  );
}

//카드 헤더
function CardHeader({ userName, relationship, proFile }) {
  return (
    <div className="flex justify-between pb-4 border-b pt-7 border-grayscale2">
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
