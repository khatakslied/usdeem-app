import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function SkillGroupRating() {
  return (
    <div>
      <div className="rating-title-container">
        <h3>Skill_group</h3>
        <p>Scoring</p>
      </div>
      <p>Aspects to improve:</p>
      <div className="rating-skills-container">
        <p className="rating-skills-item">Skill</p>
        <p className="rating-skills-item">Skill</p>
        <p className="rating-skills-item">Skill</p>
      </div>
    </div>
  )
}
