import StepList from "../StepList/StepList";
import { useState } from "react";
import NewStep from "../../pages/NewStep/NewStep";

const TaskCard = (props) => {
  const [task, setTask] = useState(props.task)
  return (
    <article style={{border: "1px solid black"}}>
      <h3>{task.taskName}</h3>
      <p>{task.note}</p>
      <p>{task.date}</p>
      <p>{task.time}</p>
      <StepList steps={task.steps}/>
      <NewStep task={task} setTask={setTask}/>
    </article>
  )
}

export default TaskCard