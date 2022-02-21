import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
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
  const monthKeysArray = props.last_six_months_reports.map(report => {
    return new Date(report.created_at).getMonth()
  }).flat().reverse()

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const monthsArray = monthKeysArray.map(monthKey => {
    return months[monthKey]
  });

  // set graph labels to last six months
  const labels = monthsArray;

  // get key_traits
  const keyTraitsArray = props.last_six_months_reports[0].key_traits.map(trait => {
    return trait.category
  });

  // store array of scores for each key_trait per report
  const keyTraitScores = {};

  for (const keyTraitName of keyTraitsArray) {
    keyTraitScores[keyTraitName] = props.last_six_months_reports.map(report => {
      return report.key_traits.filter(key_trait => {
        return key_trait.category === keyTraitName
      })
    }).flat().map( keyTraitReportResults => {
      return keyTraitReportResults.skill_groups.map( results => {
        return results.score
      }).reduce((a, b) => a + b, 0) / keyTraitReportResults.skill_groups.length // get average score for key_trait
    })
  };


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
        data: keyTraitScores['Communication'],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.2
      },
      {
        label: 'Teamwork',
        data: keyTraitScores['Teamwork'],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.2
      },
      {
        label: 'Work Ethic',
        data: keyTraitScores['Work Ethic'],
        borderColor: 'rgb(44, 22, 200)',
        backgroundColor: 'rgba(44, 22, 200, 0.5)',
        tension: 0.2
      },
      {
        label: 'Time Management',
        data: keyTraitScores['Time Management'],
        borderColor: 'rgb(255, 234, 10)',
        backgroundColor: 'rgba(255, 234, 10, 0.5)',
        tension: 0.2
      },
      {
        label: 'Leadership',
        data: keyTraitScores['Leadership'],
        borderColor: 'rgb(166, 43, 165)',
        backgroundColor: 'rgba(166, 43, 165, 0.5)',
        tension: 0.2
      },
      {
        label: 'Problem Solving',
        data: keyTraitScores['Problem Solving'],
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
