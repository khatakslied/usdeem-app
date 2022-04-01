import React from "react"
import AllTraitsLineGraph from "./AllTraitsLineGraph";
import KeyTraitScore from "./KeyTraitScore"
import ChartRadar from "./ChartRadar";
import BarLineChart from "./BarLineChart";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)

const Dashboard = props => {

  const [keyTrait, setKeyTrait] = React.useState(['Problem Solving'])
  const [reportData, setReportData] = React.useState([])
  const [latestReport, setLatestReport] = React.useState([])
  React.useEffect(() => {
    fetch("/reports.json")
      .then(response => response.json())
      .then(data => setReportData(data))
      .catch(err => console.log(err))
  }, [])

  console.log(reportData)

  // const keyTraitsArray = reportData[0].map(report => {
  //   return report.key_traits
  // }).flat()

  // const targetTrait = keyTraitsArray.filter(key_trait => {
  //   return key_trait.category === keyTrait[0]
  // })

  // // get skill_groups of target key_trait
  // const targetSkillGroupArray = targetTrait.map(key_trait => key_trait.skill_groups).flat()

  // // get the example skill_groups
  // const exampleSkillGroups = targetTrait[0].skill_groups

  // // calculate average score for each skill_group
  // const averageScoreArray = exampleSkillGroups.map(skill_group => {
  //   let sum = 0
  //   let report_num = reportData[0].length
  //   for (let i = 0; i < targetSkillGroupArray.length; i++) {
  //     if (skill_group.category === targetSkillGroupArray[i].category) {
  //       sum += targetSkillGroupArray[i].score
  //     }
  //   }
  //   return (sum / report_num).toFixed(1)
  // })

  // // get skills (either to be improved or not) for each skill_group
  // const skillsArray = exampleSkillGroups.map(skill_group => {
  //   let skills = []
  //   let num = targetSkillGroupArray.length
  //   for (let i = 0; i < num; i++) {
  //     if (skill_group.category === targetSkillGroupArray[i].category) {
  //       skills.push(skill_group.skills)
  //     }
  //   }
  //   console.log(`skills array before flattening: ${skills}`)
  //   return [...new Set(skills.flat())] // unique skills
  // })
  // console.log(`skills array after flattening: ${skillsArray}`)

  return(
    reportData.length === 0 ?
    <div><h1>Generating report...</h1></div> :
    <div>
      <div className="dashboard-container">
        <div className="dashboard-column">
          <p>Left</p>
            <ChartRadar />
            <AllTraitsLineGraph last_six_months_reports={props.last_six_months_reports} />
        </div>
        <div className="dashboard-column">
          <p>Right</p>
          <BarLineChart />
          <KeyTraitScore latest_reports={reportData[0]} key_trait={keyTrait}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
