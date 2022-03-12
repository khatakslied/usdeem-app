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
// test for chart -- start (the above imports are also part of the test)
// https://codesandbox.io/s/github/reactchartjs/react-chartjs-2/tree/master/sandboxes/chart/multitype?from-embed=&file=/App.tsx
// more examples:
// https://codesandbox.io/examples/package/react-chartjs-2
// chart-react doc:
// https://react-chartjs-2.js.org/examples/multitype-chart
// https://react-chartjs-2.js.org/

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

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

export const data = {
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

const BarLineChart = props => {
  return (
    <div className="bar-line-chart-container">
      <Chart type='bar' options={options} data={data} />
      {/* rating 1-5
      bars are company average
      you are the line
      45% the total height, 50% to width */}
    </div>
  )
};

export default BarLineChart;

// console.log(props.latest_reports)
// need to target the right data, might have to change the order, need to this.props
// before passing the data to the chart
