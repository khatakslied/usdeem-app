import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Progress for ... Skills',
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Communication',
      data: labels.map(() => Math.floor(Math.random() * 5)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Teamwork',
      data: labels.map(() => Math.floor(Math.random() * 5)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ]
};

const AllTraitsLineGraph = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
};

export default AllTraitsLineGraph;
