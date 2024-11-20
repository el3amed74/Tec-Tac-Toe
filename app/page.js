"use client";

import { useEffect, useState } from "react";
import Cell from "./components/cell";
import Celebration from "./components/celebration";
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");

  console.log(cells);

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");

      if (circleWins) {
        setWinningMessage(" Circle Wins!");
      } else if (crossWins) {
        setWinningMessage(" Cross Wins!");
      }
    })
  }, [cells])

  useEffect(() => {
    if (cells.every((cell) => cell !== "" && !winningMessage)) {
      setWinningMessage(" Draw! ")
    }
  }, [cells, winningMessage]);

  return (
    <main className="container">
      <div className="header">
        <h1 >Tic-Tac-Toe</h1>
      </div>
      <div className="gameBoard">
        {cells.map((cell, index) => (
          <Cell id={index}
            key={index}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            cell={cell}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <div className="msgs">
        {winningMessage && <div className="wins">
          <Celebration wins={winningMessage}/>
        </div>}
        {/* <div className="wins">{winningMessage}</div> */}
        {!winningMessage && <div className="playerTurn">
          it's now <span className="player">{go}</span> turn!
        </div>
        }
      </div>

    </main>
  );
}
