import MyProfile from "../../pages/MyProfile/MyProfile"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import * as goalService from '../../services/goalService'
import { useParams } from "react-router-dom"

const GoalDetail = () => {
  const { id } = useParams()
  const [goal, setGoal] = useState(null)

  useEffect(() => {
    const fetchGoal = async () => {
      const goalData = await goalService.getGoal(id)
      setGoal(goalData)
    }
    fetchGoal()
  }, [id])

  return (
    <>

    </>
  )
}

export default GoalDetail