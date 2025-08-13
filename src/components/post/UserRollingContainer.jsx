import UserProfile from '../common/UserProfile';
import CardCreateAt from './CardCreateAt';
import items from '../../mock.json';

const userObject = items.find((obj) => obj.id === 2); // 목록에서 클릭했을때 내려주는 Prop 대용

//개인롤링페이지 컨테이너
function UserRollingContainer({ userCardId = userObject.recentMessages }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-7">
      <CardCreate />
      {userCardId.map((item) => {
        return (
          <article
            key={item.id}
            className="flex flex-col px-6 pb-6 bg-white rounded-2xl shadow-lg min-h-[230px] sm:min-h-[284px] xl:min-h-[280px]"
          >
            <RollingCard item={item} />
          </article>
        );
      })}
    </div>
  );
}

//카드 만들기 버튼
function CardCreate() {
  return (
    <div className="flex justify-center items-center bg-white rounded-2xl shadow-lg min-h-[230px] sm:min-h-[284px] xl:min-h-[280px]">
      {/*영훈님 컴포넌트로 버튼 교체할 자리 */}
      <Button />
    </div>
  );
}

// 카드
function RollingCard({ item }) {
  return (
    <>
      <CardHeader
        userName={item.sender}
        relationship={item.relationship}
        proFile={item.profileImageURL}
      />
      <CardBodyView content={item.content} />
      <CardCreateAt createDate={item.createdAt} />
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
          {/*재영님 컴포넌트로 배지 교체할 자리*/}
          <Badge relationship={relationship} />
        </div>
      </div>
      {/*영훈님 컴포넌트로 버튼 교체할 자리 */}
      <Button />
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

//-- 컴포넌트 교체시 삭제할 부분
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
      <div className={`px-2 w-fit text-[14px] ${bgColor} ${textColor}`}>
        {relationship}
      </div>
    </>
  );
}

//식제버튼
function Button() {
  return (
    <>
      <button className="w-10 h-10 border rounded-md border-grayscale3">
        버튼
      </button>
    </>
  );
}
//-- 컴포넌트 교체시 삭제할 부분

export default UserRollingContainer;
