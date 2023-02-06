import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import styles from './MyProfile.module.css'

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
          {profile.map(profile => (
            <li>{profile.goal}</li>
          ))}
    </main>
  )
}

export default MyProfile