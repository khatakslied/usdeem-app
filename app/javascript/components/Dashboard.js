import React from "react"
import KeyTraitScore from "./KeyTraitScore"
import ProfileMessage from "./ProfileMessage"
import ChartRadar from "./ChartRadar"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)


export default function Dashboard(props) {
  const [keyTrait, setKeyTrait] = React.useState('Problem Solving')
  const [reportData, setReportData] = React.useState([])
  React.useEffect(() => {
    const data = fetch("/reports.json")
      .then(response => response.json())
      .then(data => setReportData(data))
      .catch(err => console.log(err))
  }, [])

  console.log(reportData)

  return (
    <div>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      <ProfileMessage user={props.user} />
      <div className="dashboard-container">
        <div className="dashboard-column">
          <p>Left</p>
          <ChartRadar />
        </div>
        <div className="dashboard-column">
          <p>Right</p>
          {/* <KeyTraitScore latest_reports={props.latest_reports} key_trait={keyTrait} /> */}
        </div>
      </div>
    </div>
  )
}
