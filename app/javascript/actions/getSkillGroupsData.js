import React from "react"

export default function getSkillGroupsData(latest_reports, target_key_trait) {

  // get all instances from reports of target key trait
  const targetKeyTraitsArray = latest_reports.map(report => {
    const allKeyTraits = report.key_traits // all key trait instances in a report
    const targetKeyTrait = allKeyTraits.filter(keyTrait => keyTrait.category === target_key_trait) // an array of one hash
    return targetKeyTrait[0]
  })

  // get example skill group
  const exampleSkillGroups = targetKeyTraitsArray[0].skill_groups

  // get skill_groups of target key trait
  const targetSkillGroups = targetKeyTraitsArray.map(key_trait => key_trait.skill_groups).flat()

  console.log(targetSkillGroups)

  // combine score and skills to improve
  const skillGroupsDataArray = exampleSkillGroups.map(skill_group => {
    let sum = 0
    let skillsToImprove = []
    let report_num = latest_reports.length
    targetSkillGroups.forEach(targetSkillGroup => {
      if (skill_group.category === targetSkillGroup.category) {
        sum += targetSkillGroup.score
        targetSkillGroup.skills.forEach(skill => {
          if (skill.improve == true) {
            skillsToImprove.push(skill.name)
          }
        })
      }
    })

    let skillGroupData = {}
    let scoreAndSkills = {}
    scoreAndSkills['score'] = (sum / report_num).toFixed(1)
    scoreAndSkills['to_improve'] = [...new Set(skillsToImprove)]
    skillGroupData[skill_group.category] = scoreAndSkills

    return skillGroupData
  })

  return skillGroupsDataArray
  // [{'skill_group_one': {
  //                   score: num,
  //                   to_improve: [skill, skill, skill]
  //                   }
  //    },
  //   {'skill_group_two': {
  //                   score: num,
  //                   to_improve: [skill, skill, skill]
  //                   }
  //    },
  //   {'skill_group_three': {
                      // score: num,
                      // to_improve: [skill, skill, skill]
  //                   }
  //   }]
}
