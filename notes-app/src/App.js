import './style/style.scss';
import Wrapper from './components/Wrapper';
import Loader from './components/Loader';
import Info from './components/Info';
import {FaInfoCircle} from 'react-icons/fa';
import { useState } from 'react';

function App() {
  const [infoDisplay, setInfoDisplay] = useState('none');
  const [infoOpacity, setInfoOpacity] = useState(0);

  const displayInfo = () => {
    setInfoDisplay('flex');
    setTimeout(() => setInfoOpacity(1), 10);
  }

  return (
    <div className="App">
      <Loader />
      <Info infoDisplay={infoDisplay} infoOpacity={infoOpacity} setInfoDisplay={setInfoDisplay} setInfoOpacity={setInfoOpacity} />
      <Wrapper />
      <FaInfoCircle id='info-btn' onClick={() => displayInfo()} />
    </div>
  );
}

export default App;
