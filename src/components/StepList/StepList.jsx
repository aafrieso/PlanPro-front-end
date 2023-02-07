const StepList = (props) => {

  return (
    <section>
      <h4>Step list</h4>
      <ul>
        {props.steps.map(step => (
          <li key={step._id}>
            {step.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StepList