import { useIdentityAuthContext } from '../../contexts/IdentityAuthContext'
import { useLocation, useHistory } from 'react-router-dom'

const ConfirmUser = () => {
  const { confirm } = useIdentityAuthContext()
  const location = useLocation()
  const history = useHistory()
  const startIndex = location.hash.indexOf('=')
  const token = location.hash.slice(startIndex + 1)

  confirm(token, true)
  history.push('/login')
  return (
    <h1>Should be confirming and pushing to Login page</h1> 
  )
}

export default ConfirmUser