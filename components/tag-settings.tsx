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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash, Tag } from "lucide-react"

const defaultTags = [
  { id: "1", tag: "/f", category: "Food & Dining" },
  { id: "2", tag: "/t", category: "Transportation" },
  { id: "3", tag: "/h", category: "Housing" },
  { id: "4", tag: "/e", category: "Entertainment" },
  { id: "5", tag: "/u", category: "Utilities" },
  { id: "6", tag: "/s", category: "Shopping" },
  { id: "7", tag: "/m", category: "Health" },
  { id: "8", tag: "/v", category: "Travel" },
]

export function TagSettings() {
  const [tags, setTags] = useState(defaultTags)
  const [editingTag, setEditingTag] = useState<(typeof defaultTags)[0] | null>(null)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Configure tags for automatic transaction categorization</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Tag
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Tag</DialogTitle>
              <DialogDescription>Create a new tag for automatic categorization</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="tag-name">Tag</Label>
                <Input id="tag-name" placeholder="e.g., /ed" />
                <p className="text-xs text-muted-foreground mt-1">
                  Tags should start with / and be short (e.g., /f for food)
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tag-category">Category</Label>
                <Select>
                  <SelectTrigger id="tag-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="food">Food & Dining</SelectItem>
                    <SelectItem value="housing">Housing</SelectItem>
                    <SelectItem value="transportation">Transportation</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="shopping">Shopping</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Tag</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-2">
        <div className="bg-muted p-4 rounded-md">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <Tag className="h-4 w-4" />
            How Tags Work
          </h3>
          <p className="text-sm text-muted-foreground mb-2">When making payments, add tags in the description:</p>
          <div className="text-sm">
            <p className="mb-1">
              <span className="font-medium">Example:</span> "Lunch at Cafe{" "}
              <span className="font-medium text-primary">/f</span>"
            </p>
            <p>This transaction will be automatically categorized as "Food & Dining"</p>
          </div>
        </div>
      </div>

      <div className="border rounded-md">
        <div className="grid grid-cols-3 font-medium p-3 border-b">
          <div>Tag</div>
          <div>Category</div>
          <div className="text-right">Actions</div>
        </div>
        {tags.map((tag) => (
          <div key={tag.id} className="grid grid-cols-3 items-center p-3 border-b last:border-0">
            <div className="font-mono">{tag.tag}</div>
            <div>{tag.category}</div>
            <div className="flex items-center justify-end gap-1">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditingTag(tag)}>
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Tag</DialogTitle>
                    <DialogDescription>Update this tag mapping</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-tag-name">Tag</Label>
                      <Input id="edit-tag-name" defaultValue={editingTag?.tag} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-tag-category">Category</Label>
                      <Select defaultValue={editingTag?.category.toLowerCase().replace(/\s+/g, "")}>
                        <SelectTrigger id="edit-tag-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="food">Food & Dining</SelectItem>
                          <SelectItem value="housing">Housing</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                          <SelectItem value="entertainment">Entertainment</SelectItem>
                          <SelectItem value="utilities">Utilities</SelectItem>
                          <SelectItem value="shopping">Shopping</SelectItem>
                          <SelectItem value="health">Health</SelectItem>
                          <SelectItem value="travel">Travel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Update Tag</Button>
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
