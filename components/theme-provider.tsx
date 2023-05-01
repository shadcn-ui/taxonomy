"use client"

import { SessionProvider } from "./session-provider"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import * as React from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider {...props}>
            <SessionProvider>{children}</SessionProvider>
        </NextThemesProvider>
    )
}
