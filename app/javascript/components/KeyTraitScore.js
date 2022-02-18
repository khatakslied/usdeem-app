import React from "react"
import SkillGroupRating from "./SkillGroupRating"

export default function KeyTraitScore(props) {
  const first_report = props.latest_reports[0]
  const key_traits = first_report.key_traits.map(key_trait => {
    return(
      <p key={key_trait.category}>{key_trait.category}</p>
    )
  }
  )

  const first_key_trait = first_report.key_traits[0]
  const skill_groups = first_key_trait.skill_groups.map(skill_group => {
    return (
      <p key={skill_group.category}>{skill_group.category}</p>
    )
  }
  )

  const first_skill_group = first_key_trait.skill_groups[0]

  const skills = first_skill_group.skills.map(skill => {
    return(
      <p key={skill.name}>{skill.name}</p>
    )
  })

  return(
    <>
      <h2>This is KeyTraitScore component</h2>
      {key_traits}
      {skill_groups}
      {skills}
      <SkillGroupRating />
      <SkillGroupRating />
      <SkillGroupRating />
    </>
  )
};
