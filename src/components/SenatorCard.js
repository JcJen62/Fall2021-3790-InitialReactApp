import {senators} from '../data/senate'
import { Card } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

const SenatorCard = () => {
  return senators.map((senator) => {
    return (<Card key={senator.id} >
      <h1 sx={{
      mt: '10px',
      width: 200,
      color: '#0000FF'
    }}
    >
      {senator.first_name + ' ' + senator.last_name}</h1>
        </Card>)
  })
}

export default SenatorCard