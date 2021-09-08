import { senators } from '../data/senate'
import SenatorCard from './SenatorCard'

const SenatorContainer = () => {
  return (
    <div>
      {senators.map((senator) => {
        return (
          <SenatorCard
            firstName={senator.first_name}
            lastName={senator.last_name}
            id={senator.google_entity_id}
          />
        )
      })}
    </div>
  )
}

export default SenatorContainer
