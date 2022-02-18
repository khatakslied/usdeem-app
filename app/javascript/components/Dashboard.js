import React from "react"
import KeyTraitScore from "./KeyTraitScore"
import ProfileMessage from "./ProfileMessage"

export default function Dashboard(props) {
  const [keyTrait, setKeyTrait] = React.useState('Problem Solving')


  return(
    <div>
      <h1>This is dashboard component</h1>
      <ProfileMessage user={props.user}/>
      <div className="dashboard-container">
        <div className="dashboard-column">
          <p>Left</p>
        </div>
        <div className="dashboard-column">
          <p>Right</p>
          <KeyTraitScore latest_reports={props.latest_reports} key_trait={keyTrait}/>
        </div>
      </div>
    </div>
  )
}
