import * as React from 'react'
import SenatorCard from '../components/SenatorCard'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Typography } from '@mui/material'
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
  const { senators } = useCongressContext()

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {senators.map((senator) => {
        return (
          <SenatorCard
            key={senator.id}
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
