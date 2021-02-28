import React from 'react';
import { move } from './Game';

const promotionPieces = ["r", "n", "b", "q"];
const bgColors = ["#ebecd0", "#779556", "#779556"];

function Promote({promotion: {from, to, color}}) {
    return (
        <div className="board">
            {
                promotionPieces.map((piece, index) => (
                    <div key={index} className="promote-tile">
                        <div className="piece-container" style={{backgroundColor: bgColors[index % 3]}} onClick={()=>move(from, to, piece)}>
                            <img src={`assets/images/chess/${piece}_${color}.png`} alt="promotion" className="chess-piece promote-cursor"/>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Promote;
