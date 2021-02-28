import React from 'react';
import { resetGame } from '../Game';

function RightTab({isGameOver, result}) {
    return (
        <div className="chess-tab right">
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

export default RightTab;
