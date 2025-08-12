import UserRollingContainer from './components/UserRollingContainer';
import BackgroundSelect from './components/BackgroundSelect';
import UserProfilePreview from './components/UserProfilePreview';

function App() {
  return (
    <>
      <div className="px-5 sm:px-6 xl:px-10 w-max-[1280px]">
        <UserRollingContainer />
        <BackgroundSelect />
        <UserProfilePreview />
      </div>
    </>
  );
}

export default App;
