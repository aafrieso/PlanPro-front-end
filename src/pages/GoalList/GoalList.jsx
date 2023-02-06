import styles from './GoalList.module.css'

const GoalList = (props) => {
  return (
    <main className={styles.container}>
      {props.goals.map((goal) => (
        <p key={goal._id}>
          {goal.title}
        </p>
      ))}
    </main>
  )
}

export default GoalList