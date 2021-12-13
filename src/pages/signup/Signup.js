import styles from './Signup.module.css';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, name);
  }
  
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>display name:</span>
        <input 
          type="text" 
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      {!isPending && <button className="btn">Signup</button>}
      {isPending && <button className='btn' disabled>loading</button>}
      { error && <p>{ error }</p>}
    </form>
  )
}
