import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import './Charts.css';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const Charts = () => {
  const totalPopulation = 213000000; // Total da população brasileira
  const donors = 0.014 * totalPopulation; // 1,4% da população brasileira

  const doughnutData = {
    labels: ['Doadores de Sangue', 'Não Doadores'],
    datasets: [
      {
        label: 'População Brasileira e Doadores de Sangue',
        data: [donors, totalPopulation - donors],
        backgroundColor: ['#FF6384', '#FFCDD2'],
        hoverBackgroundColor: ['#FF6384', '#FFCDD2'],
      },
    ],
  };

  const bloodTypeData = {
    labels: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
    datasets: [
      {
        label: 'Distribuição de Tipos Sanguíneos (%)',
        data: [36, 6, 30, 5, 9, 2, 2, 1],
        backgroundColor: [
          '#E57373',
          '#EF5350',
          '#F44336',
          '#E53935',
          '#D32F2F',
          '#C62828',
          '#B71C1C',
          '#FF1744',
        ],
        hoverBackgroundColor: [
          '#E57373',
          '#EF5350',
          '#F44336',
          '#E53935',
          '#D32F2F',
          '#C62828',
          '#B71C1C',
          '#FF1744',
        ],
      },
    ],
  };

  return (
    <div>
      <h2 className="chart-title">Doação de Sangue no Brasil</h2>
      <div className="charts-wrapper">
        <div className="chart-container">
          <Doughnut data={doughnutData} className="chart" />
        </div>
        <div className="chart-container">
          <Bar 
            data={bloodTypeData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Distribuição de Tipos Sanguíneos na População Brasileira',
                },
              },
            }}
            className="chart"
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;