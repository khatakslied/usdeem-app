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
  const targetSkillGroupArray = targetTrait.map(key_trait => key_trait.skill_groups).flat()
  console.log(targetSkillGroupArray)
  // get the example skill_groups
  const exampleSkillGroups = targetTrait[0].skill_groups

  // calculate average score for each skill_group
  const averageScoreArray = exampleSkillGroups.map(skill_group => {
    let sum = 0
    let report_num = props.latest_reports.length
    for (let i = 0; i < targetSkillGroupArray.length; i++){
      if (skill_group.category === targetSkillGroupArray[i].category){
        console.log(`Score: ${targetSkillGroupArray[i].score}`)
        sum += targetSkillGroupArray[i].score
      }
    }
    console.log(`Sum: ${sum}`)
    return (sum / report_num).toFixed(1)
  })

  // get skills for each skill_group
  const skillsArray = exampleSkillGroups.map(skill_group => {
    let skills = []
    let num = targetSkillGroupArray.length
    for (let i = 0; i < num; i++) {
      if (skill_group.category === targetSkillGroupArray[i].category) {
        skills.push(skill_group.skills)
      }
    }
    return [...new Set(skills.flat())] // unique skills
  })

  // create skill_group_rating components
  const skillGroupRatings = averageScoreArray.map((score, index) => {
    return (
      <SkillGroupRating key={Math.random()} score={score} name={exampleSkillGroups[index].category} skills={skillsArray[index]}/>
    )
  })

  return(
    <div className="keytrait-score-container">
      <h4>--KeyTraitScore component--</h4>
      {skillGroupRatings}
    </div>
  )
};
