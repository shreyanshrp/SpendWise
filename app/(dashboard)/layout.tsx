import type React from "react"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="text-primary text-xl">SpendWise</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button asChild size="sm" className="h-8 gap-1">
            <Link href="/transactions/new">
              <Plus className="h-3.5 w-3.5" />
              <span>Add Transaction</span>
            </Link>
          </Button>
          <ModeToggle />
          <UserNav />
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2 p-4">
            <MainNav />
          </div>
        </aside>
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </div>
  )
}
