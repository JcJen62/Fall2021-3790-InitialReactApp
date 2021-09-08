import { Card } from '@material-ui/core'
import './SenatorCard.css'

const SenatorCard = (props) => {
  const { firstName, lastName, id } = props

  return (
    <Card key={id} className='card'>
      {firstName} {lastName}
    </Card>
  )
}

export default SenatorCard
