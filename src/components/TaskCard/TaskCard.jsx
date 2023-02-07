import StepList from "../StepList/StepList";

const TaskCard = (props) => {

  return (
    <article style={{border: "1px solid black"}}>
      <h3>{props.task.taskName}</h3>
      <p>{props.task.note}</p>
      <p>{props.task.date}</p>
      <p>{props.task.time}</p>
      <StepList steps={props.task.steps}/>
    </article>
  )
}

export default TaskCard