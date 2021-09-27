import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import FavoriteIcon from '@mui/icons-material/Favorite'

const SenatorCard = (props) => {
  const [favorite, setFavorite] = React.useState(false)

  const partyColor = props.senator.party === 'D' ? '#0000ff' : '#e71d36'

  const handleInfoClick = () => {
    props.modalFunction()
  }

  const handleFavoriteClick = () => {
    //console.log(props.senator.id)
    setFavorite(!favorite)
    props.addToFavoritesFunction(props.senator)
  }

  return (
    <Card
      className="card"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 168,
        height: 120,
        m: 1,
        border: 5,
        borderColor: partyColor
/*         '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        }, */
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="success.dark" gutterBottom>
          {props.senator.first_name} {props.senator.last_name}
        </Typography>
        <Typography variant="h6" component="div"></Typography>
      </CardContent>
      <CardActions>
        <IconButton sx={{ p: 0 }} onClick={handleInfoClick}>
          <PermIdentityIcon />
        </IconButton>
        <IconButton sx={{ p: 0, m: 0 }} onClick={handleFavoriteClick}>
          <FavoriteIcon sx={{ color: favorite ? '#F00' : '#000'}}/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default SenatorCard
