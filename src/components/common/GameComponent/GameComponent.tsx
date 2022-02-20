import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

import blocks from "./GameBlock/blocks";
import checkResult from "../../../utils/helpers/checkResult";
import GameBlock from "./GameBlock/GameBlock";

import "./GameComponent.css";

type Props = {
  parentRef: any;
  alterScores: Function;
};

const GameComponent = (props: Props) => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("-");
  const [game, setGame] = useState([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ]);

  const alterPlayer = () => {
    const player = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(player);
  };

  const alterGame = (r: number, c: number) => {
    let temp = JSON.parse(JSON.stringify(game));
    temp[r - 1][c - 1] = currentPlayer;
    setRow(r);
    setCol(c);
    setGame(temp);
    alterPlayer();
  };

  const resetGame = () => {
    setGameOver(false);
    setGame([
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
    setCurrentPlayer(winner === "X" ? "O" : "X");
    setRow(0);
    setCol(0);
    setWinner("-");
  };

  useEffect(() => {
    const res = checkResult(row, col, game);
    setGameOver(res.matchOver);
    if (res.matchOver) {
      setWinner(res.winner);
      props.parentRef.current.addEventListener("click", resetGame);
      props.alterScores(res.winner);

      return () =>
        props.parentRef.current.removeEventListener("click", resetGame);
    }
  }, [game, row, col]);

  const renderBlocks = () => {
    return blocks.map((block, index) => {
      return (
        <GameBlock
          key={index}
          row={block.row}
          col={block.col}
          game={game}
          gameOver={gameOver}
          alterGame={alterGame}
        />
      );
    });
  };

  return (
    <>
      {winner !== "-" && winner !== "Draw" && (
        <Confetti opacity={1} className="confetti" />
      )}
      <div className="gameMainContainer">{renderBlocks()}</div>
    </>
  );
};

export default GameComponent;
