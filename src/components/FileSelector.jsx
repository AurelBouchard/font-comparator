import React from 'react';

export default function Name({style, side, updating, onFontUpdate }) {
    
    return (
        <div className={`${side === "Left" ? style.leftPanel : style.rightPanel} ${style.center}`}>
            <div>
                {/*<span>Left font</span>*/}
                <label htmlFor={`file${side}`} className={"text-[2vw]"}>
                    <input type="file" id={`inputFile${side}`} name={`inputFile${side}`}
                           className={"file:w-[3vw] file:text-transparent"}
                           onInput={() => !updating && onFontUpdate(side)}
                    />
                </label>
            </div>
        </div>
    )
}