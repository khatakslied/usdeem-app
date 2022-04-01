import React from "react"
import getSkillGroupsData from './getSkillGroupsData'

export default function getAverageScore(latest_reports, target_key_trait){
  const skillGroupsData = getSkillGroupsData(latest_reports, target_key_trait)
  let sum = 0
  skillGroupsData.forEach(skillGroupData => {
    for (var skill_group in skillGroupData) {
      if (skillGroupData.hasOwnProperty(skill_group)) {
        sum += skillGroupData[skill_group]['score']
      }
    }
  })

  return (sum / skillGroupsData.length).toFixed(1)
}
