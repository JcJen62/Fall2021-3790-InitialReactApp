import { useIdentityAuthContext } from '../../contexts/IdentityAuthContext'
import { useLocation } from 'react-router-dom'

const ConfirmUser = () => {
  const { user } = useIdentityAuthContext()
  const location = useLocation()
  console.log(location)

  return (
    !user ? <h1>Please check your email to confirm your account.</h1> :
      <h1>Welcome {user?.email}!</h1>
  )
}

export default ConfirmUser