import React from "react"
import AllTraitsLineGraph from "./AllTraitsLineGraph";
import KeyTraitScore from "./KeyTraitScore"
import ChartRadar from "./ChartRadar";
import BarLineChart from "./BarLineChart";

const Dashboard = props => {

  const [keyTrait, setKeyTrait] = React.useState(['Problem Solving'])
  const [reportData, setReportData] = React.useState([])

  React.useEffect(() => {
    fetch("/reports.json")
      .then(response => response.json())
      .then(data => setReportData(data))
      .catch(err => console.log(err))
  }, [])

  return(
    reportData.length === 0 ?
    <div><h1>Generating report...</h1></div> :
    <div>
      <div className="dashboard-container">
        <div className="dashboard-column">
            <ChartRadar latest_reports={reportData[0]} key_trait={keyTrait} setKeyTrait={setKeyTrait}/>
            <AllTraitsLineGraph last_six_months_reports={props.last_six_months_reports} />
        </div>
        <div className="dashboard-column">
          <KeyTraitScore latest_reports={reportData[0]} key_trait={keyTrait}/>
          <BarLineChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
