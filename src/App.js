import { useState } from "react";
import "./styles.css";

export default function App() {
  var [inputOne, setInputOne] = useState("");
  var [inputTwo, setInputTwo] = useState("");
  var [addTheme, setAddTheme] = useState("light");
  var [subTheme, setSubTheme] = useState("light");
  var [divTheme, setDivTheme] = useState("light");
  var [mulTheme, setMulTheme] = useState("light");
  var [output, setOutput] = useState("");

  function firstInputEventHandler(event) {
    var firstInput = event.target.value;
    setInputOne(firstInput);
  }
  function secondInputEventHandler(event) {
    var secondInput = event.target.value;
    setInputTwo(secondInput);
  }

  function addEventHandler(event) {
    if (addTheme === "light") {
      setAddTheme("blue");
    }
    if (subTheme === "blue") {
      setSubTheme("light");
    }
    if (divTheme === "blue") {
      setDivTheme("light");
    }
    if (mulTheme === "blue") {
      setMulTheme("light");
    }
    if (inputOne && inputTwo) {
      if (isNaN(inputOne) === false && isNaN(inputTwo) === false) {
        var addition = Number(inputOne) + Number(inputTwo);
        setOutput(`Addition Output: ${inputOne} + ${inputTwo} = ${addition}`);
      } else {
        setOutput("Input only numerical values");
      }
    } else {
      setOutput("Provide both the input values.");
    }
  }
  function subEventHandler(event) {
    if (subTheme === "light") {
      setSubTheme("blue");
    }
    if (addTheme === "blue") {
      setAddTheme("light");
    }
    if (divTheme === "blue") {
      setDivTheme("light");
    }
    if (mulTheme === "blue") {
      setMulTheme("light");
    }
    if (inputOne && inputTwo) {
      if (isNaN(inputOne) === false && isNaN(inputTwo) === false) {
        var subtract = Number(inputOne) - Number(inputTwo);
        setOutput(
          `Subtraction Output: ${inputOne} - ${inputTwo} = ${subtract}`
        );
      } else {
        setOutput("Input only numerical values");
      }
    } else {
      setOutput("Provide both the input values.");
    }
  }
  function divEventHandler(event) {
    if (divTheme === "light") {
      setDivTheme("blue");
    }
    if (subTheme === "blue") {
      setSubTheme("light");
    }
    if (addTheme === "blue") {
      setAddTheme("light");
    }
    if (mulTheme === "blue") {
      setMulTheme("light");
    }
    if (inputOne && inputTwo) {
      if (isNaN(inputOne) === false && isNaN(inputTwo) === false) {
        var divide = Number(inputOne) / Number(inputTwo);
        setOutput(`Division Output: ${inputOne} / ${inputTwo} = ${divide}`);
      } else {
        setOutput("Input only numerical values");
      }
    } else {
      setOutput("Provide both the input values.");
    }
  }
  function mulEventHandler(event) {
    if (mulTheme === "light") {
      setMulTheme("blue");
    }
    if (subTheme === "blue") {
      setSubTheme("light");
    }
    if (divTheme === "blue") {
      setDivTheme("light");
    }
    if (addTheme === "blue") {
      setAddTheme("light");
    }
    if (inputOne && inputTwo) {
      if (isNaN(inputOne) === false && isNaN(inputTwo) === false) {
        var multiply = Number(inputOne) * Number(inputTwo);
        setOutput(
          `Multiplication Output: ${inputOne} x ${inputTwo} = ${multiply}`
        );
      } else {
        setOutput("Input only numerical values");
      }
    } else {
      setOutput("Provide both the input values.");
    }
  }

  return (
    <div className="App">
      <label className="input-name">First Input</label>
      <input onChange={firstInputEventHandler} />
      <label className="input-name">Second Input</label>
      <input onChange={secondInputEventHandler} />
      <div className="button">
        <button className={addTheme} onClick={addEventHandler}>
          +
        </button>
        <button className={subTheme} onClick={subEventHandler}>
          -
        </button>
        <button className={divTheme} onClick={divEventHandler}>
          /
        </button>
        <button className={mulTheme} onClick={mulEventHandler}>
          x
        </button>
      </div>
      <div id="output">{output}</div>
    </div>
  );
}
