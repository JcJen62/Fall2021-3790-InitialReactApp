import { senators } from '../data/senate'
import SenatorCard from './SenatorCard'
import { Box } from '@material-ui/core'

const SenatorContainer = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {senators.map((senator) => {
        return (
          <SenatorCard
            firstName={senator.first_name}
            lastName={senator.last_name}
            id={senator.google_entity_id}
          />
        )
      })}
    </Box>
  )
}

export default SenatorContainer
