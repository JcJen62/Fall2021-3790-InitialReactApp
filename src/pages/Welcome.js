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
    transform: translate3d(30px, 30px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
  `

  return (
    <>
      {!identity.provisionalUser && !identity.user && (
        <h1>
          Welcome to my Anime page! Not much to see here unless you signup
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
                View the top 50 anime and Manga on this site according to myanimelist.net!
              </Typography>
            </Box>
          </Fade>
        </>
      )}
    </>
  )
}

export default Welcome
