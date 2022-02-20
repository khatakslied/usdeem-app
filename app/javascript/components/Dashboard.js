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

  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        Left
        <AllTraitsLineGraph />
      </div>
      <div className="dashboard-column">
        Right
        <KeyTraitScore latest_reports={props.latest_reports} key_trait={keyTrait} />
      </div>
    </div>
  )
}

export default Dashboard;
