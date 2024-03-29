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
  // const [latestReport, setLatestReport] = React.useState([])
  React.useEffect(() => {
    fetch("/reports.json")
      .then(response => response.json())
      .then(data => setReportData(data))
      .catch(err => console.log(err))
  }, [])

  console.log(reportData)

  return(
    reportData.length === 0 ?
    <div><h1>Generating report...</h1></div> :
    <div>
      <div className="dashboard-container">
        <div className="dashboard-column">
          <p>Left</p>
            <ChartRadar latest_reports={reportData[0]} key_trait={keyTrait}/>
            <AllTraitsLineGraph last_six_months_reports={props.last_six_months_reports} />
        </div>
        <div className="dashboard-column">
          <p>Right</p>
          <BarLineChart
            last_six_months_reports={props.last_six_months_reports}
            all_reports={props.company_last_six_months_reports}
          />
          <KeyTraitScore latest_reports={reportData[0]} key_trait={keyTrait}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
