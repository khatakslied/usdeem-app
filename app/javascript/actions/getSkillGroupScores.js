import React from "react"

export default function getSkillGroupScores(props) {
  // props --> latest_reports, target_key_trait

  // get all instances from reports of target key trait
  const targetKeyTraitsArray = props.latest_reports.map(report => {
    const allKeyTraits = report.key_traits // all key trait instances in a report
    const targetKeyTrait = allKeyTraits.filter(keyTrait => keyTrait.category === props.target_trait).flat()
    return targetKeyTrait
  })

  // get example skill group
  const exampleSkillGroups = targetKeyTraitsArray[0].skill_groups

  // get skill_groups of target key trait
  const targetSkillGroups = targetKeyTraitsArray.map(key_trait => key_trait.skill_groups)


  // combine score and skills to improve
  const skillGroupsDataArray = exampleSkillGroups.map(skill_group => {
    let sum = 0
    let skillsToImprove = []
    let report_num = props.latest_reports.length
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
    skillGroupData[skill_group.name] = scoreAndSkills

    return skillGroupData
  })

  // // calculate score for each skill group
  // const skillGroupScores = exampleSkillGroups.map(skill_group => {
  //   let sum = 0
  //   let report_num = props.latest_reports.length
  //   for (let i = 0; i < targetSkillGroups.length; i++) {
  //     if (skill_group.category === targetSkillGroups[i].category) {
  //       sum += targetSkillGroups[i].score
  //     }
  //   }
  //   return (sum / report_num).toFixed(1)
  // })

  // // get skills to be improved from each skill_group
  // const skillsArray = exampleSkillGroups.map(skill_group => {
  //   let skillsToImprove = []
  //   targetSkillGroups.forEach(targetSkillGroup => {
  //     if (skill_group.category === targetSkillGroup.category) {
  //       targetSkillGroup.skills.forEach(skill => {
  //         if (skill.improve == true){
  //           skillsToImprove.push(skill.name)
  //         }
  //       })
  //     }
  //   })
  //   return [...new Set(skillsToImprove)] // unique skills
  // })

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
