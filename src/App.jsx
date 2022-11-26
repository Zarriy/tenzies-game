import { useState } from "react";
import Die from "./die";
import "./App.css";

function App() {
  const [dice, setDice] = useState(createDice());
  function randomValue() {
    return Math.ceil(Math.random() * 6);
  }
  function createDice() {
    const array = [];
    for (let x = 0; x < 10; x++) {
      const die = {
        value: randomValue(),
        hold: false,
        id: x + 1,
      };
      array.push(die);
    }
    return array;
  }

  return (
    <div className="game-div">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="Dice-Box">
        {dice.map((die) => (
          <Die dice={die.value} key={die.id} />
        ))}
        <button className="roll-dice">Roll</button>
      </div>
    </div>
  );
}

export default App;
