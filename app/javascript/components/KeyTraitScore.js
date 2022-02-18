import React from "react"
import SkillGroupRating from "./SkillGroupRating"

export default function KeyTraitScore(props) {
  // target key_trait from each report
  const keyTraitsArray = props.latest_reports.map(report => {
    return(
      report.key_traits.filter(key_trait => {
        return(
          key_trait.category === props.key_trait
        )
      })
    )
  }).flat()

  // skill_groups of target key_trait
  const skillGroupArray = keyTraitsArray.map(key_trait => key_trait.skill_groups).flat()

  // reference skill_groups
  const referenceSkillGroup = keyTraitsArray[0].skill_groups

  // calculate score for each skill_group
  const scoreArray = referenceSkillGroup.map(skill_group => {
    let num = skillGroupArray.length
    let sum = 0
    let report_num = props.latest_reports.length
    for(let i=0;i<num;i++){
      if(skill_group.category === skillGroupArray[i].category){
        sum += skillGroupArray[i].score
      }
    }
    return (sum / report_num).toFixed(2)
  })

  // skills for each skill_group
  const skillsArray = referenceSkillGroup.map(skill_group => {
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
  const skillGroupRatings = scoreArray.map((score, index) => {
    return (
      <SkillGroupRating key={Math.random()} score={score} name={referenceSkillGroup[index].category} skills={skillsArray[index]}/>
    )
  })

  return(
    <div className="keytrait-score-container">
      <h4>--KeyTraitScore component--</h4>
      {skillGroupRatings}
    </div>
  )
};
