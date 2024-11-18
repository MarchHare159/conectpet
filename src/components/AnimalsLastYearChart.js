import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    title: {
      display: false,
      text: "ANIMAIS ATENDIDOS NO ANO ANTERIOR",
      color: "#1B98E0",
      font: {
        size: 20,
        family: "Inter",
        weight: 600,
      },
      padding: {
        top: 10,
        bottom: 30,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5000,
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

const labels = ["", "", ""];

function AnimalsLastYearChart() {
  const chartRef = useRef(null);

  const data = {
    labels,
    datasets: [
      {
        label: "Animals Attended",
        data: [28000, 4000],
        backgroundColor: ["#955fe1", "#f76397"],
      },
    ],
  };

  return (
    <div className="w-[calc(45%-75px)]">
      <h2 className="text-[#1B98E0] font-inter text-[20px] font-semibold mb-[5px]">
        ANIMAIS ATENDIDOS NO ANO ANTERIOR
      </h2>
      <div className="w-[100%] h-[392px] p-[10px] border border-[#ABABAB]">
        <Bar ref={chartRef} options={options} data={data}/>
      </div>
    </div>
  );
}

export default AnimalsLastYearChart;
