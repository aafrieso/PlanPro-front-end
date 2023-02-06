import {  } from "react-router-dom"
import styles from './GoalListCard.module.css'

const GoalListCard = ({ goals }) => {
  return (
    <div>
      {goals.map(goal => (
        <article key={goal._id} className={styles.container}>
          <header>
            <span>
              <h1>{goal.title}</h1>
            </span>
          </header>
          <p>{goal.text}</p>
        </article>
      ))}
    </div>
  )
}

export default GoalListCard