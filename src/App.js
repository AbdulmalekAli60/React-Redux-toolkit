import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { add, divide, multiply, subtract } from "./features/calcs/calcSlice";
function App() {
  const resultState = useSelector((state) => {
    return state.calc.result;
  });
  const dispatch = useDispatch();
  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);

  // EVENT HANDLERS
  function handleSumClick() {
    dispatch(add({ firstNumberInput, secondNumberInput }));
  }

  function handleSubClick() {
    dispatch(subtract({ firstNumberInput, secondNumberInput }));
  }

  function handleMultClick() {
    dispatch(multiply({ firstNumberInput, secondNumberInput }));
  }

  function handleDivClick() {
    dispatch(divide({ firstNumberInput, secondNumberInput }));
  }
  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          background: "teal",
        }}
      >
        {/* FIRST INPUT */}
        <label>First Number</label>
        <input
          value={firstNumberInput}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

        {/* SECOND INPUT */}
        <label>Second Number</label>
        <input
          value={secondNumberInput}
          onChange={(e) => setSecondNumberInput(e.target.value)}
        />

        <button onClick={handleSumClick}>sum</button>

        <button onClick={handleSubClick}>subtract</button>

        <button onClick={handleMultClick}>multiply</button>

        <button onClick={handleDivClick}>divide</button>

        <hr />

        <h2>{resultState}</h2>
      </div>
    </div>
  );
}

export default App;
