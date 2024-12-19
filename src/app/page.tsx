"use client";

import { useState } from "react";
import { TicTacToe } from "@/core/tictactoe";

import MainMenu from "@/components/main-menu";
import Alert from "@/components/alert";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRole, setCurrentRole] = useState<Role>("user");
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    status: "" as Status,
  });

  const showAlert = (status: Status) => {
    setAlert({ show: true, status });
  };

  const hideAlert = () => {
    setAlert({ show: false, status: "draw" });
    setIsPlaying(false);
  };

  const handleSelectFirstTurn = (role: Role) => {
    const newBoard = Array(9).fill(null);
    setBoard(newBoard);
    setCurrentRole(role);
    setIsPlaying(true);
    setGameOver(false);

    if (role === "ai") {
      const game = new TicTacToe(newBoard);
      const bestMove = game.getBestMove();

      console.log(`AI: ${bestMove + 1}`);

      newBoard[bestMove] = "X";
      setBoard([...newBoard]);
      setCurrentRole("user");
    }
  };

  const checkGameEnd = (game: TicTacToe, currentBoard: Board) => {
    if (game.isWinner("X")) {
      setGameOver(true);
      setBoard([...currentBoard]);
      showAlert("ai");
      return true;
    }
    if (game.isWinner("O")) {
      setGameOver(true);
      setBoard([...currentBoard]);
      showAlert("user");
      return true;
    }
    if (game.isFull()) {
      setGameOver(true);
      setBoard([...currentBoard]);
      showAlert("draw");
      return true;
    }
    return false;
  };

  const handleClick = (index: number) => {
    if (board[index] === null && !gameOver) {
      const newBoard = [...board];
      newBoard[index] = currentRole === "user" ? "O" : "X";

      console.log(`Player: ${index + 1}`);

      const game = new TicTacToe(newBoard);
      if (!checkGameEnd(game, newBoard)) {
        const bestMove = game.getBestMove();
        newBoard[bestMove] = "X";

        console.log(`AI: ${bestMove + 1}`);

        setBoard([...newBoard]);
        game.board = newBoard;
        checkGameEnd(game, newBoard);
      } else {
        setBoard([...newBoard]);
      }
    }
  };

  return (
    <>
      {!isPlaying ? (
        <MainMenu handleSelectFirstTurn={handleSelectFirstTurn} />
      ) : (
        <div className="w-full max-w-md p-8 my-8 rounded-xl bg-cyan-950">
          <div className="grid grid-cols-3 gap-4">
            {board.map((cell, index) => (
              <button
                key={index}
                className={`w-full aspect-square bg-cyan-800 rounded-xl flex items-center justify-center text-5xl font-extrabold shadow-[0_8px_0_0] shadow-cyan-900 ${
                  cell === "X" ? "text-sky-400" : "text-amber-500"
                }`}
                onClick={() => handleClick(index)}
              >
                {cell}
              </button>
            ))}
          </div>
        </div>
      )}
      <Alert status={alert.status} isOpen={alert.show} onClose={hideAlert} />{" "}
    </>
  );
}
