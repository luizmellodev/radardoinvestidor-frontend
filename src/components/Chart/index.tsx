import { createRef, useEffect } from 'react'
import Chart from 'chart.js/auto';

interface IDatasets {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

interface ComparisonChartProps {
  labels: string[]
  datasets: IDatasets[]
}

let myLineChart: any;

function ComparisonChart({ labels, datasets }: ComparisonChartProps) {
  const chartRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    if (!chartRef.current) return;

    const myChartRef = chartRef.current.getContext('2d');

    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            // display: false,
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              callback: function(value:number) {
                  return  value.toFixed(2) + "%";
              },
            },
          },
        },
      },
    })
  }, [labels, datasets])

  return (
    <div style={{ position: 'relative', width: '100wv', height: '40vh' }}>
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
}

export default ComparisonChart;
