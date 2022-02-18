import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function SkillGroupRating(props) {
  const skillsElements = props.skills.map(skill => {
    return(
      <p className="rating-skills-item" key={Math.random()}>{skill.name}</p>
    )
  })
  console.log(props.skills)
  return (
    <div>
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
