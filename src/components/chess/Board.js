import React from 'react';
import Tile from './Tile';

function Board({board}) {
    const getPosition = (index) => {
        const x = index % 8;
        const y = Math.abs(Math.floor(index / 8 ) - 7);
        return {x, y};
    }

    const isBlack = (index) => {
        const {x, y} = getPosition(index);
        return (x + y)  % 2 !== 1;
    }

    return (
        <div className="board">
            {board.flat().map((piece, index) =>
                <div key={index} className="tile">
                    <Tile piece={piece} black={isBlack(index)}/>
                </div>
            )}
        </div>
    );
}

export default Board;
