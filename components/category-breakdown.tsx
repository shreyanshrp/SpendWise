"use client"

import { useRef } from "react"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Progress } from "@/components/ui/progress"

ChartJS.register(ArcElement, Tooltip, Legend)

const categories = [
  {
    name: "Food & Dining",
    amount: 850,
    color: "hsl(142, 76%, 36%)",
    percentage: 35,
  },
  {
    name: "Housing",
    amount: 600,
    color: "hsl(221, 83%, 53%)",
    percentage: 24,
  },
  {
    name: "Transportation",
    amount: 400,
    color: "hsl(43, 96%, 56%)",
    percentage: 16,
  },
  {
    name: "Entertainment",
    amount: 350,
    color: "hsl(346, 87%, 48%)",
    percentage: 14,
  },
  {
    name: "Others",
    amount: 250,
    color: "hsl(262, 47%, 50%)",
    percentage: 11,
  },
]

export function CategoryBreakdown() {
  const chartRef = useRef<ChartJS>(null)

  const data = {
    labels: categories.map((category) => category.name),
    datasets: [
      {
        data: categories.map((category) => category.amount),
        backgroundColor: categories.map((category) => category.color),
        borderColor: categories.map((category) => category.color),
        borderWidth: 1,
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
    },
    cutout: "70%",
  }

  return (
    <div className="space-y-4">
      <div className="h-[200px] relative">
        <Doughnut ref={chartRef} data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-2xl font-bold">$2,450</span>
          <span className="text-xs text-muted-foreground">Total Expenses</span>
        </div>
      </div>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name} className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                <span className="text-sm font-medium">{category.name}</span>
              </div>
              <span className="text-sm font-medium">${category.amount}</span>
            </div>
            <Progress value={category.percentage} className="h-1.5" />
          </div>
        ))}
      </div>
    </div>
  )
}
