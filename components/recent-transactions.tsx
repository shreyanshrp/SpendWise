"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDown, ArrowUp, MoreHorizontal, Tag } from "lucide-react"

const transactions = [
  {
    id: "1",
    date: "2023-06-01",
    description: "Grocery Shopping /f",
    amount: -120.5,
    category: "Food & Dining",
    status: "completed",
  },
  {
    id: "2",
    date: "2023-06-02",
    description: "Monthly Salary",
    amount: 3500.0,
    category: "Income",
    status: "completed",
  },
  {
    id: "3",
    date: "2023-06-03",
    description: "Electric Bill /u",
    amount: -85.2,
    category: "Utilities",
    status: "completed",
  },
  {
    id: "4",
    date: "2023-06-04",
    description: "Movie Night /e",
    amount: -35.0,
    category: "Entertainment",
    status: "completed",
  },
  {
    id: "5",
    date: "2023-06-05",
    description: "Uber Ride /t",
    amount: -22.5,
    category: "Transportation",
    status: "completed",
  },
]

export function RecentTransactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.date}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {transaction.description}
                {transaction.description.includes("/") && (
                  <Badge variant="outline" className="flex items-center gap-1 h-5">
                    <Tag className="h-3 w-3" />
                    <span className="text-xs">{transaction.description.split("/")[1]}</span>
                  </Badge>
                )}
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="outline" className="capitalize">
                {transaction.category}
              </Badge>
            </TableCell>
            <TableCell
              className={`text-right font-medium ${transaction.amount > 0 ? "text-secondary" : "text-destructive"}`}
            >
              <div className="flex items-center justify-end gap-1">
                {transaction.amount > 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}$
                {Math.abs(transaction.amount).toFixed(2)}
              </div>
            </TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
