import React from 'react';

export default function UpDown({side, index, setIndex, max, onClick, onWheel, style, arrowPos}) {
    
    return (
        side !== "Left" && side !== "Right" ? null :
    
            <div  className={"relative cursor-pointer"}>
                <div id={`UpDown${side}`} onClick={onClick} onWheel={onWheel}>
                    <div className={style}
                         onClick={() => {
                             setIndex(Math.min((index + 1), max))
                         }}
                    >+
                    </div>
                    <div className={style}
                         onClick={() => {
                             setIndex(Math.max((index - 1), 0))
                         }}
                    >-
                    </div>
                </div>
                <div className={`absolute transition-all ${arrowPos === "glyph" ? "top-[12vw]" : "top-[4vw]"}`}>
                    <div className={`absolute ${side === "Left" ? "left-[8vw]" : "right-0"} arrow-${side}`} />
                </div>
            </div>
    )
}