import { senators } from '../data/senate'
import SenatorCard from './SenatorCard'
import Box from '@mui/material/Box'

const SenatorContainer = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {senators.map((senator) => {
        return (
          <SenatorCard {...senator} />
        )
      })}
    </Box>
  )
}

export default SenatorContainer
