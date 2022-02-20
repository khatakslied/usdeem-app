import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: true,
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Progress for ... Skills',
//     }
//   }
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Communication',
//       data: labels.map(() => Math.floor(Math.random() * 5)),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       tension: 0.2
//     },
//     {
//       label: 'Teamwork',
//       data: labels.map(() => Math.floor(Math.random() * 5)),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       tension: 0.2
//     },
//     {
//       label: 'Work Ethic',
//       data: labels.map(() => Math.floor(Math.random() * 5)),
//       borderColor: 'rgb(44, 22, 200)',
//       backgroundColor: 'rgba(44, 22, 200, 0.5)',
//       tension: 0.2
//     },
//     {
//       label: 'Time Management',
//       data: labels.map(() => Math.floor(Math.random() * 5)),
//       borderColor: 'rgb(255, 234, 10)',
//       backgroundColor: 'rgba(255, 234, 10, 0.5)',
//       tension: 0.2
//     },
//     {
//       label: 'Leadership',
//       data: labels.map(() => Math.floor(Math.random() * 5)),
//       borderColor: 'rgb(166, 43, 165)',
//       backgroundColor: 'rgba(166, 43, 165, 0.5)',
//       tension: 0.2
//     },
//     {
//       label: 'Problem Solving',
//       data: labels.map(() => Math.floor(Math.random() * 5)),
//       borderColor: 'rgb(125, 205, 144)',
//       backgroundColor: 'rgba(165, 235, 184, 0.5)',
//       tension: 0.2
//     },
//   ]
// };

const AllTraitsLineGraph = props => {

  // get previous six months from today
  // const dateArray =

  console.log(props)

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const options = {
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

  const data = {
    labels,
    datasets: [
      {
        label: 'Communication',
        data: labels.map(() => Math.floor(Math.random() * 5)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.2
      },
      {
        label: 'Teamwork',
        data: labels.map(() => Math.floor(Math.random() * 5)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.2
      },
      {
        label: 'Work Ethic',
        data: labels.map(() => Math.floor(Math.random() * 5)),
        borderColor: 'rgb(44, 22, 200)',
        backgroundColor: 'rgba(44, 22, 200, 0.5)',
        tension: 0.2
      },
      {
        label: 'Time Management',
        data: labels.map(() => Math.floor(Math.random() * 5)),
        borderColor: 'rgb(255, 234, 10)',
        backgroundColor: 'rgba(255, 234, 10, 0.5)',
        tension: 0.2
      },
      {
        label: 'Leadership',
        data: labels.map(() => Math.floor(Math.random() * 5)),
        borderColor: 'rgb(166, 43, 165)',
        backgroundColor: 'rgba(166, 43, 165, 0.5)',
        tension: 0.2
      },
      {
        label: 'Problem Solving',
        data: labels.map(() => Math.floor(Math.random() * 5)),
        borderColor: 'rgb(125, 205, 144)',
        backgroundColor: 'rgba(165, 235, 184, 0.5)',
        tension: 0.2
      },
    ]
  };

  return (
    <div>
      <h4>--AllTraitsLineGraph component--</h4>
      <Line options={options} data={data} />
    </div>
  )
};

export default AllTraitsLineGraph;
