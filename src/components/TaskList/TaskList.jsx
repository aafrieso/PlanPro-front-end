

const TaskList = (props) => {

  console.log("PROPS", props.tasks);
  


  return (
    <section>
      <h2>Task List</h2>
      {props.tasks.map(task => (
        <p>{task.taskName}</p>
      ))}
    </section>
  )
}

export default TaskList