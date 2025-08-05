import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[2rem] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold/50 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-heritage-gold text-white shadow-xs hover:bg-heritage-bronze",
        destructive:
          "bg-red-600 text-white shadow-xs hover:bg-red-700 focus-visible:ring-red-500",
        outline:
          "border border-gray-300 bg-white shadow-xs hover:bg-gray-50 hover:text-gray-900",
        secondary:
          "bg-gray-100 text-gray-900 shadow-xs hover:bg-gray-200",
        ghost:
          "hover:bg-gray-100 hover:text-gray-900",
        link: "text-heritage-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-[2rem] gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-[2rem] px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-[2rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
