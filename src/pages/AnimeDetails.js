import { Typography, Box, Fade } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useAnimeContext } from "../contexts/AnimeContext";

const styles = {
  textAlign: 'center',
  color: 'white'
}


const AnimeDetails = (props) => {
  const [AnimeDetails, setAnimeDetails] = useState();
  const context = useAnimeContext()
  useEffect(() => {
    async function getAnimeDetails(id) {
      const { data } = await axios.get(`https://api.jikan.moe/v3/anime/${id}`)
      console.log(data)
      setAnimeDetails(data)
    }
    getAnimeDetails(context.id)
  }, [setAnimeDetails, AnimeDetails, context.id])

  if (!AnimeDetails) {
    return <div>Loading...</div>
  }

  return (
    <Fade in timeout={3000} easing={`ease-in-out`}>
      <Box>
        <Typography sx={styles} variant="h6">{AnimeDetails?.title_english}</Typography>
        <Typography sx={{ margin: '2rem', color: 'white' }} variant="p">Score: {AnimeDetails?.score} Episodes: {AnimeDetails?.episodes}</Typography>
        <div className="details">
          <img className="detailsImg" src={AnimeDetails.image_url} alt="Anime Poster" />
          <Typography sx={{ margin: '2rem', textAlign: 'left', color: 'white' }} variant="p">{AnimeDetails?.synopsis}</Typography>
        </div>
      </Box>
    </Fade>
  )
}

export default AnimeDetails