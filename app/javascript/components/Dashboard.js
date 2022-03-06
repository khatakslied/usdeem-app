import React from "react"
import AllTraitsLineGraph from "./AllTraitsLineGraph";
import KeyTraitScore from "./KeyTraitScore"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)

const Dashboard = props => {

  const [keyTrait, setKeyTrait] = React.useState(['Problem Solving'])
  const [reportData, setReportData] = React.useState([])
  React.useEffect(() => {
    fetch("/reports.json")
      .then(response => response.json())
      .then(data => setReportData(data))
      .catch(err => console.log(err))
  }, [])

  console.log(reportData)

  return (
    reportData.length === 0 ?
      <div><h1>Generating report...</h1></div> :
      <div>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        {/* <ProfileMessage user={props.user} /> */}
        <div className="dashboard-container">
          <div className="dashboard-column">
            <p>Left</p>
          </div>
          <div className="dashboard-column">
            <p>Right</p>
            <KeyTraitScore latest_reports={reportData[0]} key_trait={keyTrait} />
//        <KeyTraitScore latest_reports={props.latest_reports} key_trait={keyTrait} />
          </div>
        </div>
      </div>
  )
}

export default Dashboard;
