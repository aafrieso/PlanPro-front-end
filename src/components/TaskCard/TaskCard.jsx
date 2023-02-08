import StepList from "../StepList/StepList";
import { useState } from "react";
import NewStep from "../../pages/NewStep/NewStep";
import TaskList from "../TaskList/TaskList";

const TaskCard = (props) => {
  // const [task, setTask] = useState(props.task)
  const {task} = props
  return (
    <article style={{border: "1px solid black"}}>
      <h3>{task.taskName}</h3>
      <button onClick={() => props.handleDeleteTask(task._id)}>
        Delete Task
      </button>
      {!task.isComplete && 
        <button onClick={() => props.handleUpdateTask(task._id)}>
          Mark Complete
        </button>
      }
      <p>{task.isComplete ? 'complete' : 'incomplete'}</p>
      <p>{task.note}</p>
      <p>{task.date}</p>
      <p>{task.time}</p>
      <StepList steps={task.steps}/>
      {/* <NewStep task={task} setTask={setTask}/> */}
    </article>
  )
}

export default TaskCard