import { React, useEffect, useState } from 'react';
import '../styles/Chess.css';
import { gameSubject, initGame, resetGame } from '../components/chess/Game';
import Board from '../components/chess/Board';

function Chess() {
    const [board, setBoard] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [result, setResult] = useState();

    useEffect(() => {
        initGame();
        const subscribe = gameSubject.subscribe((game) => {
            setBoard(game.board)
            setIsGameOver(game.isGameOver)
            setResult(game.result)
            //setTurn(game.turn)
          })
        return () => subscribe.unsubscribe()
    }, []);

    return (
        <div className="Chess">
            {isGameOver && (
                <h2 className="game-status">GAME OVER
                    <button className="new-game-btn" onClick={resetGame}>
                        <span>
                            NEW GAME
                        </span>
                    </button>
                </h2>
            )}
            <div className="board-container">
                <Board board={board}/>
            </div>
            {result && (
                <p className="game-status">
                    {result}
                </p>
            )}
        </div>
    );
}

export default Chess;
