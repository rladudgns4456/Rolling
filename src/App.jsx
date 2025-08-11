import './App.css';

import Card from './components/Card';

function App() {
  return (
    <div className="cardList flex gap-[10px]">
      <Card bgColor="bg-purple1" color="purple" name="Sowon" />
      <Card bgColor="bg-beige2" color="beige" />
      <Card bgColor="bg-blue2" color="blue" />
      <Card bgColor="bg-green1" color="green" />
    </div>
  );
}

export default App;
