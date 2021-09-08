import './App.css'
import SenatorContainer from './components/SenatorContainer'
import { ThemeProvider } from '@material-ui/core'
import GlobalStyles from './components/GlobalStyles'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <SenatorContainer />
        {/* <SenatorCard/> */}
      </div>
    </ThemeProvider>
  )
}

export default App
