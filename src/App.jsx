import './App.css';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import InputField from './components/InputField';
import RecipientInfo from './components/RecipientInfo';

function App() {
  return (
    <>
      <Header />
      <RecipientInfo />
      <Dropdown />
      <InputField />
    </>
  );
}

export default App;
