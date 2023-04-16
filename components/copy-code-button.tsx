"use client"

import * as React from "react"
import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline"

interface CopyCodeButtonProps {
  onCopy: unknown
}

export function CopyCodeButton({ onCopy }: CopyCodeButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopyClick = async () => {
    await (onCopy as () => Promise<void>)()
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div
      className="transition-color flex cursor-pointer duration-200 hover:text-gray-900"
      onClick={handleCopyClick}
    >
      {isCopied ? (
        <>
          <CheckIcon className="h-4 w-5" />
          <span className="text-xs">Copied!</span>
        </>
      ) : (
        <>
          <ClipboardIcon className="h-4 w-5" />
          <span className="text-xs">Copy code</span>
        </>
      )}
    </div>
  )
}
