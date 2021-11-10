import React from 'react'
import { useIdentityAuthContext } from '../../contexts/IdentityAuthContext'
import { useLocation, Redirect } from 'react-router-dom'

const ConfirmUser = () => {
  //const [confirming, setConfirming] = useState(true)
  const { confirm, user } = useIdentityAuthContext()
  const location = useLocation()
  //const history = useHistory()
  console.log(location.hash.includes('confirmation_token'))
  if (location.hash.includes('confirmation_token')) {
    const startIndex = location.hash.indexOf('=')
    const token = location.hash.slice(startIndex + 1)
    try {
      confirm(token)
    } catch (err) {
      console.error(err)
    }
  }

  return user ? <Redirect to='/login' /> : <Redirect to='/signup'/> 
}

export default ConfirmUser
