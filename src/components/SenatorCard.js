import Card from '@mui/material/Card'
import './SenatorCard.css'

const SenatorCard = (props) => {
  const { firstName, lastName, id } = props

  return (
    <Card key={id} className='card' sx={{
      width: 160,
      height: 30,
      bgcolor: 'primary.light',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}>
      {firstName} {lastName}
    </Card>
  )
}

export default SenatorCard
