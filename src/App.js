import './App.css'
import SenatorContainer from './pages/SenatorContainer'
import RepsContainer from './pages/RepsContainer'
import { CongressContextProvider } from './contexts/CongressContext'
import ButtonAppBar from './components/nav/ButtonAppBar'
import { Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import LoginForm from './components/login/LoginForm'

const App = () => {
  return (
    <div className='App'>
      <CongressContextProvider>
        <ButtonAppBar />
        <Route path="/welcome"><Welcome/></Route>
        <Route path="/senators"><SenatorContainer /></Route>
        <Route path="/reps"><RepsContainer/></Route>
        <Route path="/products"><Products/></Route>
        <Route path="/login"><LoginForm/></Route>
      </CongressContextProvider>
    </div>
  )
}

export default App
