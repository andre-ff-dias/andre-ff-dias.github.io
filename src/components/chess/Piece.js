import React from 'react';

function Piece({piece: {type, color}}) {
    const pieceImg = `assets/images/${type}_${color}.png`
    return (
        <div className="piece-container">
            <img src={pieceImg} alt="" className="piece"/>
        </div>
    );
}

export default Piece;
