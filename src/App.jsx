import { useState } from 'react';
import CardContainer from './components/CardContainer';
import BackgroundSelect from './components/BackgroundSelect';
import UserProfileInput from './components/UserProfileInput';

function App() {
  return (
    <>
      <div className="px-5 sm:px-6 xl:px-10 w-max-[1280px]">
        <CardContainer />
        <BackgroundSelect />
        <UserProfileInput />
      </div>
    </>
  );
}

export default App;
