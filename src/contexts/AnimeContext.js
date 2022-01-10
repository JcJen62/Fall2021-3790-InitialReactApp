import React, {createContext, useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'

export const AnimeContext = createContext({
  id: null,
  favorites: []
});

export const AnimeContextProvider = (props) => {
  const history = useHistory();
  const [id, setId] = useState();
  const [isDev, setDev]= useState(false);
  const handleId = (mal_id, type) => {
    setId(mal_id)
    if(type === 'anime'){
      history.push('/AnimeDetails')
    }else{
      history.push('/MangaDetails')
    }
  }
  const handleDev = (_isDev) => {
    setDev(_isDev)
    history.push('/')
  }
  const [favorites, setFavorites] = React.useState([])

  const updateFavorites = (member) => {
    console.log(`${member} was clicked to add to favorites`)
    if (!favorites.includes(member.id)) {
      // not currently a favorite, so add it
      setFavorites((prevState) => [...prevState, member.id])
    } else {
      setFavorites(() => {
        // duplicate so filter and return new array
        return favorites.filter((item) => item !== member.id)
      })
    }
  }
  

  return (
    <AnimeContext.Provider value={{
      id: id,
      isDev: isDev,
      updateFavorites,
      handleId: handleId,
      handleDev: handleDev
    }}>
      {props.children}
    </AnimeContext.Provider>
  )

}
export const useAnimeContext = () => useContext(AnimeContext)