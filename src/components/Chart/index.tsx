import { createRef, useEffect } from 'react'
import Chart from 'chart.js/auto';

interface ComparisonChartProps {
  test: number[]
}

let myLineChart: any;

function ComparisonChart({ test }: ComparisonChartProps) {
  const chartRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    if (!chartRef.current) return;

    const myChartRef = chartRef.current.getContext('2d');

    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
        datasets: [
          {
            label: "WARREN GREEN",
            data: [86, 67, 91, 12, 70],
            borderColor: '#E02B57',
            backgroundColor: '#E02B57',
          },
          {
            label: "WARREN GAMES",
            data: test,
            borderColor: '#05F277',
            backgroundColor: '#05F277',
          },
        ]
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
            // display: false,
          },
        }
      },
    })
  }, [test])

  return (
    <div>
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
}

export default ComparisonChart;
