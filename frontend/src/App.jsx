import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isToggled, setIsToggled] = useState(false)

  return (
    <main className="app">
      <div className="button-row">
        <button className="button-delete" type="button">
          Delete
        </button>
        <button className="button-outline" type="button">
          Outline
        </button>
        <button className="button-secondary" type="button">
          Secondary
        </button>
        <button className="button-ghost" type="button">
          Ghost
        </button>
      </div>

      <h1>App</h1>
      <p>This is test</p>
      <h2>Students</h2>
      <p>I am test and age is 30</p>
      <p>This is the Students component.</p>
      <p aria-live="polite">
        Count: {count}
      </p>
      <button type="button" onClick={() => setCount((current) => current + 1)}>
        Increase
      </button>
      <p aria-live="polite">
        Toggle: {isToggled ? 'ON' : 'OFF'}
      </p>
      <button type="button" onClick={() => setIsToggled((current) => !current)}>
        Toggle
      </button>
    </main>
  )
}

export default App
