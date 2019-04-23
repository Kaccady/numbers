import React, { useState } from "react";
const compareNumeric = (a, b) => {
  return a - b;
};
const Numbers = props => {
  let arr = props.value.split(/\D/).sort(compareNumeric);
  console.log(arr);
  return (
    <div className="numbers">
      {arr.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
function App() {
  const [sendValue, setSendValue] = useState("1,3 3,5,21,9; 11");
  return (
    <div className="App">
    <h1>Введите цифры</h1>
      <input
        className="get-array"
        type="text"
        onChange={event => setSendValue(event.target.value)}
        value={sendValue}
      />
      <h2>Отсортированные цифры</h2>
      <Numbers value={sendValue} />
    </div>
  );
}

export default App;
