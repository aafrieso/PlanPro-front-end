import TaskCard from "../TaskCard/TaskCard";

const TaskList = (props) => {

  return (
    <section>
      <h2>Task List</h2>
      {props.tasks.map(task => (
        <TaskCard key={task._id} task={task} category={task.category}/>
      ))}
    </section>
  )
}

export default TaskList