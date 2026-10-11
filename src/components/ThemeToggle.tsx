"use client"

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-edge text-subtle hover:text-signal hover:border-signal/60 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  )
}

export default ThemeToggle
