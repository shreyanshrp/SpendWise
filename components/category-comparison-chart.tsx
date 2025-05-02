"use client"

import { useRef } from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function CategoryComparisonChart() {
  const chartRef = useRef<ChartJS>(null)

  const data = {
    labels: [
      "Food & Dining",
      "Housing",
      "Transportation",
      "Entertainment",
      "Utilities",
      "Shopping",
      "Health",
      "Others",
    ],
    datasets: [
      {
        label: "May 2023",
        data: [850, 600, 400, 350, 150, 50, 30, 20],
        backgroundColor: "hsl(var(--primary) / 0.8)",
        borderColor: "hsl(var(--primary))",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "April 2023",
        data: [780, 600, 350, 300, 140, 60, 20, 20],
        backgroundColor: "hsl(var(--muted) / 0.6)",
        borderColor: "hsl(var(--muted) / 0.8)",
        borderWidth: 1,
        borderRadius: 4,
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
      tooltip: {
        callbacks: {
          label: (context: any) => `$${context.raw.toFixed(2)}`,
        },
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
    <div className="h-full w-full">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  )
}
