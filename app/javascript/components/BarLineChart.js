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
  console.log(props.last_six_months_reports)
  // last six months reports are only your reports
  // I need the average of everything per month for the user and for
  // the company
  const monthKeysArray = props.last_six_months_reports.map(report => {
    return new Date(report.created_at).getMonth()
  }).flat().reverse().slice(-6)
  // console.log(monthKeysArray)

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthsArray = monthKeysArray.map(monthKey => {
    return monthNames[monthKey]
  });

  const labels = monthsArray

// ----- MY TRY
// Using last_six_months_reports so its the USER scores

// Returns an array with n reports with totalScores(average score in total for
// that report), and scoresMonth (the month that it was created) as key
// currently I am missing reports on april...
// I think the formula for last 6 is working, we just dont have reports for april
  const keyTraitsScoresArray = props.last_six_months_reports.map(report => {
    return { totalScores: report.key_traits.map(traits => {
      return traits.skill_groups.map(skill_group => {
        return (skill_group.score)/traits.skill_groups.length
      }).reduce((p, c) => p + c)
    }).reduce((p, c) => p + c)/report.key_traits.length,
      scoresMonth: monthNames[new Date(report.created_at).getMonth()]
      // scoresMonth: report.created_at
    }
  });
// Need to sort by same month and reduce till I have just 6 values in an array
// so I am looking to get an array back

  // console.log(keyTraitsScoresArray)

// If it exists, to avoid errors (not working, need to reduce based on the same
// month!)
  // if (keyTraitsScoresArray) {
  //   let testing = Array.from(keyTraitsScoresArray.reduce(
  //     (m, { scoresMonth, value }) => m.set(scoresMonth, (m.get(scoresMonth) || 0) + value), new Map
  //   ), ([scoresMonth, value]) => ({ scoresMonth, value }));
  //   console.log(testing)
  // }

  // -------------------- END MY TRY

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

// TESTING

// Saving one of the objects inside the keyTraitsScoresArray

// testingObject = keyTraitsScoresArray[0]

// const sumwithinitial = testingObject.totalScores.reduce(
//   (previusValue, currentValue) => previusValue + currentValue
// )
// => '1,3,13,5,22,4,5,11,1,2,44,2,15,4,5'

// sumwithinitial.split(',').map(num => parseInt(num))
// => [1, 3, 13, 5, 22, 4, 5, 11, 1, 2, 44, 2, 15, 4, 5]
