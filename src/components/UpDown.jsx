import React from 'react';

export default function UpDown({side, index, setIndex, max, onClick, onWheel}) {
    
    return (
        side !== "Left" && side !== "Right" ? null :
            
            <div id={`UpDown${side}`} onClick={onClick} onWheel={onWheel}>
                <div className={"h-[8vw] w-[8vw] border border-2 flex justify-center items-center"}
                     onClick={() => { setIndex(Math.min((index + 1), max)) }}
                >+
                </div>
                <div className={"h-[8vw] w-[8vw] border border-2 flex justify-center items-center"}
                     onClick={() => { setIndex(Math.max((index - 1), 0)) }}
                >-
                </div>
            </div>
    )
}