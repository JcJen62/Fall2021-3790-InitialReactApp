import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { Box, Fade, Typography } from '@mui/material'

const Welcome = () => {
  const identity = useIdentityContext()

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
    {!identity.provisionalUser && !identity.user && (
      <h1>Welcome to my Congress page!  Not much to see here unless you signup and login :-)</h1>
    )}

    {identity.provisionalUser && (
      <h1>Thanks for signing up!  Check your email to confirm.</h1>
    )}

    {identity.user && (
        <>
          <h1>Welcome to my site {identity.user.user_metadata?.full_name}!</h1>
          <Fade in appear timeout={1900}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              This box shall fade in whenever this component/route is shown.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              It should also disappear when choosing a different route.
            </Typography>
          </Box>
          </Fade>
          </>
    )}
    </>
  )
}

export default Welcome