import * as React from 'react'
import SenatorCard from '../components/SenatorCard'
import Box from '@mui/material/Box'
import { useCongressContext } from '../contexts/CongressContext'

const Favorites = () => {
  const [matchedFavorites, setMatchedFavorites] = React.useState([])
  const { allMembers, favorites } = useCongressContext()

  React.useEffect(() => {
    //console.log(favorites)
    setMatchedFavorites((prevState) => {
      console.log(prevState)
      const matches = allMembers.filter((member) => favorites.includes(member.id))
      console.log(matches)
      return [...prevState, matches]
    })
  }, [favorites, allMembers])
  

  console.log(matchedFavorites)

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {matchedFavorites.map((senator) => {
        return (
          <SenatorCard
            key={senator.id}
            senator={{ ...senator }}
          />
        )
      })}
    </Box>
  )
}

export default Favorites
