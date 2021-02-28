import React from 'react';
import { FaChessKing } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function White() {
    return (
        <div className="chess-turn white">
            <div className="icon-container-white">
                <IconContext.Provider value={{ color: '#fff' }}>
                    <FaChessKing className="icon" />
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default White;
