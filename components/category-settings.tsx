"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Edit, Trash, Move } from "lucide-react"

const defaultCategories = [
  { id: "1", name: "Food & Dining", color: "#22c55e" },
  { id: "2", name: "Housing", color: "#3b82f6" },
  { id: "3", name: "Transportation", color: "#eab308" },
  { id: "4", name: "Entertainment", color: "#ec4899" },
  { id: "5", name: "Utilities", color: "#8b5cf6" },
  { id: "6", name: "Shopping", color: "#f97316" },
  { id: "7", name: "Health", color: "#06b6d4" },
  { id: "8", name: "Travel", color: "#14b8a6" },
]

export function CategorySettings() {
  const [categories, setCategories] = useState(defaultCategories)
  const [editingCategory, setEditingCategory] = useState<(typeof defaultCategories)[0] | null>(null)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Create and manage categories to organize your expenses</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Category</DialogTitle>
              <DialogDescription>Create a new expense category</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="category-name">Category Name</Label>
                <Input id="category-name" placeholder="e.g., Education" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category-color">Color</Label>
                <div className="flex gap-2">
                  <Input id="category-color" type="color" defaultValue="#10b981" className="w-12 h-8 p-1" />
                  <Input defaultValue="#10b981" className="flex-1" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Category</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center justify-between p-3 border rounded-md">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }} />
              <span>{category.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Move className="h-4 w-4" />
                <span className="sr-only">Reorder</span>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditingCategory(category)}>
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Category</DialogTitle>
                    <DialogDescription>Update this expense category</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-category-name">Category Name</Label>
                      <Input id="edit-category-name" defaultValue={editingCategory?.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-category-color">Color</Label>
                      <div className="flex gap-2">
                        <Input
                          id="edit-category-color"
                          type="color"
                          defaultValue={editingCategory?.color}
                          className="w-12 h-8 p-1"
                        />
                        <Input defaultValue={editingCategory?.color} className="flex-1" />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Update Category</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                <Trash className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
