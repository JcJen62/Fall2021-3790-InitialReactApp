import { Typography, Box, Fade } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useAnimeContext } from "../contexts/AnimeContext";

const styles = {
  textAlign: 'center',
  color: 'white'
}


const MangaDetails = (props) => {
  const [MangaDetails, setMangaDetails] = useState();
  const context = useAnimeContext()
  useEffect(() => {
    async function getMangaDetails(id) {
      const { data } = await axios.get(`https://api.jikan.moe/v3/manga/${id}`)
      setMangaDetails(data)
    }
    getMangaDetails(context.id)
  }, [setMangaDetails, MangaDetails, context.id])

  if (!MangaDetails) {
    return <div>Loading...</div>
  }

  return (
    <Fade in timeout={3000} easing={`ease-in-out`}>
      <Box>
        <Typography sx={styles} variant="h6">{MangaDetails?.title}</Typography>
        <Typography sx={{ margin: '2rem', color: 'white' }} variant="p">Volumes: {MangaDetails?.volumes} Chapters: {MangaDetails?.chapters}</Typography>
        <div className="details">
          <img className="detailsImg" src={MangaDetails.image_url} alt="Anime Poster" />
          <Typography sx={{ margin: '2rem', textAlign: 'left', color: 'white' }} variant="p">{MangaDetails?.synopsis}</Typography>
        </div>
      </Box>
    </Fade>
  )
}

export default MangaDetails