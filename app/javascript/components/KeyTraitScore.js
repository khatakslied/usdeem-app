import React from "react"
import SkillGroupRating from "./SkillGroupRating"


export default function KeyTraitScore(props) {

  // target key_trait from each report
  const keyTraitsArray = props.latest_reports.map(report => {
    return report.key_traits
  }).flat()

  const targetTrait = keyTraitsArray.filter(key_trait => {
    return key_trait.category === props.key_trait[0]
  })

  // get skill_groups of target key_trait
  const skillGroupArray = targetTrait.map(key_trait => key_trait.skill_groups).flat()

  // target skill_groups
  const targetSkillGroups = targetTrait[0].skill_groups

  // calculate average score for each skill_group
  const averageScoreArray = targetSkillGroups.map(skill_group => {
    let sum = 0
    let report_num = props.latest_reports.length
    for (let i = 0; i < targetSkillGroups.length; i++){
      if (skill_group.category === targetSkillGroups[i].category){
        sum += targetSkillGroups[i].score
      }
    }
    return (sum / report_num).toFixed(1)
  })

  // get skills for each skill_group
  const skillsArray = targetSkillGroups.map(skill_group => {
    let skills = []
    let num = skillGroupArray.length
    for (let i = 0; i < num; i++) {
      if (skill_group.category === skillGroupArray[i].category) {
        skills.push(skill_group.skills)
      }
    }
    return [...new Set(skills.flat())] // unique skills
  })

  // create skill_group_rating components
  const skillGroupRatings = averageScoreArray.map((score, index) => {
    return (
      <SkillGroupRating key={Math.random()} score={score} name={targetSkillGroups[index].category} skills={skillsArray[index]}/>
    )
  })

  return(
    <div className="keytrait-score-container">
      <h4>--KeyTraitScore component--</h4>
      {skillGroupRatings}
    </div>
  )
};
