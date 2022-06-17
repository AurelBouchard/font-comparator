import React from 'react';
import UpDown from "./UpDown";
import {validateSide} from "../assets/utils/utils";

export default function HalfLine({ style, side, font,glyphIndex,setGlyphIndex,contentIndex,setContentIndex,cmd,setCmd, updateGlyphIndex, updateContentIndex}) {
    
    
    
    const onWheelMove = (deltaY, val) => {
        console.log("wwheeeele !!!")
        console.log(deltaY, val)
        return deltaY === 0 ? 0 : ( deltaY > 0 ? parseInt(val, 10)-1 : parseInt(val)+1 )
    }
    
    function handleWheel(e, side, currentIndex, max, currentSetter) {
        //console.log("handle wheel")
        console.log(side, currentIndex)
        
        if (validateSide(side)) {
            currentSetter(Math.max(Math.min(onWheelMove(e.deltaY, currentIndex), max), 0));
        }
    }
    
    return (
        <div className={side === "Left" ? style.leftPanel : style.rightPanel}>
            <div className={style.block}>
                {side === "Left" ? <UpDown side={side}
                                           index={cmd[side] === "content" ? contentIndex[side] : glyphIndex[side]}
                                           setIndex={cmd[side] === "content" ? setContentIndex[side] : setGlyphIndex[side]}
                                           max={font[side].orderedListOfContent.length - 1}
                                           onWheel={(e) => {
                                               let index = cmd[side] === "content" ? contentIndex[side] : glyphIndex[side];
                                               let setIndex = cmd[side] === "content" ? setContentIndex[side] : setGlyphIndex[side];
                                               let max = font[side].orderedListOfContent.length - 1;
                                               cmd[side] === "content" ?
                                                   handleWheel(e, side, index, max, setIndex, () => updateGlyphIndex(side, font, contentIndex, setGlyphIndex)) :
                                                   handleWheel(e, side, index, max, setIndex, () => updateContentIndex(side, font, glyphIndex, setContentIndex))
                                           }}
                                           style={style.btn}
                /> : null }
                
                <div>
                    <div className={"flex flex-row"}>
                        {side === "Right" ?
                            <div className={style.ico}>
                                {font[side].orderedListOfContent[0] &&
                                <span className={`ico_${Object.keys(JSON.parse(font[side].orderedListOfContent[contentIndex[side]]))[0]} font-${side} iconic`}/>
                                }
                            </div> : null }
                        <div className={style.content}
                             onClick={() => {
                                 if (cmd[side] !== "content") {
                                     console.log("content on", side)
                                     setCmd[side]("content");
                                 }
                             }}
                        >
                                <span>{font[side].orderedListOfContent[0] && (
                                    cmd[side] === "content" && Object.keys(JSON.parse(font[side].orderedListOfContent[contentIndex[side]]))[0] ||
                                    cmd[side] === "glyph" && Object.values(JSON.parse(font[side].orderedListOfGlyph[glyphIndex[side]]))[0]
                                )}</span>
                        </div>
                        {side === "Left" ?
                            <div className={style.ico}>
                                {font[side].orderedListOfContent[0] &&
                                <span className={`ico_${Object.keys(JSON.parse(font[side].orderedListOfContent[contentIndex[side]]))[0]} font-${side} iconic`}/>
                                }
                            </div> : null }
                    </div>
                    <div className={style.name}
                         onClick={() => {
                             if (cmd[side] !== "glyph") {
                                 console.log("glyph on", side)
                                 setCmd[side]("glyph");
                             }
                         }}
                    >
                            <span className={"glyph-name"}>{font[side].orderedListOfGlyph[0] && (
                                cmd[side] === "content" && Object.values(JSON.parse(font[side].orderedListOfContent[contentIndex[side]]))[0] ||
                                cmd[side] === "glyph" && Object.keys(JSON.parse(font[side].orderedListOfGlyph[glyphIndex[side]]))[0]
                            )}</span>
                    </div>
                </div>
                
                {side === "Right" ? <UpDown side={side}
                                            index={cmd[side] === "content" ? contentIndex[side] : glyphIndex[side]}
                                            setIndex={cmd[side] === "content" ? setContentIndex[side] : setGlyphIndex[side]}
                                            max={font[side].orderedListOfContent.length - 1}
                                            onWheel={(e) => {
                                               let index = cmd[side] === "content" ? contentIndex[side] : glyphIndex[side];
                                               let setIndex = cmd[side] === "content" ? setContentIndex[side] : setGlyphIndex[side];
                                               let max = font[side].orderedListOfContent.length - 1;
                                               cmd[side] === "content" ?
                                                   handleWheel(e, side, index, max, setIndex, () => updateGlyphIndex(side, font, contentIndex, setGlyphIndex)) :
                                                   handleWheel(e, side, index, max, setIndex, () => updateContentIndex(side, font, glyphIndex, setContentIndex))
                                           }}
                                            style={style.btn}
                /> : null }
            </div>
        </div>
    )
}