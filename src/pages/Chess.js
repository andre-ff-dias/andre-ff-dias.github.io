import { React, useEffect, useState } from 'react';
import '../styles/Chess.css';
import { gameSubject, initGame } from '../components/chess/Game';
import Board from '../components/chess/Board';
import RightTab from '../components/chess/tabs/RightTab';
import LeftTab from '../components/chess/tabs/LeftTab';

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
            <LeftTab isGameOver={isGameOver} turn={turn} />
            <div className="board-container">
                <Board board={board} turn={turn}/>
            </div>
            <RightTab isGameOver={isGameOver} result={result} />
        </div>
    );
}

export default Chess;
