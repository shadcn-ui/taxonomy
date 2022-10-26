import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"

type AvatarProps = AvatarPrimitive.AvatarProps

export function Avatar({ className, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-full bg-slate-100",
        className
      )}
      {...props}
    />
  )
}

type AvatarImageProps = AvatarPrimitive.AvatarImageProps

Avatar.Image = function AvatarImage({ className, ...props }: AvatarImageProps) {
  return <AvatarPrimitive.Image className={cn("", className)} {...props} />
}

Avatar.Fallback = function AvatarFallback({
  className,
  children,
  ...props
}: AvatarPrimitive.AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      delayMs={500}
      className={cn("", className)}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  )
}
