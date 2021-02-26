import { React, useEffect, useState } from 'react';
import '../styles/Chess.css';
import { gameSubject, initGame, resetGame } from '../components/chess/Game';
import Board from '../components/chess/Board';

function Chess() {
    const [board, setBoard] = useState([]);
    const [isGameOver, setIsGameOver] = useState();
    const [result, setResult] = useState();
    const [turn, setTurn] = useState();

    useEffect(() => {
        initGame();
        const subscribe = gameSubject.subscribe((game) => {
            setBoard(game.board)
            setIsGameOver(game.isGameOver)
            setResult(game.result)
            setTurn(game.turn)
          })
        return () => subscribe.unsubscribe()
    }, []);

    return (
        <div className="Chess">
            { turn && !isGameOver && (
                <h2 className="game-status">
                    {turn === 'w' ? 'White turn' : 'Black turn'}
                </h2>
            )}
            { isGameOver && (
                <h2 className="game-status">GAME OVER
                    <button className="new-game-btn" onClick={resetGame}>
                        <span>
                            NEW GAME
                        </span>
                    </button>
                </h2>
            )}
            <div className="board-container">
                <Board board={board} turn={turn}/>
            </div>
            { !isGameOver && (
                <button className="new-game-btn" onClick={resetGame}>
                    <span>
                        Restart Game
                    </span>
                </button>
            )}
            { result && (
                <p className="game-status">
                    {result}
                </p>
            )}
        </div>
    );
}

export default Chess;
