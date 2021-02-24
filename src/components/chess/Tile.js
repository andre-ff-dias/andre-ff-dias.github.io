import React from 'react';
import Piece from './Piece';
import { useDrop } from 'react-dnd';
import { move } from './Game';

function Tile({piece, black, position}) {
    //console.log(piece);
    const bgClass = black ? 'black-tile' : 'white-tile';

    const [ , drop] = useDrop({
        accept: 'piece',
        drop: (item) => {
            //console.log(item);
            move(item.position, position);
        }
    });

    return (
        <div className={bgClass} ref={drop}>
            { piece && <Piece piece={piece} position={position}/>}
        </div>
    );    
}

export default Tile;
