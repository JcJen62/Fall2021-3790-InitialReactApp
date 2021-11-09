import { useIdentityAuthContext } from '../../contexts/IdentityAuthContext'
import { useLocation, Redirect } from 'react-router-dom'

const ConfirmUser = () => {
  const { confirm } = useIdentityAuthContext()
  const location = useLocation()
  //const history = useHistory()
  console.log(location.hash.includes('confirmation_token'))
  if (location.hash.includes('confirmation_token')) {
    const startIndex = location.hash.indexOf('=')
    const token = location.hash.slice(startIndex + 1)
    try {
      confirm(token, true)
      return <Redirect to='/login'/>
   }
    catch (err) {
      console.error(err)
    }
  }
  
  return (
    <h1>Confirming...</h1> 
  )
}

export default ConfirmUser