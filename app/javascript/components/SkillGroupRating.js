import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function SkillGroupRating(props) {
  const skillsElements = props.skills.map(skill => {
    return(
      <div className="rating-skills-item" key={Math.random()}>
        <p>{skill.name}</p>
      </div>
    )
  })
  return (
    <div className="rating-skill-group-container">
      <div className="rating-title-container">
        <h3>{props.name}</h3>
        <p>{props.score}</p>
      </div>
      <p>Aspects to improve:</p>
      <div className="rating-skills-container">
        {skillsElements}
      </div>
    </div>
  )
}
