import * as React from 'react'
import axios from 'axios'

const CongressContext = React.createContext({
  senators: [],
  reps: [],
})

export const CongressContextProvider = (props) => {
  const [senators, setSenators] = React.useState([])
  const [reps, setReps] = React.useState([])

  React.useEffect(() => {
    const fetchSenators = async (side) => {
      try {
        const response = await axios.get('/senate')
        const members = await response.data.results[0].members
        console.log(response)
        setSenators(members)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSenators()
  }, [])

  return (
    <CongressContext.Provider
      value={{
        senators,
        reps,
      }}
    >
      {props.children}
    </CongressContext.Provider>
  )
}

export const useCongressContext = () => React.useContext(CongressContext)
