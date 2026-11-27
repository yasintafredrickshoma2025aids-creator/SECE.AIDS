function Students({ name = 'test', age = 30 }) {
  return (
    <section>
      <h2>Students</h2>
      <p>
        I am {name} and age is {age}
      </p>
      <p>This is the Students component.</p>
    </section>
  )
}

export default Students
