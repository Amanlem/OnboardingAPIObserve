import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

function ChartPanel() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/chart-data")
      .then((res) => res.json())
      .then((data) => {
        setChartData({
          labels: data.dates, // Make sure it uses the `dates` key from your backend
          datasets: [
            {
              label: 'Success Rate (%)',
              data: data.success_rates,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
            {
              label: 'Retry Rate (%)',
              data: data.retry_rates,
              fill: false,
              borderColor: 'rgb(255, 159, 64)',
              tension: 0.1,
            },
            {
              label: 'Schema Errors',
              data: data.schema_errors,
              fill: false,
              borderColor: 'rgb(255, 99, 132)',
              tension: 0.1,
            },
          ],
        });
      });
  }, []);

  if (!chartData) return <div>Loading chart...</div>;

  return (
  <div className="w-full flex justify-center">
    <div className="bg-white p-4 rounded shadow-md w-full max-w-4xl">
      <Line data={chartData} />
    </div>
  </div>
);

}

export default ChartPanel;

