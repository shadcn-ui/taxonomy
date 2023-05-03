"use client"

import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

interface IModal {
    footer: React.ReactNode
    children: React.ReactNode
}
export default function Modal({ children, footer }: IModal) {
    const router = useRouter()

    const handleOnOpenChange = (open: boolean) => {
        if (!open) {
            router.back()
        }
    }
    return (
        <Dialog open onOpenChange={handleOnOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <div className="grid gap-4 pt-6 relative">{children}</div>
                <DialogFooter>{footer}</DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
