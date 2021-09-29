import './App.css'
import SenatorContainer from './components/SenatorContainer'


const App = () => {
  return (
      <div className="App">
        <SenatorContainer url={'https://api.propublica.org/congress/v1/117/senate/members.json'}/>
      </div>
  )
}

export default App
