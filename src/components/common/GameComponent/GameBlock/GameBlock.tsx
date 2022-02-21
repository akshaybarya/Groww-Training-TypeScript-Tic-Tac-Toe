import React from "react";
import "./GameBlock.css";

type Props = {
  row: number;
  col: number;
  game: string[][];
  gameOver: boolean;
  alterGame: Function;
};

const GameBlock = (props: Props) => {
  const { row, col, game, alterGame, gameOver } = props;

  const alter = () => {
    if (game[row - 1][col - 1] === "-" && !gameOver) alterGame(row, col);
  };

  return (
    <div className={`gameBlock gameRow${row} gameCol${col}`} onClick={alter}>
      {game[row - 1][col - 1] !== "-" &&
        (game[row - 1][col - 1] === "X" ? (
          <i className="fa-solid fa-xmark gameBlockX"></i>
        ) : (
          <i className="fa-solid fa-o gameBlockO"></i>
        ))}
    </div>
  );
};

export default GameBlock;
