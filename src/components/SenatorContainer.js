import * as React from 'react'
//import { senators } from '../data/senate'
import SenatorCard from './SenatorCard'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Typography } from '@mui/material'
//import axios from 'axios'
import { useCongressContext } from '../contexts/CongressContext'

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

const SenatorContainer = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [favorites, setFavorites] = React.useState([])
  const memberData = useCongressContext()

  const addToFavorites = (senator) => {
    console.log(`${senator} was clicked to add to favorites`)
    if (!favorites.includes(senator.id)) {
      // not currently a favorite, so add it
      setFavorites((prevState) => [...prevState, senator.id])
    } else {
      setFavorites(() => {
        // duplicate so filter and return new array
        return favorites.filter((item) => item !== senator.id)
      })
    }
  }

  return (
    <>
    <Box>
      <Typography variant='h4'>
        Senators: {memberData.senators.length} Reps: {memberData.reps.length}
      </Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {memberData.senators.map((senator) => {
        return (
          <SenatorCard
            key={senator.id}
            addToFavoritesFunction={addToFavorites}
            modalFunction={handleOpen}
            senator={{ ...senator }}
          />
        )
      })}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">Senator Information</Typography>
        </Box>
      </Modal>
    </Box>
    </>
  )
}

export default SenatorContainer
