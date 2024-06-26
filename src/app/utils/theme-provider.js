'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'


const ThemeProviders= ({children,...props}) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}

export default ThemeProviders