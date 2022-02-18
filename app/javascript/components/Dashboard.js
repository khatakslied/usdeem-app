import React from "react"
import AllTraitsLineGraph from "./AllTraitsLineGraph";

const Dashboard = props => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        Left
        <AllTraitsLineGraph />
      </div>
      <div className="dashboard-column">Right</div>
    </div>
  )
};

export default Dashboard;
