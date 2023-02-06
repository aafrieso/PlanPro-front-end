import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import styles from './MyProfile.module.css'

const MyProfile = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile()
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  if (!profile) return <p>Please Log In or Sign Up!</p>

  return (
    <main className={styles.container}>
          <h1>{profile.name}</h1>
          <h2>{profile.goals}</h2>
    </main>
  )
}

export default MyProfile