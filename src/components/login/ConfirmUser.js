import React from 'react'
import { useIdentityAuthContext } from '../../contexts/IdentityAuthContext'


const ConfirmUser = () => {

  const { user } = useIdentityAuthContext()


  return user ? <h1>Welcome {user.email}</h1> : <h1>Appears you are not authenticated</h1> 
}

export default ConfirmUser
