// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import MyProfile from './pages/MyProfile/MyProfile'
import GoalDetail from './pages/GoalDetail/GoalDetail'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
// import * as goalService from './services/goalService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  // const [goalLists, setGoalLists] = useState(goalService.index())

  // const handleAddGoalList = async (goalId) => {
  //   const newGoal = await goalService.create(goalId)
  //   setGoalLists([newGoal, ...goalLists])
  //   navigate('/goals')
  // }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
          />
          <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <MyProfile /> 
              {/* <MyProfile handleAddGoalList={handleAddGoalList}/> */}
            </ProtectedRoute>
          }
        />
        <Route 
          path="/goalLists/:goalId"
          element={
            <ProtectedRoute user={user}>
            <GoalDetail />
          </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
