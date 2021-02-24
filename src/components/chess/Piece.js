import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';

function Piece({piece: {type, color}, position}) {
    const [ {isDragging}, drag, preview] = useDrag({
        item: {
            type: 'piece',
            id: `${type}_${color}`,
            position: position
        },
        collect: (monitor) => {
            return {isDragging: !!monitor.isDragging()}
        }
    });

    const pieceImg = `assets/images/${type}_${color}.png`;

    return (
        <>
            <DragPreviewImage connect={preview} src={pieceImg} className="piece-preview"/>
            <div className="piece-container" ref={drag} style={{opacity: isDragging ? 0 : 1}}>
                <img src={pieceImg} alt="" className="chess-piece"/>
            </div>
        </>
    );
}

export default Piece;
