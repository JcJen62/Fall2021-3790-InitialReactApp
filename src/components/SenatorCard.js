import Card from '@mui/material/Card'
import './SenatorCard.css'

const SenatorCard = (senator) => {
  /* const { firstName, lastName, id } = props */
/* console.log(senator) */
  return (
    <Card key={senator.id} className='card' sx={{
      width: 160,
      height: 30,
      bgcolor: 'primary.light',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}>
      {senator.first_name} {senator.last_name}
    </Card>
  )
}

export default SenatorCard
