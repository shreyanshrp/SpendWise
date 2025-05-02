import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MonthlyExpenseChart } from "@/components/monthly-expense-chart"
import { CategoryComparisonChart } from "@/components/category-comparison-chart"
import { SavingsRateChart } from "@/components/savings-rate-chart"
import { Download, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Reports & Analysis</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-3.5 w-3.5" />
            <span>Export</span>
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="grid grid-cols-2 gap-2 md:flex md:items-center">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium">Period:</span>
            <Select defaultValue="may-2023">
              <SelectTrigger className="h-8 w-[130px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="may-2023">May 2023</SelectItem>
                <SelectItem value="april-2023">April 2023</SelectItem>
                <SelectItem value="march-2023">March 2023</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium">Compare:</span>
            <Select defaultValue="previous-month">
              <SelectTrigger className="h-8 w-[150px]">
                <SelectValue placeholder="Select comparison" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="previous-month">Previous Month</SelectItem>
                <SelectItem value="same-month-last-year">Same Month Last Year</SelectItem>
                <SelectItem value="none">No Comparison</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Income</CardTitle>
                <CardDescription>May 2023 vs April 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,550.00</div>
                <p className="text-xs text-secondary">+$550.00 (+12%)</p>
                <div className="mt-4 h-[80px]">
                  <MonthlyExpenseChart type="income" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Expenses</CardTitle>
                <CardDescription>May 2023 vs April 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,450.00</div>
                <p className="text-xs text-destructive">+$180.00 (+8%)</p>
                <div className="mt-4 h-[80px]">
                  <MonthlyExpenseChart type="expense" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Savings Rate</CardTitle>
                <CardDescription>May 2023 vs April 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">46.2%</div>
                <p className="text-xs text-secondary">+5.1%</p>
                <div className="mt-4 h-[80px]">
                  <SavingsRateChart />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Expense Breakdown</CardTitle>
              <CardDescription>Comparison of expenses by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <CategoryComparisonChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Category Analysis</CardTitle>
              <CardDescription>Detailed breakdown of spending by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                {/* Category analysis content */}
                <p className="text-center text-muted-foreground">Category analysis chart will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Spending Trends</CardTitle>
              <CardDescription>Your spending patterns over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                {/* Trends content */}
                <p className="text-center text-muted-foreground">Spending trends chart will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="savings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Savings Analysis</CardTitle>
              <CardDescription>Track your savings rate over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                {/* Savings content */}
                <p className="text-center text-muted-foreground">Savings analysis chart will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
