import './App.css'
import React, { Suspense } from 'react'
import { AnimeContextProvider } from './contexts/AnimeContext'
import ButtonAppBar from './components/nav/ButtonAppBar'
import { Route, Switch } from 'react-router-dom'
import Welcome from './pages/Welcome'
import AnimeDetails from './pages/AnimeDetails'
import MangaDetails from './pages/MangaDetails'
import LoginForm from './components/login/LoginForm'
import SignupForm from './components/login/SignupForm'
import NotFound from './pages/NotFound'
import { Box, CircularProgress } from '@mui/material'
import NetlifyIdentityContext from 'react-netlify-identity-gotrue'
import './site.css'
import GlobalStyles from './components/GlobalStyles'

const AnimeContainer = React.lazy(() => import('./pages/AnimeContainer'))
const MangaContainer = React.lazy(() => import('./pages/MangaContainer'))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

const App = () => {
  GlobalStyles();
  return (
    <div className="App">
      <NetlifyIdentityContext url='https://animeapp.jeremyjensen.net/'>
        <AnimeContextProvider>
          <ButtonAppBar />
          <Suspense
            fallback={
              <Box sx={style}>
                <CircularProgress />
              </Box>
            }
          >
            <Switch>
              <Route path="/" exact>
                <Welcome />
              </Route>
              <Route path="/welcome" exact>
                <Welcome />
              </Route>
              <Route path="/TopAnime">
                <AnimeContainer />
              </Route>
              <Route path="/TopManga">
                <MangaContainer />
              </Route>
              <Route path="/AnimeDetails" exact>
                <AnimeDetails />
              </Route>
              <Route path="/MangaDetails" exact>
                <MangaDetails />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route path="/signup">
                <SignupForm />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </AnimeContextProvider>
      </NetlifyIdentityContext>
    </div>
  )
}

export default App
