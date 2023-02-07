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
      <h1>{profile.name}</h1>
      <section>
        <img src={profile.photo} alt="photo" />
      </section>
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
      <form>
        <h2>
          Make a new goal list
        </h2>
        <input type="text" />
        <button> submit </button>
      </form>
    </main>
  )
}

export default MyProfile