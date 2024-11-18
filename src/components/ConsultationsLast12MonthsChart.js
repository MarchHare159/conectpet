import React from "react";
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
  },
  scales: {
    x: {
      stacked: true, // Enable stacking on x-axis
      ticks: {
        color: "#A2A2A2",
        font: {
          family: "Inter",
          size: 12,
          weight: 600,
        },
      },
      barThickness: 10, // Set a fixed bar thickness
      maxBarThickness: 10, // Maximum thickness of bars
    },
    y: {
      beginAtZero: true,
      stacked: true, // Enable stacking on y-axis
      ticks: {
        stepSize: 500,
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

const labels = [
  "Mai/2023",
  "Jun/2023",
  "Jul/2023",
  "Ago/2023",
  "Set/2023",
  "Out/2023",
  "Nov/2023",
  "Dez/2023",
  "Jan/2024",
  "Fev/2024",
  "Mar/2024",
  "Abr/2024",
  "Mai/2024",
];



function ConsultationsLast12MonthsChart() {
  const data = {
    labels,
    datasets: [
      {
        label: "Category 1",
        data: [2400, 2200, 2200, 2100, 2000, 2300, 2100, 2000, 2300, 2400, 2500, 3400, 1800],
        backgroundColor: "#955fe1",
      },
      {
        label: "Category 2",
        data: [500, 400, 300, 400, 300, 400, 300, 400, 300, 300, 400, 300, 300],
        backgroundColor: "#f76397",
      },
      {
        label: "Category 3",
        data: [200, 300, 400, 300, 500, 300, 400, 300, 400, 500, 300, 400, 200],
        backgroundColor: "#00d7be",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-[#1B98E0] font-inter text-[20px] font-semibold mb-4">CONSULTAS FINALIZADAS AUSÊNCIAS E CANCELAMENTOS</h2>
      <p className="text-[#A2A2A2] font-inter text-[12px] font-semibold leading-normal">Estatísticas sobre consultas nos últimos 12 meses</p>
      <div className="w-[90%] h-[392px] p-[10px] border border-[#ABABAB]">
        <Bar options={options} data={data}/>
      </div>
    </div>
  );
}

export default ConsultationsLast12MonthsChart;
