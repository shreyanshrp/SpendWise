"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, ChevronRight, CreditCard, DollarSign, Tags } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const steps = [
  {
    id: "currency",
    name: "Currency",
    description: "Set your default currency",
    icon: DollarSign,
  },
  {
    id: "categories",
    name: "Categories",
    description: "Customize your expense categories",
    icon: Tags,
  },
  {
    id: "bank",
    name: "Bank",
    description: "Learn how to connect your bank",
    icon: CreditCard,
  },
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Welcome to SpendWise</h1>
          <p className="text-muted-foreground">Let&apos;s set up your account in a few simple steps</p>
        </div>

        <div className="flex justify-between items-center mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  index < currentStep
                    ? "bg-primary border-primary text-primary-foreground"
                    : index === currentStep
                      ? "border-primary text-primary"
                      : "border-muted-foreground text-muted-foreground"
                }`}
              >
                {index < currentStep ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
              </div>
              <div
                className={`ml-3 hidden md:block ${index <= currentStep ? "text-foreground" : "text-muted-foreground"}`}
              >
                <p className="text-sm font-medium">{step.name}</p>
                <p className="text-xs">{step.description}</p>
              </div>
              {index < steps.length - 1 && <Separator className="w-10 md:w-20 mx-2 md:mx-4" />}
            </div>
          ))}
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>{steps[currentStep].name}</CardTitle>
            <CardDescription>{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent>
            {currentStep === 0 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">Select your default currency</Label>
                  <Select defaultValue="USD">
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">US Dollar (USD)</SelectItem>
                      <SelectItem value="EUR">Euro (EUR)</SelectItem>
                      <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                      <SelectItem value="INR">Indian Rupee (INR)</SelectItem>
                      <SelectItem value="JPY">Japanese Yen (JPY)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Currency display format</Label>
                  <RadioGroup defaultValue="symbol-before">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="symbol-before" id="symbol-before" />
                      <Label htmlFor="symbol-before">Symbol before amount ($100)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="symbol-after" id="symbol-after" />
                      <Label htmlFor="symbol-after">Symbol after amount (100$)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We&apos;ve set up common expense categories for you. You can customize them now or later in settings.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Food & Dining",
                    "Housing",
                    "Transportation",
                    "Entertainment",
                    "Shopping",
                    "Utilities",
                    "Health",
                    "Travel",
                  ].map((category) => (
                    <div key={category} className="flex items-center justify-between p-3 border rounded-md">
                      <span>{category}</span>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    Add Custom Category
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-md">
                  <h3 className="font-medium mb-2">Tag System Tutorial</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    SpendWise uses a unique tag system to automatically categorize your expenses. When making payments,
                    add tags like /f for food or /t for transportation in the description.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>/f</span>
                      <span>Food & Dining</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>/t</span>
                      <span>Transportation</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>/h</span>
                      <span>Housing</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>/e</span>
                      <span>Entertainment</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Create your own tag</Label>
                  <div className="flex space-x-2">
                    <div className="w-1/3">
                      <Input placeholder="/tag" />
                    </div>
                    <div className="w-2/3">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="food">Food & Dining</SelectItem>
                          <SelectItem value="housing">Housing</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                          <SelectItem value="entertainment">Entertainment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
              disabled={currentStep === 0}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {currentStep < steps.length - 1 ? (
                <>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Get Started"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
