import React from 'react'
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"

const data = {
    labels: ["total-bids" , "succeded"],
    datasets : [
        {
            label : "success rate",
            data : [ 100, 50],
            backgroundColor: ["red" , "black"],
            borderColor: "green",
            borderWidth: 1,

        },
    ],
};

const chartStyle = {
    width: '300px', // Set the width of the chart container
    height: '300px', // Set the height of the chart container
  };

export default function Chart() {
  return (
    <div style={chartStyle}>
      <pie data={data} ></pie>
    </div>
  )
}
