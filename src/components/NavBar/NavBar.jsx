// import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/branding/logo.png'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">Log In</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      {/* <li>Welcome, {user.name}</li> */}
      <li><NavLink to="/profiles">Profiles</NavLink></li>
      <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
      <li><NavLink to="/change-password">Change Password</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to={'/'}><img src={Logo} alt="A cute owl" /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
