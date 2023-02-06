import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const MyProfile = () => {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile()
      setProfile(profileData)
    }
    fetchProfile()
  }, [])



}

export default MyProfile