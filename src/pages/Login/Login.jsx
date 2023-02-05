import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'
import LoginIcon from '../../assets/branding/PlanProAll.png'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <section>
        <img src={LoginIcon} alt="logo" />
      </section>
      <h1>Log In</h1>
      <p>{message}</p>
      <section>
        <LoginForm
          message={message}
          updateMessage={updateMessage}
          handleSignupOrLogin={props.handleSignupOrLogin}
        />
      </section>
    </main>
  )
}

export default LoginPage
