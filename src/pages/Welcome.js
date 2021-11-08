import { useIdentityAuthContext } from '../contexts/IdentityAuthContext'

const Welcome = () => {
  const { user } = useIdentityAuthContext()

  console.log(user)

  return (
    !user ? <h1>Please check your email to confirm your account.</h1> :
      <h1>Welcome {user?.email}!</h1>
  )
}

export default Welcome