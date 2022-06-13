import React from "react"
import RatingStars from './RatingStars'

export default function SkillGroupRating(props) {
  const skillsElements = props.skillsToImprove.map(skill => {
    return(
      <div className="rating-skills-item" key={Math.random()}>
        <p>{skill}</p>
      </div>
    )
  })

  return (
    <div className="rating-skill-group-container">
      <div className="rating-title-container">
        <h4>{props.name}</h4>
        <p>{props.score}</p>
        <RatingStars />
      </div>
      <p>Aspects to improve:</p>
      <div className="rating-skills-container">
        {props.skillsToImprove.count == 0 ? "Nothing is suggested!" : skillsElements}
      </div>
    </div>
  )
}
