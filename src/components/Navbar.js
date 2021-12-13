import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Login from '../pages/login/Login';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.title}>myWallet</li>
        <li><Link to="/login" />Login
        </li>
        <li><Link to="/signup" />Signup</li>
      </ul>
    </div>
  )
}
