"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDown, ArrowUp, MoreHorizontal, Plus, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const friends = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    youOwe: 15.0,
    theyOwe: 0,
  },
  {
    id: "2",
    name: "Sarah Williams",
    email: "sarah@example.com",
    youOwe: 0,
    theyOwe: 100.25,
  },
  {
    id: "3",
    name: "Mike Brown",
    email: "mike@example.com",
    youOwe: 0,
    theyOwe: 102.75,
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    youOwe: 35.5,
    theyOwe: 0,
  },
  {
    id: "5",
    name: "Chris Wilson",
    email: "chris@example.com",
    youOwe: 0,
    theyOwe: 75.0,
  },
]

export function FriendsList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search friends..." className="w-[250px] pl-8" />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Friend
        </Button>
      </div>

      <div className="w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>You Owe</TableHead>
              <TableHead>They Owe</TableHead>
              <TableHead>Net Balance</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {friends.map((friend) => (
              <TableRow key={friend.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{friend.name}</span>
                  </div>
                </TableCell>
                <TableCell>{friend.email}</TableCell>
                <TableCell>
                  {friend.youOwe > 0 ? (
                    <div className="flex items-center text-destructive">
                      <ArrowUp className="mr-1 h-3 w-3" />${friend.youOwe.toFixed(2)}
                    </div>
                  ) : (
                    "$0.00"
                  )}
                </TableCell>
                <TableCell>
                  {friend.theyOwe > 0 ? (
                    <div className="flex items-center text-secondary">
                      <ArrowDown className="mr-1 h-3 w-3" />${friend.theyOwe.toFixed(2)}
                    </div>
                  ) : (
                    "$0.00"
                  )}
                </TableCell>
                <TableCell>
                  {friend.theyOwe > friend.youOwe ? (
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                      +${(friend.theyOwe - friend.youOwe).toFixed(2)}
                    </Badge>
                  ) : friend.youOwe > friend.theyOwe ? (
                    <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                      -${(friend.youOwe - friend.theyOwe).toFixed(2)}
                    </Badge>
                  ) : (
                    <Badge variant="outline">$0.00</Badge>
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
                        <span>Add Expense</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Settle Up</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <span>View History</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Remove Friend</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
