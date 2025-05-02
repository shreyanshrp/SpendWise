"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, CreditCard, FileText, Home, PieChart, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: CreditCard,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: PieChart,
  },
  {
    title: "Statements",
    href: "/statements",
    icon: FileText,
  },
  {
    title: "Split Expenses",
    href: "/split-expenses",
    icon: Users,
  },
  {
    title: "Budget",
    href: "/budget",
    icon: BarChart3,
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="grid gap-1">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              pathname === item.href ? "bg-secondary text-secondary-foreground" : "",
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Button>
        </Link>
      ))}
      <Link href="/settings">
        <Button
          variant={pathname === "/settings" ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start",
            pathname === "/settings" ? "bg-secondary text-secondary-foreground" : "",
          )}
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </Link>
    </nav>
  )
}
