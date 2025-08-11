import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Modal from './components/Modal';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Modal />
    </>
  );
}

export default App;
