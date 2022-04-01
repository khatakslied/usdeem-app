import React from "react"
import SkillGroupRating from "./SkillGroupRating"
import getSkillGroupsData from "../actions/getSkillGroupsData"


export default function KeyTraitScore(props) {
  // target key_trait from each report
  const keyTraitsArray = props.latest_reports.map(report => {
    return report.key_traits
  }).flat()

  const targetTrait = keyTraitsArray.filter(key_trait => {
    return key_trait.category === props.key_trait[0] // set to probelm sovling for now
  })

  // get skill_groups of target key_trait
  const targetSkillGroupArray = targetTrait.map(key_trait => key_trait.skill_groups).flat()
  // get the example skill_groups
  const exampleSkillGroups = targetTrait[0].skill_groups

  // calculate average score for each skill_group
  const averageScoreArray = exampleSkillGroups.map(skill_group => {
    let sum = 0
    let report_num = props.latest_reports.length
    for (let i = 0; i < targetSkillGroupArray.length; i++){
      if (skill_group.category === targetSkillGroupArray[i].category){
        // console.log(`Score: ${targetSkillGroupArray[i].score}`)
        sum += targetSkillGroupArray[i].score
      }
    }
    return (sum / report_num).toFixed(1)
  })

  // get skills for each skill_group
  const skillsArray = exampleSkillGroups.map(skill_group => {
    let skills = []
    let num = targetSkillGroupArray.length
    for (let i = 0; i < num; i++) {
      if (skill_group.category === targetSkillGroupArray[i].category) {
        skills.push(targetSkillGroupArray[i].skills) // error --> should be getting skills from targetSkillGroupArray
      }
    }
    return [...new Set(skills.flat())] // unique skills
  })


  // create skill_group_rating components
  // const skillGroupRatings = averageScoreArray.map((score, index) => {
  //   return (
  //     <SkillGroupRating key={Math.random()} score={score} name={exampleSkillGroups[index].category} skills={skillsArray[index]}/>
  //     )
  //   })

  const skillGroupsData = getSkillGroupsData(props.latest_reports, props.key_trait[0])
  console.log(`skill groups data:`)
  console.log(skillGroupsData)

  const skillGroupsRatings = skillGroupsData.map(data => {
    for (var skill_group in data) {
      if (data.hasOwnProperty(skill_group)) {
        return(
          <SkillGroupRating key={Math.random()} name={skill_group} score={data[skill_group]['score']} skillsToImprove={data[skill_group]['to_improve']} />
        )
      }
    }
  })

  return(
    <div className="keytrait-score-container">
      {/* {skillGroupRatings} */}
      {skillGroupsRatings}
    </div>
  )
};
