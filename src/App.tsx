import { useState } from 'react'
import { useEffect } from 'react'
import { BlurScrollEffect } from './js/blurScrollEffect.js'
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Awwwards — интернет-сайт конкурса профессиональных веб-дизайнеров и разработчиков. Основной целью является признание и поощрение лучших инновационных решений в веб-дизайне. Ежегодно на конференции и церемонии награждения Awwwards, проводимой в больших городах США и Европы, представлены лучшие сайты за весь год.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>yo</h1>
      <div className='logo'/>
    </>
  )
}

export default App
