import { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = (props) => {

  const [visible, setVisible] = useState(false)
  const btnStyle = {width: '70px', height: '50px'}
  const handleToggle = () => {
    setVisible(!visible)
  }
  
  return (
    <section>
      <header style={{display: 'flex'}}>
        <h2>Task List</h2>
        <button style={btnStyle} onClick={handleToggle}>
          Show
        </button>
      </header>
      {visible && 
        props.tasks.map(task => (
          <TaskCard key={task._id} task={task} category={task.category}/>
        ))
      }
    </section>
  )
}

export default TaskList