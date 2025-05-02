"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUpload } from "@/components/file-upload"
import { StatementHistory } from "@/components/statement-history"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export default function StatementsPage() {
  const [activeTab, setActiveTab] = useState("upload")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Bank Statements</h2>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Statement Processing</AlertTitle>
        <AlertDescription>
          Upload your bank statements and SpendWise will automatically extract and categorize your transactions.
          Currently supporting SBI passbooks with more banks coming soon.
        </AlertDescription>
      </Alert>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="upload">Upload Statement</TabsTrigger>
          <TabsTrigger value="history">Statement History</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Bank Statement</CardTitle>
              <CardDescription>
                Upload your bank statement PDF or image file for automatic transaction extraction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bank">Select Bank</Label>
                <Select defaultValue="sbi">
                  <SelectTrigger id="bank">
                    <SelectValue placeholder="Select bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sbi">State Bank of India (SBI)</SelectItem>
                    <SelectItem value="hdfc" disabled>
                      HDFC Bank (Coming Soon)
                    </SelectItem>
                    <SelectItem value="icici" disabled>
                      ICICI Bank (Coming Soon)
                    </SelectItem>
                    <SelectItem value="axis" disabled>
                      Axis Bank (Coming Soon)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="statement-period">Statement Period</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="month" placeholder="From" />
                  <Input type="month" placeholder="To" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Upload File</Label>
                <FileUpload />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Process Statement</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tag System Guide</CardTitle>
              <CardDescription>How to use tags in your transactions for automatic categorization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  SpendWise uses a unique tag system to automatically categorize your expenses. When making payments,
                  add tags like /f for food or /t for transportation in the description.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Common Tags</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span>/f</span>
                        <span>Food & Dining</span>
                      </li>
                      <li className="flex justify-between">
                        <span>/t</span>
                        <span>Transportation</span>
                      </li>
                      <li className="flex justify-between">
                        <span>/h</span>
                        <span>Housing</span>
                      </li>
                      <li className="flex justify-between">
                        <span>/e</span>
                        <span>Entertainment</span>
                      </li>
                      <li className="flex justify-between">
                        <span>/u</span>
                        <span>Utilities</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Example</h4>
                    <div className="text-sm space-y-1">
                      <p>When paying for lunch via UPI:</p>
                      <p className="font-medium">Lunch at Cafe /f</p>
                      <p>This will be automatically categorized as "Food & Dining"</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Statement History</CardTitle>
              <CardDescription>View and manage your previously uploaded bank statements</CardDescription>
            </CardHeader>
            <CardContent>
              <StatementHistory />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
