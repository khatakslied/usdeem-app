import React from "react"
import { useState, useEffect } from "react"
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
  const [userLastData, setUserLastData] = useState([])
  // const [CompanyLastData, setCompanyLastData] = useState([])

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
  // console.log(labels, 'Labels')

// ----- CURRENT USER DATA
// Using last_six_months_reports so its the USER scores

// Returns an array with n reports with totalScores(average score in total for
// that report), and scoresMonth (the month that it was created) as key
  const keyTraitsScoresArray = props.last_six_months_reports.map(report => {
    return { totalScores: report.key_traits.map(traits => {
      return traits.skill_groups.map(skill_group => {
        return (skill_group.score)/traits.skill_groups.length
      }).reduce((p, c) => p + c)
    }).reduce((p, c) => p + c)/report.key_traits.length,
      scoresMonth: monthNames[new Date(report.created_at).getMonth()]
    }
  });
  // console.log(keyTraitsScoresArray, 'keyTraitsScoresArray (big one)')

// If it exists, to avoid errors, aggregates same months
// the scores based on how many were the same (month)
// https://stackoverflow.com/questions/24444738/sum-similar-keys-in-an-array-of-objects
  if (keyTraitsScoresArray) {
    const reducedArray = Array.from(keyTraitsScoresArray.reduce((acc, {totalScores, ...r}) => {
      const key = JSON.stringify(r);
      const current = acc.get(key) || { ...r, totalScores: 0 };
      return acc.set(key, { ...current, totalScores: current.totalScores + totalScores });
    }, new Map).values()).reverse();
    // console.log(reducedArray, 'reducedArray, aggregated one')
    // makes an object with the month as keys and the value as the number of times we have that month
    const counts = {};
    keyTraitsScoresArray.forEach(function (x) {
      counts[x.scoresMonth] = (counts[x.scoresMonth] || 0) + 1;
    });
    // console.log(counts, 'counts, the number of times the month repeats')

    // Divides the totalscores by the months counter and returns a set of
    // objects with averagedScore and month as keys
    let finalAveragedMonths = new Set
    let countsKeys = Object.keys(counts)

    reducedArray.forEach(obj => {
      if (obj.scoresMonth == countsKeys.find(month => month == obj.scoresMonth)) {
        finalAveragedMonths.add(
          { averagedScore: (obj.totalScores / counts[obj.scoresMonth]),
            month: obj.scoresMonth
          })
      }
    })
    // console.log(finalAveragedMonths, 'finalAverageMonths, the final set')

    // Creates a new array with the values only in the same order as the labels
    const finalAverageMonthsArr = Array.from(finalAveragedMonths)
    // console.log(finalAverageMonthsArr, 'new array from the Set')
    const dataValues = []
    finalAverageMonthsArr.forEach(obj => {
      if (obj.month == labels.find(m => obj.month == m)) {
        dataValues.push(obj.averagedScore)
        }
    })
    // console.log(dataValues)
    // Avoids infite loop due to re render
    useEffect(() => {
      setUserLastData(dataValues);
    }, []);
  }
  // -------------------- END USER DATA

  // -------------------- COMPANY DATA
  console.log(props.all_reports)
  // I need the average of everything for the last 6 months for the company

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
        data: userLastData
      },
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
