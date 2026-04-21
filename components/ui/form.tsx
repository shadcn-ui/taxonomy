"use client"

import * as React from "react"
import * as FormPrimitive from "@radix-ui/react-form"

import { cn } from "@/lib/utils"

const Form = FormPrimitive.Root

const FormField = FormPrimitive.Field

const FormControl = FormPrimitive.Control

const FormLabel = ({
  className,
  children,
  ...props
}: FormPrimitive.FormLabelProps) => (
  <FormPrimitive.Label
    className={cn(
      className,
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    )}
    {...props}
  >
    {children}
  </FormPrimitive.Label>
)
FormLabel.displayName = FormPrimitive.Label.displayName

const ErrorMessage = ({
  className,
  children,
  ...props
}: FormPrimitive.FormMessageProps) => (
  <FormPrimitive.Message
    className={cn(className, "text-xs leading-3 text-red-500")}
    {...props}
  >
    {children}
  </FormPrimitive.Message>
)
ErrorMessage.displayName = FormPrimitive.Message.displayName

const FormSubmit = ({
  className,
  children,
  ...props
}: FormPrimitive.FormSubmitProps) => (
  <FormPrimitive.Submit asChild>
    <button className={cn(className)} {...props}>
      {children}
    </button>
  </FormPrimitive.Submit>
)
FormSubmit.displayName = FormPrimitive.Submit.displayName

export { Form, FormField, FormLabel, FormControl, ErrorMessage, FormSubmit }
