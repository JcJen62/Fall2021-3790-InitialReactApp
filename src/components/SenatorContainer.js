import * as React from 'react'
import { senators } from '../data/senate'
import SenatorCard from './SenatorCard'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Typography } from '@mui/material'

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

const initialIDs = ['23432', '23432']

const SenatorContainer = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [favorites, setFavorites] = React.useState(initialIDs)

  const addToFavorites = (senatorID) => {
    console.log(`${senatorID} added to favorites`)
    setFavorites((prevState) => {
      return [...prevState, senatorID]
    }) // need to sort out the toggling to add and remove senator ids
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {favorites.map((senatorID) => {
        return <p>{senatorID}</p>
      })}
      {senators.map((senator) => {
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
  )
}

export default SenatorContainer
