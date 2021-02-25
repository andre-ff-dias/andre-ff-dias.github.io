import { React, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { handleMove, gameSubject } from './Game';
import Piece from './Piece';
import Promote from './Promote';

function Tile({piece, black, position}) {
    //console.log(piece);
    const [promotion, setPromotion] = useState(null);
    const bgClass = black ? 'black-tile' : 'white-tile';

    const [ , drop] = useDrop({
        accept: 'piece',
        drop: (item) => {
            //console.log(item);
            handleMove(item.position, position);
        }
    });
    
    useEffect(() => {
        const subscribe = gameSubject.subscribe( game =>{
            //console.log(game);
            try{
                if (game.pendingPromotion.to === position) {
                    setPromotion(game.pendingPromotion);
                }
                else{
                    setPromotion(null);
                }
            }
            catch{
                //console.log('When game.pendingPromotion is undefined');
                setPromotion(null);
            }
            
        })
        return () => subscribe.unsubscribe()
      }, [position]);

    return (
        <div className={bgClass} ref={drop}>
            {promotion ? (
                <Promote promotion={promotion}/>
            ) : piece ? (
                <Piece piece={piece} position={position}/> 
            ): null}
        </div>
    );    
}

export default Tile;
