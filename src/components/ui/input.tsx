import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "file:text-gray-900 placeholder:text-gray-500 selection:bg-heritage-gold selection:text-white dark:bg-gray-800 border-gray-300 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:items-center file:justify-center file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:text-sm file:font-medium file:text-gray-700 file:transition-colors file:hover:bg-gray-200 file:disabled:pointer-events-none file:disabled:opacity-50 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-heritage-gold/50 focus-visible:ring-offset-2",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
