import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Login from '../pages/login/Login';
import { useLogout } from '../hooks/useLogout';


export default function Navbar() {
  const { logout} = useLogout();

  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.title}>myWallet</li>
        <li><Link to="/login" />Login
        </li>
        <li><Link to="/signup" />Signup</li>
        <li>
          <button className='btn' onClick={ logout }>Logout</button>
        </li>
      </ul>
    </div>
  )
}
