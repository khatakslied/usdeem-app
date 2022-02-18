import React from "react"
import SkillGroupRating from "./SkillGroupRating"

export default function KeyTraitScore(props) {
  // const first_report = props.latest_reports[0]
  // const key_traits = first_report.key_traits.map(key_trait => {
  //   return(
  //     <p key={key_trait.category}>{key_trait.category}</p>
  //   )
  // }
  // )

  // const first_key_trait = first_report.key_traits[0]
  // const skill_groups = first_key_trait.skill_groups.map(skill_group => {
  //   return (
  //     <p key={skill_group.category}>{skill_group.category}</p>
  //   )
  // }
  // )

  // const first_skill_group = first_key_trait.skill_groups[0]

  // const skills = first_skill_group.skills.map(skill => {
  //   return(
  //     <p key={skill.name}>{skill.name}</p>
  //   )
  // })

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

  // reference report
  const referenceSkillGroup = keyTraitsArray[0].skill_groups

  // calculate each score for each skill_group
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

  //skills
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

  console.log(skillsArray)
  // create each skill_group_rating component
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
