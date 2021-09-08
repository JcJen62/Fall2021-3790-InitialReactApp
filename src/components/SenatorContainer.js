import { Box, Grid } from '@material-ui/core'
import SenatorCard from './SenatorCard'
import { senators } from '../data/senate'


const SenatorContainer = () => {
return (
<Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor: '#999999',
        }}
      >
        <Grid container item lg={9} spacing={3} xs={12}>
          return
          
            {senators.map((senator) => {
              return <Grid item md={4} sm={6} xs={12}>
                <SenatorCard
                  firstName={senator.first_name}
                  lastName={senator.last_name}
                  id={senator.govtrack_id}
                />
                </Grid>
            })}
          
        </Grid>
      </Box>
)
}

export default SenatorContainer