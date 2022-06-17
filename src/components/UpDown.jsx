import React from 'react';

export default function UpDown({side, index, setIndex, max, onClick, onWheel, style}) {
    
    return (
        side !== "Left" && side !== "Right" ? null :
            
            <div id={`UpDown${side}`} onClick={onClick} onWheel={onWheel}>
                <div className={style}
                     onClick={() => { setIndex(Math.min((index + 1), max)) }}
                >+
                </div>
                <div className={style}
                     onClick={() => { setIndex(Math.max((index - 1), 0)) }}
                >-
                </div>
            </div>
    )
}