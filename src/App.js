import './App.css'
import React, { Suspense } from 'react'
//import SenatorContainer from './pages/SenatorContainer'
//import RepsContainer from './pages/RepsContainer'
import { CongressContextProvider } from './contexts/CongressContext'
import ButtonAppBar from './components/nav/ButtonAppBar'
import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome'
import MemberDetail from './pages/MemberDetail'
import LoginForm from './components/login/LoginForm'
import SignupForm from './components/login/SignupForm'
import NotFound from './pages/NotFound'
import { Box, CircularProgress } from '@mui/material'
import { IdentityAuthContextProvider } from './contexts/IdentityAuthContext'

const SenatorContainer = React.lazy(() => import('./pages/SenatorContainer'))
const RepsContainer = React.lazy(() => import('./pages/RepsContainer'))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

const App = () => {
  return (
    <div className="App">
      <IdentityAuthContextProvider >
      <CongressContextProvider>
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
              <Redirect to="/welcome" />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/senators">
              <SenatorContainer />
            </Route>
            <Route path="/reps">
              <RepsContainer />
            </Route>
            <Route path="/member/:memberId" exact>
              <MemberDetail />
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
        </CongressContextProvider>
      </IdentityAuthContextProvider>
    </div>
  )
}

export default App
