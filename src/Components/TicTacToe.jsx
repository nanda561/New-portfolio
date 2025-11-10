import { useState, useEffect } from "react";

const initialBoard = Array(9).fill(null);

function checkWinner(board) {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let combo of winPatterns) {
    const [a,b,c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combo };
    }
  }

  if (board.every(Boolean)) return { winner: "tie", combo: [] };
  return null;
}

function minimax(board, isMax) {
  const result = checkWinner(board);
  if (result?.winner === "X") return -1;
  if (result?.winner === "O") return 1;
  if (result?.winner === "tie") return 0;

  if (isMax) {
    let best = -Infinity;
    board.forEach((_, i) => {
      if (!board[i]) {
        board[i] = "O";
        best = Math.max(best, minimax(board, false));
        board[i] = null;
      }
    });
    return best;
  } else {
    let best = Infinity;
    board.forEach((_, i) => {
      if (!board[i]) {
        board[i] = "X";
        best = Math.min(best, minimax(board, true));
        board[i] = null;
      }
    });
    return best;
  }
}

function bestMove(board) {
  let move = null;
  let best = -Infinity;
  board.forEach((_, i) => {
    if (!board[i]) {
      board[i] = "O";
      let score = minimax(board, false);
      board[i] = null;
      if (score > best) {
        best = score;
        move = i;
      }
    }
  });
  return move;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [winData, setWinData] = useState(null);

  const handleClick = (i) => {
    if (board[i] || winData) return;

    const newBoard = [...board];
    newBoard[i] = "X";

    const ai = bestMove(newBoard);
    if (ai !== null) newBoard[ai] = "O";

    const result = checkWinner(newBoard);
    if (result) setWinData(result);

    setBoard(newBoard);
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setWinData(null);
  };

  return (
    <div className="flex flex-col items-center justify-center select-none">

      {/* Caption or Result Message */}
      {!winData && (
        <p className="mb-4 text-sm text-gray-400 tracking-wide text-center">
          Think you can outsmart me?
          <span className="text-[var(--primary-color)] font-medium ml-1">Try your luck.</span>
        </p>
      )}

      {winData && (
        <p className="mb-4 text-sm font-semibold text-[var(--primary-color)] text-center">
          {winData.winner === "X" && "You Won 😎"}
          {winData.winner === "O" && "I Won 🤖"}
          {winData.winner === "tie" && "It's a Tie 😐"}
        </p>
      )}

      {/* Game Grid */}
      <div
        className={`grid grid-cols-3 gap-2 sm:gap-3 transition ${
          winData ? "opacity-80" : "opacity-60 hover:opacity-100"
        }`}
      >
        {board.map((cell, i) => {
          const isWinnerCell = winData?.combo?.includes(i);
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`
                w-12 h-12 sm:w-14 sm:h-14 
                flex items-center justify-center 
                text-xl sm:text-2xl font-semibold 
                cursor-pointer rounded-md
                border transition duration-300
                ${
                  isWinnerCell
                    ? "text-[var(--primary-color)] border-[var(--primary-color)] scale-110 shadow-[0_0_15px_var(--primary-color)]"
                    : "border-gray-600 hover:border-[var(--primary-color)]"
                }
              `}
            >
              {cell}
            </div>
          );
        })}
      </div>

      {/* Try Again Button */}
      {winData && (
        <button
          onClick={resetGame}
          className="mt-4 text-sm px-4 py-2 border border-[var(--primary-color)] text-[var(--primary-color)]
          rounded-md hover:bg-[var(--primary-color)] hover:text-black transition">
          Try Again
        </button>
      )}
    </div>
  );
}
