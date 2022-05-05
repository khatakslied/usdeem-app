import React from "react"
import SkillGroupRating from "./SkillGroupRating"
import getSkillGroupsData from "../actions/getSkillGroupsData"
import getAverageScore from "../actions/getAverageScore"


export default function KeyTraitScore(props) {

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

  const averageScore = getAverageScore(props.latest_reports, props.key_trait[0])
  console.log(averageScore)

  return(
    <div className="keytrait-score-container">
      {skillGroupsRatings}
    </div>
  )
};
