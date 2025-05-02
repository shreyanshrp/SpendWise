import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TransactionsTable } from "@/components/transactions-table"
import { Filter, Plus, Search } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Transactions</h2>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Add Transaction
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="uncategorized">Uncategorized</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search transactions..." className="w-[200px] md:w-[300px] pl-8" />
            </div>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <TransactionsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="income" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <TransactionsTable type="income" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <TransactionsTable type="expense" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="uncategorized" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Uncategorized Transactions</CardTitle>
              <CardDescription>These transactions need to be categorized</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <TransactionsTable type="uncategorized" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
