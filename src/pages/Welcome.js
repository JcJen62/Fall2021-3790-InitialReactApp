import { useIdentityAuthContext } from '../contexts/IdentityAuthContext'

const Welcome = () => {
  const { user } = useIdentityAuthContext()

  return !user ? (
    <>
      <h1>Welcome! </h1>
      <h2>Please signup to access this site.</h2>
    </>
  ) : (
    <h1>Welcome {user?.email}!</h1>
  )
}

export default Welcome
