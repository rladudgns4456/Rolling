import UserProfile from '../common/UserProfile';
import CardCreateAt from './CardCreateAt';
import items from '../../mock.json';
import CircleIconButton from '../common/CircleIconButton';
import Plus from '../../assets/icon/ic_plus.svg';
import Badge from './Badge';

const userObject = items.find((obj) => obj.id === 2); // 목록에서 클릭했을때 내려주는 Prop 대용

//개인롤링페이지 컨테이너
function UserRollingContainer({ userCardId = userObject.recentMessages }) {
  return (
    <>
      <div className="h-screen bg-beige2">
        <div className="grid grid-cols-1 py-20 max-w-[1200px] mx-auto sm:grid-cols-2 xl:grid-cols-3 gap-y-5">
          <CardCreate />
          {userCardId.map((item) => {
            return (
              <article
                key={item.id}
                className="flex flex-col px-6 pb-6 w-96 bg-white rounded-2xl shadow-lg min-h-[230px] sm:min-h-[284px] xl:min-h-[280px]"
              >
                <RollingCard item={item} />
              </article>
            );
          })}
        </div>
      </div>
    </>
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
          <Badge relationship="친구" />
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

export default UserRollingContainer;
