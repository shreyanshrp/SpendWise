"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, MoreHorizontal, Users } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const expenses = [
  {
    id: "1",
    description: "Dinner at Italian Restaurant",
    date: "2023-06-01",
    amount: 120.0,
    paidBy: "You",
    splitWith: [
      { name: "Alex", amount: 40.0, settled: true },
      { name: "Sarah", amount: 40.0, settled: false },
    ],
    category: "Food & Dining",
  },
  {
    id: "2",
    description: "Movie Tickets",
    date: "2023-06-03",
    amount: 45.0,
    paidBy: "Alex",
    splitWith: [
      { name: "You", amount: 15.0, settled: false },
      { name: "Sarah", amount: 15.0, settled: true },
    ],
    category: "Entertainment",
  },
  {
    id: "3",
    description: "Groceries",
    date: "2023-06-05",
    amount: 85.5,
    paidBy: "You",
    splitWith: [{ name: "Mike", amount: 42.75, settled: false }],
    category: "Food & Dining",
  },
  {
    id: "4",
    description: "Uber Ride",
    date: "2023-06-07",
    amount: 25.0,
    paidBy: "Sarah",
    splitWith: [{ name: "You", amount: 12.5, settled: true }],
    category: "Transportation",
  },
  {
    id: "5",
    description: "Utility Bill",
    date: "2023-06-10",
    amount: 120.0,
    paidBy: "You",
    splitWith: [{ name: "Mike", amount: 60.0, settled: true }],
    category: "Utilities",
  },
]

export function SplitExpensesList() {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Paid By</TableHead>
            <TableHead>Split With</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell className="font-medium">{expense.description}</TableCell>
              <TableCell>{expense.date}</TableCell>
              <TableCell>${expense.amount.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {expense.paidBy === "You" ? (
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                      You
                    </Badge>
                  ) : (
                    <Badge variant="outline">{expense.paidBy}</Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex -space-x-2">
                  {expense.splitWith.map((person, index) => (
                    <Avatar key={index} className="h-6 w-6 border-2 border-background">
                      <AvatarFallback className="text-xs">{person.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                {expense.splitWith.every((person) => person.settled) ? (
                  <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
                    Settled
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200">
                    Pending
                  </Badge>
                )}
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
                      <Check className="mr-2 h-4 w-4" />
                      <span>Mark as Settled</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Edit Split</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>Edit Expense</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
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
