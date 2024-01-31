import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const Clear = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="input">
          <input onChange={handleClick} value={result} />
        </div>
        <div className="buttons">
          <button className="span-two" onClick={Clear}>
            AC
          </button>
          <button onClick={handleClick} value="/">
            ÷
          </button>
          <button onClick={handleClick} value="+">
            +
          </button>
          <button onClick={handleClick} value="9">
            9
          </button>
          <button onClick={handleClick} value="8">
            8
          </button>
          <button onClick={handleClick} value="7">
            7
          </button>
          <button onClick={handleClick} value="6">
            6
          </button>
          <button onClick={handleClick} value="5">
            5
          </button>
          <button onClick={handleClick} value="4">
            4
          </button>
          <button onClick={handleClick} value="3">
            3
          </button>
          <button onClick={handleClick} value="2">
            2
          </button>
          <button onClick={handleClick} value="1">
            1
          </button>
          <button onClick={handleClick} value="0">
            0
          </button>
          <button onClick={handleClick} value=".">
            .
          </button>
          <button onClick={calculate} value="=">
            =
          </button>
          <button onClick={handleClick} value="+">
            +
          </button>
          <button onClick={handleClick} value="-">
            -
          </button>
          <button onClick={handleClick} value="%">
            %
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
