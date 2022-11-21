import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

// Since we're already setting NEXTAUTH_URL, we can use same to create absolute URLs.
export function absoluteUrl(path: string) {
  return `${process.env.NEXTAUTH_URL}${path}`
}
