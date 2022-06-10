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
    onClick: function(event, element){
      const clickedX = event.x;
      const clickedY = event.y;
      const pointLabelArray = this.boxes[3]._pointLabelItems; // locating pointLabelItems to get their locations
      pointLabelArray.map((pointLabel, index) => {
        // if clicked within the range of a point label, then changed text color to red
        if (
          clickedX <= pointLabel.right &&
          clickedX >= pointLabel.left &&
          clickedY <= pointLabel.bottom &&
          clickedY >= pointLabel.top
          ){
          var labelColors = ['#dbdbdb', '#dbdbdb', '#dbdbdb', '#dbdbdb', '#dbdbdb', '#dbdbdb'];
          labelColors[index] = 'red';
          this.options.scales.r.pointLabels.color = labelColors;
          this.update();
        }

      })
    },
    scales: {
      r: {
        max: 5,
        min: 0,
        pointLabels: {
          color: ['red', '#dbdbdb', '#dbdbdb', '#dbdbdb', '#dbdbdb', '#dbdbdb'], // initial color settings
          font: {
            size: 15
          }
        },
        ticks: {
          stepSize: 1,
          backdropColor: '#F4F4F4'
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  };

  return <Radar data={data}
    options={options}
  />;
}
