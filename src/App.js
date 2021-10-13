import './App.css'
import SenatorContainer from './components/SenatorContainer'
import { CongressContextProvider } from './contexts/CongressContext'
import ButtonAppBar from './components/nav/ButtonAppBar'

const App = () => {
  return (
    <div className='App'>
      <CongressContextProvider>
        <ButtonAppBar />
        <SenatorContainer />
      </CongressContextProvider>
    </div>
  )
}

export default App
