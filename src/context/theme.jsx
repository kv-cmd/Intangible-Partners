import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => (localStorage.getItem('theme') || 'dark'))
  useEffect(() => {
    const el = document.documentElement
    if (theme === 'light') el.classList.remove('dark')
    else el.classList.add('dark')
    localStorage.setItem('theme', theme)
  }, [theme])
  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
