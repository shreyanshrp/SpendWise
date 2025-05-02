"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Eye, FileText, MoreHorizontal, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const statements = [
  {
    id: "1",
    filename: "SBI_Statement_May_2023.pdf",
    uploadDate: "2023-06-01",
    bank: "State Bank of India",
    period: "May 2023",
    status: "processed",
    transactions: 42,
  },
  {
    id: "2",
    filename: "SBI_Statement_April_2023.pdf",
    uploadDate: "2023-05-02",
    bank: "State Bank of India",
    period: "April 2023",
    status: "processed",
    transactions: 38,
  },
  {
    id: "3",
    filename: "SBI_Statement_March_2023.pdf",
    uploadDate: "2023-04-03",
    bank: "State Bank of India",
    period: "March 2023",
    status: "processed",
    transactions: 45,
  },
  {
    id: "4",
    filename: "SBI_Statement_June_2023.pdf",
    uploadDate: "2023-07-01",
    bank: "State Bank of India",
    period: "June 2023",
    status: "processing",
    transactions: null,
  },
]

export function StatementHistory() {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>File Name</TableHead>
            <TableHead>Bank</TableHead>
            <TableHead>Period</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Transactions</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {statements.map((statement) => (
            <TableRow key={statement.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{statement.filename}</span>
                </div>
              </TableCell>
              <TableCell>{statement.bank}</TableCell>
              <TableCell>{statement.period}</TableCell>
              <TableCell>{statement.uploadDate}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    statement.status === "processed"
                      ? "bg-green-100 text-green-800 hover:bg-green-100 border-green-200"
                      : "bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200"
                  }
                >
                  {statement.status === "processed" ? "Processed" : "Processing"}
                </Badge>
              </TableCell>
              <TableCell>{statement.transactions !== null ? statement.transactions : "-"}</TableCell>
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
                    <DropdownMenuItem disabled={statement.status !== "processed"}>
                      <Eye className="mr-2 h-4 w-4" />
                      <span>View Transactions</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download</span>
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
