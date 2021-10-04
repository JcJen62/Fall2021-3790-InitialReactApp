import './App.css'
import SenatorContainer from './components/SenatorContainer'
import { CongressContextProvider } from './contexts/CongressContext'

const App = () => {
  return (
    <div className="App">
      <CongressContextProvider>
        <SenatorContainer />
      </CongressContextProvider>
    </div>
  )
}

export default App
