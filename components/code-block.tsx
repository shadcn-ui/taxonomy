"use client"

import { cn, copyCodeToClipboard, getContentFromChildren } from "@/lib/utils"
import { CopyCodeButton } from "@/components/copy-code-button"

interface CodeBlockProps {
  className?: string
  children?: React.ReactNode
}

export function CodeBlock({ className, children }: CodeBlockProps) {
  const handleCopy = async () => {
    const content = getContentFromChildren(children)
    await copyCodeToClipboard(content)
  }

  return (
    <div className="flex flex-col">
      <div className="-my-5 mr-1 flex items-center justify-end space-x-1">
        <CopyCodeButton onCopy={handleCopy} />
      </div>
      <pre
        className={cn(
          "mt-6 mb-4 overflow-x-auto rounded-lg bg-slate-900 py-4",
          className
        )}
      >
        {children}
      </pre>
    </div>
  )
}
