import React from 'react';
import Tile from './Tile';

const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h"];

function Board({board}) {
    const getXYPosition = (index) => {
        const x = index % 8;
        const y = Math.abs(Math.floor(index / 8 ) - 7);
        return {x, y};
    }

    const isBlack = (index) => {
        const {x, y} = getXYPosition(index);
        return (x + y)  % 2 !== 1;
    }

    const getPosition = (index) => {
        const {x, y} = getXYPosition(index);
        return `${HORIZONTAL_AXIS[x]}${y + 1}`;
    }

    return (
        <div className="board">
            {board.flat().map((piece, index) =>
                <div key={index} className="tile">
                    <Tile piece={piece} black={isBlack(index)} position={getPosition(index)}/>
                </div>
            )}
        </div>
    );
}

export default Board;
