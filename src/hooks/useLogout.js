import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsPending(true)

    //sign user out
    try {
      await projectAuth.signOut() //log out of firebase

      //dispatch logout action
      dispatch({ type: 'LOGOUT'}) //log out of local state

      setIsPending(false)
      setError(null)

    } catch(err){
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }

  }

  return { logout, error, isPending }

}