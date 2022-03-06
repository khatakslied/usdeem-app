import React from 'react';
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

export const data = {
  labels: ["Problem Solving", "Leadership", "Work Ethic", "Teamwork", "Communication", "Time Management"],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 4, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],

};

export const options = {
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

export default function ChartRadar() {
  return <Radar data={data}
    options={options}
  />;
}
