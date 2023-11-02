import { useState } from 'react';
import './App.css';

function App() {
  let [value, setvalue] = useState("")

  const display = (num) => {
    setvalue(value += num)
  }
  const clearInput = () => {
    setvalue("")
  }
  const Calculate = () => {
    try {
      const result = parseInt(value)
      setvalue(eval(result))
    } catch (error) {
      console.log(error);
      setvalue("SYNTAX ERROR!")
    }
  }

  const removeLast = () => {
    if (value) {
      setvalue(value.slice(0, -1))
    }
    // setvalue(value.slice(0,-1))
  }
  return (
    <>
      <div className='maindiv d-flex justify-content-center align-items-center'>
        <div id='calculator' className='shadow'>
          <div><input placeholder='0' value={value} id='inputbox' type="text" readOnly /></div>
          <div className='firstrow'>
            <div onClick={() => clearInput()} className='clear  border'>c</div>
            <div onClick={() => removeLast()} className='backButton border'><i className="fa-solid fa-delete-left" style={{ color: 'black' }}></i></div>
            <div onClick={() => display("%")} className='modulus border'>%</div>
            <div onClick={() => display("+")} className='plus border'><i className="fa-solid fa-plus" style={{ color: 'black' }}></i></div>
          </div>

          <div className='firstrow'>
            <div onClick={() => display("7")} className='buttons border'>7</div>
            <div onClick={() => display("8")} className='buttons border'>8</div>
            <div onClick={() => display("9")} className='buttons border'>9</div>
            <div onClick={() => display("-")} className='minus border'><i className="fa-solid fa-minus" style={{ color: 'black' }}></i></div>
          </div>

          <div className='firstrow'>
            <div onClick={() => display("4")} className='buttons border'>4</div>
            <div onClick={() => display("5")} className='buttons border'>5</div>
            <div onClick={() => display("6")} className='buttons border'>6</div>
            <div onClick={() => display("*")} className='multiply border'><i className="fa-solid fa-xmark" style={{ color: 'black' }}></i></div>
          </div>

          <div className='firstrow'>
            <div onClick={() => display("1")} className='buttons border'>1</div>
            <div onClick={() => display("2")} className='buttons border'>2</div>
            <div onClick={() => display("3")} className='buttons border'>3</div>
            <div onClick={() => display("/")} className='division border'>/</div>
          </div>

          <div className='lastrow'>
            <div onClick={() => display("0")} className='buttons1 border'>0</div>
            <div onClick={() => display(".")} className='buttons1 border'>.</div>
            <div onClick={() => Calculate()} className='equalto border'>=</div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
