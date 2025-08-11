import { useState } from 'react';
import './App.css';

import CardList from './components/CardList';

function App() {
  const [color, setColor] = useState('bg-purple-200');
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <CardList color={color} />
      <select onChange={handleColor}>
        <option value="">색상 선택</option>
        <option value="bg-purple-200">보라색</option>
        <option value="bg-yellow-100">베이지</option>
        <option value="bg-blue-200">파란색</option>
        <option value="bg-green-200">초록색</option>
      </select>
    </>
  );
}

export default App;
