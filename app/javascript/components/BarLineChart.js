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

// getLongMonthName = function (date) {
//   return monthNames[date.getMonth()]
// }
// it really doesn't like if I try to use a function, maybe instead I actually
// need to use state, use effect, and all that kind of stuff, instead of regular
// functions...

const BarLineChart = props => {

  // need to use props here
  console.log(props.last_six_months_reports[0].created_at)
  // Trying to make a function that will return the names of the months from
  // a date:

  // this should be a state [monthNames, setMonthNames] = React.useState()
  // the commented out function might be used to call setMonthNames
  // it should expect an array of props.last_six_months_reports, iterate
  // through each one and grab the #created_at and call the function using
  // that, something like getLongMonthName(new Date("1-1-2021")
  // or in our case getLongMonthName(new Date(report.created_at))
  // tested on console and getLongMonthName(new Date("2022-03-06T00:00:00.000Z"))
  // works, but monthNames MUST be there from the beginning, the ones that
  // I should be setting are the dates that we will use to run the function.
  // "2022-03-06T00:00:00.000Z". Still need to keep thinking about it.
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  // getLongMonthName(props.last_six_months_reports[0].created_at)

  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

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
        data: [5, 4, 3, 5, 1, 2], // needs to be actual data
      },
      {
        type: 'bar',
        label: 'Company Average',
        backgroundColor: 'rgb(75, 192, 192)',
        data: [4, 5, 3, 2, 3, 4], // needs to be actual data
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
