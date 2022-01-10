import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { useState } from "react"
import React from 'react'
import { Typography } from "@mui/material"
import { Grid } from "@mui/material"
import { Button } from '@mui/material';
import { useAnimeContext } from "../contexts/AnimeContext";

const AnimeCard = (props) => {
    const [added, setAdded] = useState(false)
    const { anime } = props
    const context = useAnimeContext()
    const [setFavorite] = React.useState(false)
    const handleFave = (bool) => {
        setAdded(bool)
        updateFavorites(anime)
    }
    const { favorites, updateFavorites } = useAnimeContext()

    React.useEffect(() => {
        favorites.includes(anime.mal_id) ? setFavorite(true) : setFavorite(false)
    }, [anime.mal_id, favorites])

    return (<Grid className="itemFlex" item xs={4} key={anime.mal_id}>
        <img src={anime.image_url} alt="Anime Poster" />
        <div className="buttonStuff">
            <Typography sx={{ color: 'white' }} variant="h6">{anime.title}</Typography>
            <div className="itemFlex">
                <Button onClick={() => handleFave(!added) }>
                    {added ? <PlaylistAddCheckIcon sx={{
                        fontSize: 36,
                        color: "white",
                    }} /> : <PlaylistAddIcon sx={{
                        fontSize: 36,
                        color: "white",
                    }} />}</Button>
                <Button onClick={() => context.handleId(anime.mal_id, 'anime')} sx={{
                    color: "white",
                    border: "1px solid white"
                }}
                >Learn More</Button>
            </div>
        </div>
    </Grid>
    )
}

export default AnimeCard