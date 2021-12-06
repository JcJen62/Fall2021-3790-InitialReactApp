import * as React from 'react'
//import { senators } from '../data/senate'
import SenatorCard from '../components/SenatorCard'
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

const RepsContainer = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  //const [favorites, setFavorites] = React.useState([])
  const { reps } = useCongressContext()

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {reps.map((rep) => {
        return (
          <SenatorCard
            key={rep.id}
            modalFunction={handleOpen}
            senator={{ ...rep }}
          />
        )
      })}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">Rep Information</Typography>
        </Box>
      </Modal>
    </Box>
  )
}

export default RepsContainer
