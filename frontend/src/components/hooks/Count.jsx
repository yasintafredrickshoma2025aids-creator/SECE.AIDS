import { useEffect, useState } from 'react'
import Button from '../ui/button.jsx'

function Count() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Count has changed:', count)
  }
)
  return (
    <section>
      <h3 aria-live="polite">Count: {count}</h3>
      <Button onClick={() => setCount((current) => current + 1)}>
        Increase
      </Button>
    </section>
  )
}

export default Count
