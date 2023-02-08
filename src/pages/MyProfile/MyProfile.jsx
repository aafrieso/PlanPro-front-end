import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import styles from './MyProfile.module.css'
// import GoalDetail from '../GoalDetail/GoalDetail'


const MyProfile = (props) => {
  const [profile, setProfile] = useState()

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile()
      console.log('profile data', profileData);
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  const [title, setTitle] = useState()

  const handleChange = ({ target }) => {
    setTitle(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
      props.handleAddGoalList({title, note:'Placeholder'})
  }

  if (!profile) return <p>Please Log In or Sign Up!</p>

  return (
    <main className={styles.container}>
      <section>
        <img src={profile.photo} alt="" />
        <h1>Welcome, {profile.name}</h1>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <h3>
            Create A Goal List
          </h3>
          <input
            type="text"
            value={title}
            onChange={handleChange}
            />
          <button> submit </button>

        </form>
        <ul>
          <h2>
            My Goal Lists
          </h2 >
          {profile.goals.map(goal => (
            <li
              key={goal._id}
            >
              <Link to={`/goalLists/${goal._id}`}>{goal.title}</Link>
            </li>
          ))}

        </ul>
      </section >
    </main >
  )
}

export default MyProfile