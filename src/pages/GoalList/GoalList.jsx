import styles from './GoalList.module.css'
import GoalCard from "../../components/GoalCard/GoalCard"

const GoalList = (props) => {
  return (
    <main className={styles.container}>
      {props.goals.map((goal) => (
        <GoalCard key={goal._id} goal={goal} />
      ))}
    </main>
  )
}

export default GoalList