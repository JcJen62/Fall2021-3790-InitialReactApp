import MangaCard from "../components/MangaCard";
import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const MangaContainer = () => {
  const [setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const [manga, setManga] = useState([]);

  useEffect(() => {
    const fetchManga = async () => {
      const topMangaURL = `/.netlify/functions/manga`
      try {
        const mangaRes = await axios.get(topMangaURL)
        console.log(mangaRes)
        const manga = mangaRes.data.top

        setManga(manga)
      } catch (err) {
        console.log(err)
      } finally {
        console.log('do something')
      }
    }

    fetchManga()
  }, [])

  return (
    <div>
      <Typography sx={{color: 'white', marginBottom: '1rem'}} variant="h4">The Top 50 Manga</Typography>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {manga.map((manga) => {
          return (
            <MangaCard
              key={manga.mal_id}
              manga={manga}
              handleOpen={handleOpen}
            ></MangaCard>
          );
        })}
      </Grid>
    </div>
  );
};

export default MangaContainer;
