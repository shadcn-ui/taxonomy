"use client"

import * as React from "react"
import * as AlertDialogPrimitives from "@radix-ui/react-alert-dialog"
import { cn } from "@/lib/utils"

type AlertProps = AlertDialogPrimitives.AlertDialogProps

export function Alert({ ...props }: AlertProps) {
  return <AlertDialogPrimitives.Root {...props} />
}

Alert.Trigger = React.forwardRef<
  HTMLButtonElement,
  AlertDialogPrimitives.AlertDialogTriggerProps
>(function AlertTrigger({ ...props }, ref) {
  return <AlertDialogPrimitives.Trigger {...props} ref={ref} />
})

Alert.Portal = AlertDialogPrimitives.Portal

Alert.Content = React.forwardRef<
  HTMLDivElement,
  AlertDialogPrimitives.AlertDialogContentProps
>(function AlertContent({ className, ...props }, ref) {
  return (
    <Alert.Portal>
      <AlertDialogPrimitives.Overlay className="fixed inset-0 z-40 bg-black/50 opacity-100 transition-opacity animate-in fade-in">
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <AlertDialogPrimitives.Content
            ref={ref}
            className={cn(
              "fixed z-50 grid w-[95vw] max-w-md scale-100 gap-4 rounded-lg bg-white p-6 opacity-100 animate-in fade-in-90 zoom-in-90 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 md:w-full",
              className
            )}
            {...props}
          />
        </div>
      </AlertDialogPrimitives.Overlay>
    </Alert.Portal>
  )
})

type AlertHeaderProps = React.HTMLAttributes<HTMLDivElement>

Alert.Header = function AlertHeader({ className, ...props }: AlertHeaderProps) {
  return <div className={cn("grid gap-1", className)} {...props} />
}

Alert.Title = React.forwardRef<
  HTMLHeadingElement,
  AlertDialogPrimitives.AlertDialogTitleProps
>(function AlertTitle({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitives.Title
      ref={ref}
      className={cn("text-lg font-semibold text-slate-900", className)}
      {...props}
    />
  )
})

Alert.Description = React.forwardRef<
  HTMLParagraphElement,
  AlertDialogPrimitives.AlertDialogDescriptionProps
>(function AlertDescription({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitives.Description
      ref={ref}
      className={cn("text-sm text-neutral-500", className)}
      {...props}
    />
  )
})

Alert.Footer = function AlertFooter({ className, ...props }: AlertHeaderProps) {
  return (
    <div className={cn("flex justify-end space-x-2", className)} {...props} />
  )
}

Alert.Cancel = React.forwardRef<
  HTMLButtonElement,
  AlertDialogPrimitives.AlertDialogCancelProps
>(function AlertCancel({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitives.Cancel
      ref={ref}
      className={cn(
        "relative inline-flex h-9 items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-brand-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",
        className
      )}
      {...props}
    />
  )
})

Alert.Action = React.forwardRef<
  HTMLButtonElement,
  AlertDialogPrimitives.AlertDialogActionProps
>(function AlertAction({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitives.Action
      ref={ref}
      className={cn(
        "relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
        className
      )}
      {...props}
    />
  )
})
