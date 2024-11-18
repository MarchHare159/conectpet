// import React from 'react';

// 

// export default AttendanceLast7DaysChart;

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  // ChartDataLabels
);

function AttendanceLast7DaysChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#abbac5",
        font: {
          family: "Inter",
          size: 12,
          weight: "bold",
        },
        align: "top",
        anchor: "end",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#A2A2A2",
          font: {
            family: "Inter",
            size: 12,
            weight: 600,
          },
        },
      },
      x: {
        ticks: {
          color: "#A2A2A2",
          font: {
            family: "Inter",
            size: 12,
            weight: 600,
          },
        },
      },
    },
  };

  const labels = ["10/05", "13/05", "14/05", "15/05", "16/05", "17/05", "18/05"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [49, 36, 37, 43, 40, 33, 0],
        borderColor: "#FF6384",
        backgroundColor: "#FF6384",
        borderWidth: 2,
        pointBackgroundColor: "#FF6384",
        pointBorderColor: "#FF6384",
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Dataset 2",
        data: [37, 36, 31, 36, 31, 25, 0],
        borderColor: "#6A0DAD",
        backgroundColor: "#6A0DAD",
        borderWidth: 2,
        pointBackgroundColor: "#6A0DAD",
        pointBorderColor: "#6A0DAD",
        pointRadius: 4,
        pointHoverRadius: 5,
      },
    ],
  };

  return (
    <div className="mr-[16px]">
      <div className="">
        <h2 className="text-[#1B98E0] font-inter text-[20px] font-semibold mb-[5px]">ANIMAIS ATENDIDOS E AUSÊNCIAS - ÚLTIMOS 7 DIAS</h2>
        <div className="w-[515px] h-[392px] p-[10px] border border-[#ABABAB]">
          <Line options={options} data={data}/>
        </div>
      </div>
    </div>
  );
}

export default AttendanceLast7DaysChart;
