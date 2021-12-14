import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'


export const useSignup = () => {
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState('');
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
      //signup user
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res.user);

      if (!res) {
        throw new Error('could not complete signup')
      }

      // add name to user
      await res.user.updateProfile({ displayName })

      //dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      setIsPending(false)
      setError(null)
      
    }
    catch (err){
      console.log(err.message);
      setError(err.message)
      setIsPending(false)
    }
  }

  return { error, isPending, signup}
}