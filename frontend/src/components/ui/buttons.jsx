import Button from './button.jsx'

function Buttons() {
  return (
    <div className="button-row">
      <Button className="button-delete">Delete</Button>
      <Button className="button-outline">Outline</Button>
      <Button className="button-secondary">Secondary</Button>
      <Button className="button-ghost">Ghost</Button>
    </div>
  )
}

export default Buttons
