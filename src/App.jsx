import { useState } from 'react';
import './App.css';

import CardList from './components/CardList';

function App() {
  const [color, setColor] = useState('purple');
  const [bgColor, setBgColor] = useState('bg-purple-200');
  const handleColor = (e) => {
    const selectedOption = e.target.selectedOptions[0];
    const bg = selectedOption.dataset.bg;
    const colorKey = selectedOption.value;
    setColor(colorKey);
    setBgColor(bg);
  };
  return (
    <>
      <CardList bgColor={bgColor} color={color} />
      <select onChange={handleColor}>
        <option value="" disabled>
          색상 선택
        </option>
        <option value="purple" data-bg="bg-purple1">
          보라색
        </option>
        <option value="beige" data-bg="bg-beige2">
          베이지
        </option>
        <option value="blue" data-bg="bg-blue2">
          파란색
        </option>
        <option value="green" data-bg="bg-green1">
          초록색
        </option>
      </select>
      <CardList bgColor={bgColor} color={color} />
      {/* <BackgroundImage /> */}
    </>
  );
}

export default App;
