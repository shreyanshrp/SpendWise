"use client"

import { useRef } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

export function MonthlySpendingChart() {
  const chartRef = useRef<ChartJS>(null)

  const data = {
    labels: ["May 1", "May 5", "May 10", "May 15", "May 20", "May 25", "May 30"],
    datasets: [
      {
        label: "Expenses",
        data: [350, 420, 750, 900, 1250, 1800, 2450],
        borderColor: "hsl(var(--destructive))",
        backgroundColor: "hsl(var(--destructive) / 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Income",
        data: [0, 0, 1500, 1500, 3000, 3000, 4550],
        borderColor: "hsl(var(--secondary))",
        backgroundColor: "hsl(var(--secondary) / 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "hsl(var(--border) / 0.2)",
        },
        ticks: {
          callback: (value: number) => `$${value}`,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="h-[300px] w-full">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  )
}
