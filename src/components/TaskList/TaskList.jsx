import TaskCard from "../TaskCard/TaskCard";

const TaskList = (props) => {

  console.log("PROPS", props.tasks);
  


  return (
    <section>
      <h2>Task List</h2>
      {props.tasks.map(task => (
        <TaskCard task={task}/>
      ))}
    </section>
  )
}

export default TaskList