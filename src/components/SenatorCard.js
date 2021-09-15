import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
//import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'


const SenatorCard = (senator) => {
  /* const { firstName, lastName, id } = props */

  return (
    <Card key={senator.id} className='card' sx={{
      width: 168,
      height: 120,
      p: 0,
      m: 1,
      border: 1,
      borderColor: '#f00',
      '&:hover': {
        opacity: [0.9, 0.8, 0.7],
      },
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="success.dark" gutterBottom>{senator.first_name} {senator.last_name}</Typography>
        <Typography sx={{ fontSize: 11 }}>
          {senator.leadership_role}
        </Typography>
      </CardContent>
    <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default SenatorCard
