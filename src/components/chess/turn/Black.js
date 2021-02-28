import React from 'react';
import { FaChessKing } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Black() {
    return (
        <div className="chess-turn black">
            <div className="icon-container-black">
                <IconContext.Provider value={{ color: '#000' }}>
                    <FaChessKing className="icon" />
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default Black;