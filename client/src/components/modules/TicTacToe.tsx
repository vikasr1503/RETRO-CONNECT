import { useState } from 'react';

interface TicTacToeProps {
  onBack: () => void;
}

type Player = 'X' | 'O';
type Cell = Player | null;
type Board = Cell[];

export default function TicTacToe({ onBack }: TicTacToeProps) {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [gameStatus, setGameStatus] = useState('Game in progress...');

  const checkWinner = (board: Board): Player | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a] as Player;
      }
    }
    return null;
  };

  const makeMove = (index: number) => {
    if (board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setGameStatus(`Player ${winner} wins!`);
    } else if (newBoard.every(cell => cell !== null)) {
      setGameStatus('It\'s a draw!');
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameStatus('Game in progress...');
  };

  return (
    <div className="terminal-container p-6">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-cyber-green" data-testid="title-ttt">TIC-TAC-TOE</h2>
          <button 
            className="text-cyber-magenta hover:text-white transition-colors duration-300" 
            onClick={onBack}
            data-testid="button-back"
          >
            [BACK TO TERMINAL]
          </button>
        </div>
        
        <div className="border border-cyber-blue p-6 bg-black bg-opacity-50">
          <div className="text-center mb-4">
            <div className="text-cyber-blue">Current Player: <span className="font-bold text-cyber-green" data-testid="text-current-player">{currentPlayer}</span></div>
            <div className="text-cyber-magenta text-sm" data-testid="text-game-status">{gameStatus}</div>
          </div>
          
          {/* Game Board */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {board.map((cell, index) => (
              <button 
                key={index}
                className="w-16 h-16 border border-cyber-green bg-transparent text-cyber-green text-xl font-bold hover:bg-cyber-green hover:text-black transition-all duration-300 flex items-center justify-center"
                onClick={() => makeMove(index)}
                data-testid={`cell-${index}`}
              >
                {cell}
              </button>
            ))}
          </div>
          
          <button 
            onClick={resetGame}
            className="w-full px-4 py-2 border border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-black transition-all duration-300"
            data-testid="button-reset"
          >
            RESET GAME
          </button>
        </div>
      </div>
    </div>
  );
}
