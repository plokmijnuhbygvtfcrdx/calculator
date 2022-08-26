import React from 'react';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);
  const [negative, setNegative] = useState(false);

  const num = (a) => {
    if (curState.length >= 12) return;
    setCurState(curState + a.target.innerText);
  };
  const operatorType = (a) => {
    setOperator(a.target.innerText);
    setPreState(curState);
    setCurState('');
  };
  const apply = (a, b, o) => {
    switch (o) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
    }
  }
  const equals = () => {
    let a = Number(preState);
    let b = Number(curState);
    setCurState(apply(a, b, operator));
  };
  const reset = (a) => {
    setCurState('');
  };

  const positiveNegative = (a) => {
    if (negative) {
      setCurState(curState.substring(1));
      setNegative(false);
    } else {
      setCurState('-' + curState);
      setNegative(true);
    }
  };

  return(
    <div className = "App">
      <p className ="display">{curState}</p>
      <div className ="container">
        <button onClick = {num} className = "button">7</button>
        <button onClick = {num} className = "button">8</button>
        <button onClick = {num} className = "button">9</button>
        <button onClick = {operatorType} className = "button operator">+</button>
        <button onClick = {num} className = "button">4</button>
        <button onClick = {num} className = "button">5</button>
        <button onClick = {num} className = "button">6</button>
        <button onClick = {operatorType} className = "button operator">-</button>
        <button onClick = {num} className = "button">1</button>
        <button onClick = {num} className = "button">2</button>
        <button onClick = {num} className = "button">3</button>
        <button onClick = {operatorType} className = "button operator">*</button>
        <button onClick = {num} className = "button">0</button>
        <button onClick = {num} className = "button">.</button>
        <button onClick = {positiveNegative} className = "button">+/-</button>
        <button onClick = {operatorType} className = "button operator">/</button>
        <button onClick = {equals} className = "button red">=</button>
        <button onClick = {reset} className = "button clear">Clear</button>
      </div>
    </div>
  );
}

export default App;
