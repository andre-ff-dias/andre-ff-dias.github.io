import React from 'react';
import Piece from './Piece'

function Tile({piece, black}) {
    //console.log(piece);
    const bgClass = black ? 'black-tile' : 'white-tile';

    return (
        <div className={bgClass}>
            { piece && <Piece piece={piece}/>}
        </div>
    );    
}

export default Tile;
