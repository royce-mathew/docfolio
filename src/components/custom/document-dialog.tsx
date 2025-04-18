import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface DocumentDialogProps {
  documentName: string
  onDialogClose: (documentName: string) => Promise<void>
  children: React.ReactNode
}

const DocumentDialog: React.FC<DocumentDialogProps> = ({
  documentName,
  onDialogClose,
  children,
}) => {
  const [rename, setRename] = useState<string>("")

  return (
    <div className="flex h-56 w-44 flex-col items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="size-full rounded bg-foreground/5 p-2"
            onClick={() => setRename("")}
          >
            {children}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Document</DialogTitle>
            <DialogDescription>
              Create a new document with a blank slate
            </DialogDescription>
          </DialogHeader>
          <div>
            <Input
              className="w-full"
              placeholder="Document Name"
              value={rename}
              onChange={(e) => setRename(e.target.value)}
            />
            <DialogClose asChild>
              <Button
                className="mt-4"
                onClick={async () => await onDialogClose(rename)}
              >
                Create
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <div className="mt-1 font-semibold">{documentName}</div>
    </div>
  )
}

export default DocumentDialog
