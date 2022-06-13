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
  const [labelColors, setLabelColors] = React.useState(['rgba(2, 48, 71, 1)', '#dbdbdb', '#dbdbdb', '#dbdbdb', '#dbdbdb', '#dbdbdb'])

  const data = {
    labels: skillGroups,
    datasets: [
      {
        label: '# of Votes',
        data: skillGroupsScore,
        backgroundColor: 'rgba(2, 48, 71, 0.5)',
        borderColor: 'rgba(2, 48, 71, 1)',
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
      console.log(this.boxes[3]._pointLabels)
      pointLabelArray.map((pointLabel, index) => {
        // if clicked within the range of a point label, then changed text color to red
        if (
          clickedX <= pointLabel.right &&
          clickedX >= pointLabel.left &&
          clickedY <= pointLabel.bottom &&
          clickedY >= pointLabel.top
          ){
          props.setKeyTrait([this.boxes[3]._pointLabels[index]])
          var initlabelColors = ['#dbdbdb', '#dbdbdb', '#dbdbdb', '#dbdbdb', '#dbdbdb', '#dbdbdb'];
          initlabelColors[index] = 'rgba(2, 48, 71, 1)';
          setLabelColors(initlabelColors);
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
          color: labelColors,
          font: {
            size: 15
          }
        },
        ticks: {
          stepSize: 1,
          // backdropColor: '#F4F4F4'
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  };

  return(
    <div className='radar-chart-container'>
      <Radar data={data}
        options={options}
      />
    </div>
  )
}
