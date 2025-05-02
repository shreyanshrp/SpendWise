"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDown, ArrowUp, Edit, MoreHorizontal, Tag, Trash } from "lucide-react"

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
  {
    id: "6",
    date: "2023-06-06",
    description: "Freelance Payment",
    amount: 850.0,
    category: "Income",
    status: "completed",
  },
  {
    id: "7",
    date: "2023-06-07",
    description: "Restaurant Dinner",
    amount: -78.9,
    category: null,
    status: "uncategorized",
  },
  {
    id: "8",
    date: "2023-06-08",
    description: "Internet Bill",
    amount: -65.0,
    category: "Utilities",
    status: "completed",
  },
  {
    id: "9",
    date: "2023-06-09",
    description: "Gym Membership",
    amount: -50.0,
    category: "Health & Fitness",
    status: "completed",
  },
  {
    id: "10",
    date: "2023-06-10",
    description: "Online Shopping",
    amount: -120.3,
    category: null,
    status: "uncategorized",
  },
]

interface TransactionsTableProps {
  type?: "all" | "income" | "expense" | "uncategorized"
}

export function TransactionsTable({ type = "all" }: TransactionsTableProps) {
  const filteredTransactions = transactions.filter((transaction) => {
    if (type === "all") return true
    if (type === "income") return transaction.amount > 0
    if (type === "expense") return transaction.amount < 0
    if (type === "uncategorized") return transaction.status === "uncategorized"
    return true
  })

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
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
                {transaction.category ? (
                  <Badge variant="outline" className="capitalize">
                    {transaction.category}
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200">
                    Uncategorized
                  </Badge>
                )}
              </TableCell>
              <TableCell
                className={`text-right font-medium ${transaction.amount > 0 ? "text-secondary" : "text-destructive"}`}
              >
                <div className="flex items-center justify-end gap-1">
                  {transaction.amount > 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Tag className="mr-2 h-4 w-4" />
                      <span>Categorize</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
