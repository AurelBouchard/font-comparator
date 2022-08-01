import { useState } from 'react'
import './fonts/icoToContent.css'
import './fonts/leftSideContent.css'
import './fonts/rightSideContent.css'
import './main.css'
import CompLine from "./components/CompLine";
import {updateFont} from "./assets/utils/utils";



function App() {
    
    const emptyFont = {
        name: "",
        family: "",
        content: [],
        icoName: [],
        classPrefix: "",
        orderedListOfContent: [],
        orderedListOfGlyph: []
    }

    // LEFT
    const [left, setLeft] = useState(emptyFont)
    const [contentIndexLeft, setContentIndexLeft] = useState(0)
    const [glyphIndexLeft, setGlyphIndexLeft] = useState(0)
    const [cmdLeft, setCmdLeft] = useState("content") // "content" or "glyph"

    
    // RIGHT
    const [right, setRight] = useState(emptyFont)
    const [contentIndexRight, setContentIndexRight] = useState(0)
    const [glyphIndexRight, setGlyphIndexRight] = useState(0)
    const [cmdRight, setCmdRight] = useState("content") // "content" or "glyph"
    
    
    // shortcut
    const font =            {
        Left: left,
        Right: right
    }
    const setter =          {
        Left: setLeft,
        Right: setRight
    }
    const contentIndex =    {
        Left : contentIndexLeft,
        Right : contentIndexRight
    }
    const setContentIndex = {
        Left : setContentIndexLeft,
        Right : setContentIndexRight
    }
    const glyphIndex =      {
        Left : glyphIndexLeft,
        Right : glyphIndexRight
    }
    const setGlyphIndex =   {
        Left : setGlyphIndexLeft,
        Right : setGlyphIndexRight
    }
    const cmd =   {
        Left : cmdLeft,
        Right : cmdRight
    }
    const setCmd =   {
        Left : setCmdLeft,
        Right : setCmdRight
    }
    
    

  return (
    <div className="App box-content">
      <header className="App-header mt-[1.5vw] mb-[5vw]">
        Font Comparator
      </header>
        <main>
            <CompLine
                font={font}
                setter={setter}
                glyphIndex={glyphIndex}
                setGlyphIndex={setGlyphIndex}
                contentIndex={contentIndex}
                setContentIndex={setContentIndex}
                cmd={cmd}
                setCmd={setCmd}
            />
        </main>
    </div>
  )
}

export default App
