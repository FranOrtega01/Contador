import './App.scss';
import React, {useState} from 'react';
import {Boton} from './Components/Boton/Boton';
import {Contador} from './Components/Contador/Contador';


function App() {

const [count, setCount] = useState(0)

const handleClick = () => {
    setCount(count + 1)
}
const handleReset = () => {
  setCount(0)
}

  return (
    <div className="App">
      <Contador num={count} />
      <div className="mainCont">
        <Boton btnText={'Aumentar'} handleClick={handleClick} />
        <Boton btnText={'Reiniciar'} handleClick={handleReset} />
      </div>
    </div>
  );
}

export default App;
