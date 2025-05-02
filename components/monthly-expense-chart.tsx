"use client"

import { useRef } from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface MonthlyExpenseChartProps {
  type: "income" | "expense"
}

export function MonthlyExpenseChart({ type }: MonthlyExpenseChartProps) {
  const chartRef = useRef<ChartJS>(null)

  const data = {
    labels: ["April", "May"],
    datasets: [
      {
        label: type === "income" ? "Income" : "Expenses",
        data: type === "income" ? [4000, 4550] : [2270, 2450],
        backgroundColor: type === "income" ? "hsl(var(--secondary) / 0.8)" : "hsl(var(--destructive) / 0.8)",
        borderColor: type === "income" ? "hsl(var(--secondary))" : "hsl(var(--destructive))",
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
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `$${context.raw.toFixed(2)}`,
        },
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
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
