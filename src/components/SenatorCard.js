import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import palpatinePic from './Emperor-Palpatine.jpeg'
import LazyLoad from 'react-lazyload'

import { useHistory } from 'react-router-dom'

const SenatorCard = (props) => {
  const [favorite, setFavorite] = React.useState(false)
  const history = useHistory()
  const partyColor = props.senator.party === 'D' ? '#0000ff' : '#e71d36'
  const { senator } = props

  const handleInfoClick = () => {
    //props.modalFunction()
    history.push(`/member/${senator.id}`)
  }

  const handleFavoriteClick = () => {
    //console.log(props.senator.id)
    setFavorite(!favorite)
    props.addToFavoritesFunction(senator)
  }

  const handleImageLoadError = (e) => {
    e.target.onerror = null
    e.target.src = palpatinePic
  }

  return (
    <Card
      className="card"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        m: 1,
        border: 2,
        borderColor: partyColor
/*         '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        }, */
      }}
    >
      <LazyLoad>
        <CardMedia component='img' alt='Congress member' height='200'
      image={`https://www.govtrack.us/static/legislator-photos/${props.senator.govtrack_id}-100px.jpeg`} onError={handleImageLoadError}/>
      </LazyLoad>
      <CardContent sx={{ p: 0 }}>
        <Typography color="success.dark" gutterBottom variant='subtitle2'>
          {props.senator.first_name} {props.senator.last_name}
        </Typography>
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
