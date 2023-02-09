// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import MyProfile from './pages/MyProfile/MyProfile'
import GoalDetail from './pages/GoalDetail/GoalDetail'
import Quotes from './pages/Quotes/Quotes'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as quoteService from './services/quoteService'
// styles
import './App.css'
import EditQuote from './pages/EditQuote/EditQuote'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [quotes, setQuotes] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddQuote = async (quoteData) => {
    const newQuote = await quoteService.createQuote(quoteData)
    setQuotes([newQuote, ...quotes])
  }
  useEffect(() => {
    const fetchAllQuotes = async () => {
      const data = await quoteService.index()
      setQuotes(data)
    }
    if (user) fetchAllQuotes()
  }, [user])

  const handleUpdateQuote = async (quoteData) => {
    const updatedQuote = await quoteService.update(quoteData)
    setQuotes(Quotes.map((q) => quoteData._id === q._id ? updatedQuote : q))
  }

  const handleDeleteQuote = async (id) => {
    const deleteQuote = await quoteService.deleteQuote(id)
    setQuotes(quotes.filter((q) => q._id !== deleteQuote._id))
  }

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
                <Route 
          path="/quotes"
          element={
            <ProtectedRoute user={user}>
            <Quotes  quotes={quotes} handleAddQuote={handleAddQuote} handleDeleteQuote={handleDeleteQuote}/>
            
          </ProtectedRoute>
          }
        />
        <Route path="/quotes/:id/edit" element={
	<ProtectedRoute user={user}>
		<EditQuote handleUpdateQuote={handleUpdateQuote} />
	</ProtectedRoute>
    } />
      </Routes>
    </>
  )
}

export default App
