import { useState } from 'react'
import './App.css'
import Count from './components/hooks/Count.jsx'
import Register from './components/hooks/Register.jsx'
import Users from './components/hooks/Users.jsx'
import Button from './components/ui/button.jsx'
import Buttons from './components/ui/buttons.jsx'
import Students from './components/ui/Students.jsx'

function App() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <main className="app">
      <Buttons />
      <h1>App</h1>
      <p>This is test</p>
      <Students />
      <Count />
      <Register />
      <Users />
      <p aria-live="polite">
        Toggle: {isToggled ? 'ON' : 'OFF'}
      </p>
      <Button onClick={() => setIsToggled((current) => !current)}>
        Toggle
      </Button>
    </main>
  )
}

export default App
