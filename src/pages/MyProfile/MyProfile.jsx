import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import styles from './MyProfile.module.css'
// import GoalDetail from '../GoalDetail/GoalDetail'


const MyProfile = () => {
  const [profile, setProfile] = useState()

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile()
      console.log('profile data', profileData);
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  if (!profile) return <p>Please Log In or Sign Up!</p>

  return (
    <main className={styles.container}>
      <section className={styles.welcome}>
        <img src={profile.photo} alt="" />
      </section >
      <h1>Welcome, {profile.name}</h1>
      <form className={styles.form}>
        <h3>
          Create goal list
        </h3>
        <input type="text" />
        <button> submit </button>
      </form>
      <ul>
        <h2>
          My Goal Lists
        </h2>
        {profile.goals.map(goal => (
          <li key={goal._id}>
            <Link to={`/goalLists/${goal._id}`}>{goal.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default MyProfile