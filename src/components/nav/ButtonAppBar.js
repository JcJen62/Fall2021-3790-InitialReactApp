import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
//import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useCongressContext } from '../../contexts/CongressContext'
import { useHistory } from 'react-router-dom'
import {
  ListItem,
  List,
  Drawer,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Avatar,
} from '@mui/material'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import GroupIcon from '@mui/icons-material/Group'
import HomeIcon from '@mui/icons-material/Home'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LoginIcon from '@mui/icons-material/Login'

const ButtonAppBar = () => {
  const {senators, reps, favorites} = useCongressContext()
  const history = useHistory()
  const identity = useIdentityContext()
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const handleNavChoice = (choice, shouldToggle) => {
    history.push(`/${choice}`)
    if (shouldToggle) toggleDrawer()
  }

  const drawerItemList = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button onClick={() => handleNavChoice('senators', true)}>
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Senators" />
        </ListItem>
        <ListItem button onClick={() => handleNavChoice('reps', true)}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Representatives" />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="home button"
              color="inherit"
              onClick={() => handleNavChoice('welcome', false)}
            >
              <HomeIcon />
            </IconButton>
            <IconButton size="large" aria-label="favorites" color="inherit" onClick={() => handleNavChoice('favorites', false)}>Favorites {favorites?.length}</IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Senators: {senators.length} Reps:{' '}
              {reps.length}
            </Typography>
            

            {!identity.user && !identity.provisionalUser && (
              <Tooltip title="Signup">
                <IconButton
                  color="inherit"
                  onClick={() => handleNavChoice('signup', false)}
                >
                  <AccountCircleIcon />
                </IconButton>
              </Tooltip>
            )}

            {!identity.user && (
              <Tooltip title="Login">
                <IconButton
                  color="inherit"
                  onClick={() => handleNavChoice('login', false)}
                >
                  <LoginIcon />
                </IconButton>
              </Tooltip>
            )}

            {identity.user && (
              <Tooltip title="Logout">
              <IconButton color="inherit" onClick={identity.logout}>
                <Avatar sx={{ width: 24, height: 24 }}>{identity.user?.user_metadata?.full_name.slice(0, 1)}</Avatar>
              </IconButton>
              </Tooltip>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        {drawerItemList()}
      </Drawer>
    </>
  )
}

export default ButtonAppBar
