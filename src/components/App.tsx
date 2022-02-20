import React, { useRef, useState } from "react";

import "./App.css";
import GameComponent from "./common/GameComponent/GameComponent";
import Result from "./common/ResultComponent/Result";

const App = () => {
  const [scores, setScores] = useState({
    player1: 0,
    player2: 0,
    tie: 0,
  });

  const ref = useRef<HTMLDivElement>(null);

  const alterScores = (winner: string) => {
    switch (winner) {
      case "X": {
        setScores({
          ...scores,
          player1: scores.player1 + 1,
        });
        return;
      }
      case "O": {
        setScores({
          ...scores,
          player2: scores.player2 + 1,
        });
        return;
      }
      case "Draw": {
        setScores({
          ...scores,
          tie: scores.tie + 1,
        });
        return;
      }
      default: {
        return;
      }
    }
  };

  return (
    <div ref={ref} className="App">
      <div className="gameContainers">
        <GameComponent parentRef={ref} alterScores={alterScores} />
      </div>
      <div className="gameContainers resultContainer">
        <Result scores={scores} />
      </div>
    </div>
  );
};

export default App;
