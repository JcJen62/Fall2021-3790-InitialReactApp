import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useCongressContext } from '../../contexts/CongressContext'
import { NavLink, useHistory } from 'react-router-dom'
import {
  ListItem,
  List,
  Drawer,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import GroupIcon from '@mui/icons-material/Group'
import HomeIcon from '@mui/icons-material/Home'

const ButtonAppBar = () => {
  const memberData = useCongressContext()
  const history = useHistory()
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const handleNavChoice = (choice, shouldToggle) => {
    history.push(`/${choice}`)
    if(shouldToggle) toggleDrawer()
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Senators: {memberData.senators.length} Reps:{' '}
              {memberData.reps.length}
            </Typography>
            <Button color="inherit">
              <NavLink to="/signup">Sign Up</NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to="/login">Login</NavLink>
            </Button>
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
