const TaskCard = (props) => {

  console.log("TASK CARD", props.task);
  


  return (
    <article style={{border: "1px solid black"}}>
      <h3>{props.task.taskName}</h3>
      <p>{props.task.note}</p>
      <p>{props.task.date}</p>
      <p>{props.task.time}</p>
    </article>
  )
}

export default TaskCard