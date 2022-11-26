import { useEffect, useState } from "react";
import Die from "./die";
import "./App.css";

function App() {
  const [dice, setDice] = useState(createDice());
  const [win, setWin] = useState(false);

  useEffect(() => {
    const firstHeld = dice[0].value;
    const heldD = dice.every((die) => die.hold);
    const heldSame = dice.every((die) => die.value === firstHeld);
    if (heldD && heldSame) {
      setWin(true);
    }
  }, [dice]);

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

  const holdDice = (id) => {
    setDice((prevDice) => {
      return prevDice.map((die) =>
        die.id === id ? { ...die, hold: !die.hold } : die
      );
    });
  };

  const rollUnholdDice = () => {
    setDice((prevDice) => {
      return prevDice.map((dice, i) =>
        !dice.hold ? { ...dice, value: randomValue() } : dice
      );
    });
  };

  return (
    <div className="game-div">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="Dice-Box">
        {dice.map((die) => (
          <Die {...die} holdDice={holdDice} key={die.id} />
        ))}
        <button onClick={rollUnholdDice} className="roll-dice">
          {!win ? "Roll" : "Reset"}
        </button>
      </div>
    </div>
  );
}

export default App;
