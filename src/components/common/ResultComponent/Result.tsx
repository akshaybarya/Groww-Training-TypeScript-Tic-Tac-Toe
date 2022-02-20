import React from "react";

import "./Result.css";

type Props = {
  scores: {
    player1: number;
    player2: number;
    tie: number;
  };
};

const Result = (props: Props) => {
  const { player1, player2, tie } = props.scores;
  return (
    <>
      <div className="resultItems">
        <h4>Player 1 (X)</h4>
        <h4>{player1}</h4>
      </div>
      <div className="resultItems">
        <h4>Tie</h4>
        <h4>{tie}</h4>
      </div>
      <div className="resultItems">
        <h4>Player 2 (O)</h4>
        <h4>{player2}</h4>
      </div>
    </>
  );
};

export default Result;
