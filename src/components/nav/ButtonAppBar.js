import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useCongressContext } from '../../contexts/CongressContext'
//import Modal from '@mui/material/Modal'
//import LoginForm from '../login/LoginForm'
import { NavLink } from 'react-router-dom'


const ButtonAppBar = () => {
  const memberData = useCongressContext()
  // const [open, setOpen] = React.useState(false)
  // const handleOpen = () => setOpen(true)
  //const handleClose = () => setOpen(false)

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Senators: {memberData.senators.length} Reps:{' '}
              {memberData.reps.length}
            </Typography>
            <Button color='inherit'>
              <NavLink to="/login">Login</NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
{/*       <Modal open={open}>
              <LoginForm closeHandler={handleClose}/>
      </Modal> */}
    </>
  )
}

export default ButtonAppBar
