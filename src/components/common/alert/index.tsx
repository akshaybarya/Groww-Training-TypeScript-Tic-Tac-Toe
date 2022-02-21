import React from "react";

import "./alert.css";

type Props = {
  winner: string;
};

const Alert = (props: Props) => {
  const getWinner = () => {
    switch (props.winner) {
      case "X":
        return "Player1 Wins!";

      case "O":
        return "Player2 Wins!";

      case "Draw":
        return "Match Draw !!";

      default:
        return "Tic Tac Toe";
    }
  };

  return (
    <div className="alertContainer">
      <div className="alertBox">
        <h1>{getWinner()}</h1>
      </div>
    </div>
  );
};

export default Alert;
