import { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import styles from './TaskList.module.css'

const TaskList = (props) => {

  const [visible, setVisible] = useState(false)
  const handleToggle = () => {
    setVisible(!visible)
  }

  return (
    <main className={styles.container}>
      <section>
        <header style={{ display: 'flex' }}>
          <h2>Task List
            <div>
          <button onClick={handleToggle}>
            Show
          </button>
            </div>
          </h2>
        </header>
        {visible &&
          props.tasks.map(task => (
            <TaskCard
              key={task._id}
              task={task}
              // category={task.category}
              handleDeleteTask={props.handleDeleteTask}
              handleUpdateTask={props.handleUpdateTask}
              handleAddStep={props.handleAddStep}
            />
          ))
        }
      </section>
    </main>
  )
}

export default TaskList