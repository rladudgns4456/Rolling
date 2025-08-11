import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Toast from './components/Toast';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toast />
      <div></div>
      <Modal />
    </>
  );
}

export default App;
