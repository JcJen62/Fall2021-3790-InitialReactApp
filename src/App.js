import './App.css'
import SenatorContainer from './pages/SenatorContainer'
import RepsContainer from './pages/RepsContainer'
import { CongressContextProvider } from './contexts/CongressContext'
import ButtonAppBar from './components/nav/ButtonAppBar'
import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome'
import MemberDetail from './pages/MemberDetail'
import LoginForm from './components/login/LoginForm'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className='App'>
      <CongressContextProvider>
        <ButtonAppBar />
        <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome' />
        </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/senators'>
          <SenatorContainer />
        </Route>
        <Route path='/reps'>
          <RepsContainer />
        </Route>
        <Route path='/member/:memberId' exact>
          <MemberDetail />
        </Route>
        <Route path='/login'>
          <LoginForm />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </CongressContextProvider>
    </div>
  )
}

export default App
