import React from 'react';
import getAverageScore from "../actions/getAverageScore"

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


export default function ChartRadar(props) {
  const skillGroups = ["Problem Solving", "Leadership", "Work Ethic", "Teamwork", "Communication", "Time Management"]
  const skillGroupsScore = skillGroups.map(skillGroup => {
    return getAverageScore(props.latest_reports, skillGroup)
  })

  const data = {
    labels: skillGroups,
    datasets: [
      {
        label: '# of Votes',
        data: skillGroupsScore,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],

  };

  const options = {
    responsive: true,
    scales: {
      r: {
        max: 5,
        min: 0,
        ticks: {
          stepSize: 1
        }
      }
    }
  };
  return <Radar data={data}
    options={options}
  />;
}
