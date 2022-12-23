"use client"

import * as React from "react"
import { useMotionValue, useSpring } from "framer-motion"

import { cn, formatNumber } from "@/lib/utils"

interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  from?: number
  to: number
  text?: string
}

export function Stat({
  from = 0,
  to,
  text,
  className,
  children,
  ...props
}: StatProps) {
  const ref = React.useRef<HTMLHeadingElement>(null)
  const value = useMotionValue(0)
  const spring = useSpring(value)

  React.useEffect(() => {
    value.set(to)
  }, [value, to])

  React.useEffect(
    () =>
      spring.onChange((value) => {
        if (ref?.current) {
          ref.current.textContent = formatNumber(value.toFixed(0))
        }
      }),
    [spring]
  )

  return (
    <div
      className={cn(
        "border border-slate-200 rounded-md grid grid-cols-[1fr_100px] gap-4 items-center p-6",
        className
      )}
      {...props}
    >
      <div className="space-y-2">
        <h2
          ref={ref}
          className="text-5xl lg:text-6xl tracking-tighter font-bold"
        >
          {from}
        </h2>
        {text && (
          <p className={cn("text-sm text-slate-600", className)} {...props}>
            {text}
          </p>
        )}
      </div>
      {children}
    </div>
  )
}
