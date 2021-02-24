import { React, useEffect, useState } from 'react';
import '../styles/Chess.css';
import { gameSubject } from '../components/chess/Game';
import Board from '../components/chess/Board';

function Chess() {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        const subscribe = gameSubject.subscribe( game => setBoard(game.board));
        return () => subscribe.unsubscribe();
    }, []);

    return (
        <div className="Chess">
            <div className="board-container">
                <Board board={board}/>
            </div>
        </div>
    );
}

export default Chess;
