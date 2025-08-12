import { Children, useState } from 'react';
import items from '../mock.json';

const userObject = items.find((obj) => obj.id === 2);
function CardContainer({ userCardId = userObject.recentMessages }) {
  const [userData, setUserData] = useState(userCardId);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-7">
        <CardCreate />
        {userData.map((item) => {
          return (
            <article
              key={item.id}
              className="flex flex-col px-6 pb-6 bg-white rounded-2xl drop-shadow-md min-h-[14.375rem] sm:min-h-[17.75rem] xl:min-h-[17.5rem]"
            >
              <Card item={item} />
            </article>
          );
        })}
      </div>
    </>
  );
}

//카드 만들기 버튼
function CardCreate() {
  return (
    <>
      <article className="flex justify-center items-center bg-white rounded-2xl drop-shadow-md min-h-[14.375rem] sm:min-h-[17.75rem] xl:min-h-[17.5rem]">
        <button>버튼</button>
      </article>
    </>
  );
}

// 카드
function Card({ item }) {
  return (
    <>
      <CardHeader
        userName={item.sender}
        relationship={item.relationship}
        proFile={item.profileImageURL}
      />
      <CardBodyView content={item.content} />
      <CardCreateAt date={item.createdAt} />
    </>
  );
}

//카드 헤더
function CardHeader({ userName, relationship, proFile }) {
  return (
    <div className="flex pb-4 gap-x-3.5 pt-7 border-b border-grayscale2">
      <UserProfile proFile={proFile} />
      <div className="flex flex-col gap-y-1.5">
        <div className="flex gap-x-1.5 text-base sm:text-xl">
          From.
          <h3 className="font-bold">{userName}</h3>
        </div>
        <Badge relationship={relationship} />
      </div>
      <Button />
    </div>
  );
}

//프로필 이미지
function UserProfile({ proFile }) {
  return (
    <div className="overflow-hidden rounded-full h-14 w-14">
      <img className="w-full h-full" src={proFile} alt="" />
    </div>
  );
}

//배지
function Badge({ relationship }) {
  let bgColor;
  let textColor;
  switch (relationship) {
    case '지인':
      bgColor = 'bg-beige1';
      textColor = 'text-beige5';
      break;
    case '동료':
      bgColor = 'bg-purple1';
      textColor = 'text-purple5';
      break;
    case '가족':
      bgColor = 'bg-green1';
      textColor = 'text-green5';
      break;
    case '친구':
      bgColor = 'bg-blue1';
      textColor = 'text-blue5';
      break;
  }
  return (
    <>
      <div className={`px-2 w-fit ${bgColor} ${textColor}`}>{relationship}</div>
    </>
  );
}

//콘텐츠
function CardBodyView({ content }) {
  return (
    <>
      <div className="my-4 text-[.9375rem] sm:text-lg text-grayscale6 line-clamp-3">
        {content}
      </div>
    </>
  );
}

//식제버튼
function Button() {
  return (
    <>
      <button className="w-10 h-10 ml-auto border rounded-md border-grayscale3">
        버튼
      </button>
    </>
  );
}

//생성 날짜
function CardCreateAt({ date }) {
  return (
    <>
      <div className="mt-auto text-xs text-grayscale4">
        <span>{date}</span>
      </div>
    </>
  );
}

export default CardContainer;
