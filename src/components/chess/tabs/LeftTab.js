import React from 'react';
import { resetGame } from '../Game';
import Black from '../turn/Black';
import White from '../turn/White';

function LeftTab({isGameOver, turn}) {
    return (
        <div className="chess-tab left">
            { !isGameOver && turn === 'w' ? <White /> : <Black />}
            { isGameOver && (
                <h2 className="game-status">GAME OVER
                    <button className="new-game-btn" onClick={resetGame}>
                        <span>
                            NEW GAME
                        </span>
                    </button>
                </h2>
            )}
        </div>
    );
}

export default LeftTab;
