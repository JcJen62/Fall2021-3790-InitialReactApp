import React, { useState } from 'react'
import { useIdentityAuthContext } from '../../contexts/IdentityAuthContext'
import { useLocation, useHistory } from 'react-router-dom'
import { Box, Button } from '@mui/material'

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
}

const ConfirmUser = () => {
  const [token, setToken] = useState(null)
  const { confirm } = useIdentityAuthContext()
  const location = useLocation()
  const history = useHistory()

  //console.log(location.hash.includes('#confirmation_token'))

  React.useEffect(() => {
    setToken(location.hash.replace('#confirmation_token=', ''))
  }, [token, location.hash])

  const handleSubmit = () => {
      confirm(token)
      history.push('/login')
  }

  return token ? (
    <Box sx={style}>
      <Button
        color='primary'
        fullWidth
        size='large'
        variant='contained'
        type='submit'
        onClick={handleSubmit}
      >
        Confirm Signup
      </Button>
    </Box>
  ) : (
      <h1>Look in your email for a link with your Confirmation Token</h1>
  )
}

export default ConfirmUser
