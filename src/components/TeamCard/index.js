// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, imageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card">
        <img src={imageUrl} className="team-logo" alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
