import React from 'react';
import { Line } from 'react-chartjs-2';

const DATA_COUNT = 3;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = ['Janeiro', 'Fevereiro', 'Março'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3],
      borderColor: '#F00',
      backgroundColor: '#F00',
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data: [4, 5, 6],
      borderColor: '#00F',
      backgroundColor: '#00F',
      yAxisID: 'y',
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        gridLines: {
          drawOnArea: true,
        },
      },
    }
  },
};

const MultiAxisLine = () => (
    <Line type='line' data={data} options={config} />
);

export default MultiAxisLine;