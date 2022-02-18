import React from "react";
import ChartRadar from "./ChartRadar";

const Dashboard = props => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        <span>Left</span>
        <ChartRadar />
      </div>

      <div className="dashboard-column">Right</div>
    </div>
  )
};

export default Dashboard;
