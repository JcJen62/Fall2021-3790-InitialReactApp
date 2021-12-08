import * as React from 'react'
import SenatorCard from '../components/SenatorCard'
import Box from '@mui/material/Box'
import { useCongressContext } from '../contexts/CongressContext'

const Favorites = () => {
  const [matchedFavorites, setMatchedFavorites] = React.useState([])
  const { allMembers, favorites } = useCongressContext()

  React.useEffect(() => {
    setMatchedFavorites((prevState) => {
      const matches = allMembers.filter((member) => favorites.includes(member.id))
      return [...prevState, ...matches]
    })
  }, [favorites, allMembers])

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
