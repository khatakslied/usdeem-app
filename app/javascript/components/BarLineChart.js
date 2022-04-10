import React from "react"
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const BarLineChart = props => {

  // console.log(props.all_reports)
  // console.log(props.last_six_months_reports)
  // last six months reports are only your reports
  // I need the average of everything per month for the user and for
  // the company
  const monthKeysArray = props.last_six_months_reports.map(report => {
    return new Date(report.created_at).getMonth()
  }).flat().reverse().slice(-6)

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthsArray = monthKeysArray.map(monthKey => {
    return monthNames[monthKey]
  });

  const labels = monthsArray

// Returns very nested scores and the created at to be able to sort
  const keyTraitsScoresArray = props.last_six_months_reports.map(report => {
    return [(report.key_traits.map(traits => {
      return [(traits.skill_groups.map(scores => {
        return [scores.score]
      }))]
    })),
    (report.created_at)]
  });

  // Getting 18 reports with deeply nested arrays and the created at
  console.log(keyTraitsScoresArray)
  // console.log(keyTraitsScoresArray[0][0])

  // This would be just the scores and the created at, might have to flat
  // beforehand and also need to understand if this scores equal 1 month
  // or just one trait, one reports worth of scores
  console.log(keyTraitsScoresArray[0].flat().flat().flat().flat())
  // [1, 3, 1, 3, 5, 2, 2, 4, 5, 1, 1, 1, 2, 4, 4, 2, 1, 5, 4, 5, '2022-03-06T00:00:00.000Z']

  // Probably need to do something similar to AllTraitsLineGraph ^^u


  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          precision: 0
        }
      }
    }
  };

  const data = {
    labels,
    datasets: [
      {
        type: 'line',
        label: 'Your Rating',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: [5, 4, 3, 5, 1, 2], // needs to be actual data myRatingData
      }, // I can just pass an array here
      {
        type: 'bar',
        label: 'Company Average',
        backgroundColor: 'rgb(75, 192, 192)',
        data: [4, 5, 3, 2, 3, 4], // needs to be actual data companyRatingData
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bar-line-chart-container">
      <Chart type='bar' options={options} data={data} />
    </div>
  )
};
export default BarLineChart;
