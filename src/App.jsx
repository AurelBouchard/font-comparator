import { useState } from 'react'
import './fonts/icoToContent.css'
import './main.css'
import CompLine from "./components/CompLine";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App box-content">
      <header className="App-header mt-8 mb-18">
        El Comparator
      </header>
        <main>
            <CompLine />
        </main>
    </div>
  )
}

export default App
