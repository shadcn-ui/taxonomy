import Image, { ImageProps } from "next/image"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

type AvatarProps = AvatarPrimitive.AvatarProps

export function Avatar({ className, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full bg-slate-100",
        className
      )}
      {...props}
    />
  )
}

Avatar.Image = function AvatarImage({
  src,
  className,
  alt,
  width = 32,
  height = 32,
  ...props
}: ImageProps) {
  if (!src) {
    return <Avatar.Fallback />
  }

  return (
    <Image
      src={src}
      className={cn("object-cover", className)}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  )
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
