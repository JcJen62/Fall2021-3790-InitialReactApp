import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { Box, Typography, Fade } from '@mui/material'
import { keyframes } from '@emotion/react'

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
    transformStyle: 'preserve3d'
  }

  const bounce = keyframes`
  0% {
    transform: translate3d(0,0,0);
  }
  50% {
    transform: translate3d(330px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
  `

  return (
    <>
      {!identity.provisionalUser && !identity.user && (
        <h1>
          Welcome to my Congress page! Not much to see here unless you signup
          and login :-)
        </h1>
      )}

      {identity.provisionalUser && (
        <h1>Thanks for signing up! Check your email to confirm.</h1>
      )}

      {identity.user && (
        <>
          <h1>Welcome to my site {identity.user.user_metadata?.full_name}!</h1>
          <Fade in timeout={3000} easing={`ease-in-out`}>
            <Box sx={style}>
              <Typography variant="h5">
                This box shall fade in whenever this component/route is shown.
              </Typography>
              <Typography sx={{ mt: 2 }}>
                It should also disappear when choosing a different route.
              </Typography>
              <Box
                sx={{ width: '50px', 
                height: '50px', 
                border: '2px solid red',
                animation: `${bounce} 2s linear infinite`,
              }}
              ></Box>
            </Box>
          </Fade>
        </>
      )}
    </>
  )
}

export default Welcome
