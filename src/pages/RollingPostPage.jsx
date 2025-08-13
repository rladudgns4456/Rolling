import Header from '../components/common/Header';
import RecipientInfo from '../components/post/RecipientInfo';
import UserRollingContainer from '../components/post/UserRollingContainer';

export default function RollingPostPage() {
  return (
    <>
      <Header showButton={false} />
      <div className="w-[1200px] mx-auto">
        <RecipientInfo />
      </div>
      <UserRollingContainer />
    </>
  );
}
