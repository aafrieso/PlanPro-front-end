import { useState, useEffect } from "react"
import * as goalService from "../../services/goalService"
import { useParams } from "react-router-dom"
import TaskList from "../../components/TaskList/TaskList"
import NewTask from "../../components/NewTask/NewTask"
import * as taskService from "../../services/taskService"

const GoalDetail = () => {
  const { goalId } = useParams()
  console.log("THIS IS A GOALID", goalId);
  const [goal, setGoal] = useState(null)

  const handleAddTask = async (formData) => {
    formData.goalListId = goalId
    const data = await taskService.createTask(formData)
    setGoal(data)
  }

  useEffect(() => {
    const fetchGoal = async () => {
      const goalData = await goalService.show(goalId)
      console.log('GOAL DATA', goalData);
      setGoal(goalData)
    }
    fetchGoal()
  }, [goalId])

  if (!goal) return <h1>Loading</h1>

  return (
    <main>
      <h1>{goal.title}</h1>
      <NewTask handleAddTask={handleAddTask} />
      <TaskList tasks={goal.tasks}/>
    </main>
  )
}

export default GoalDetail