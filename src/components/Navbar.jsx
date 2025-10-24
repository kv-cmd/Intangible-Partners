import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/theme.jsx'
import logo from '../assets/logo.svg'

export default function Navbar(){
  const { theme, toggle } = useTheme()
  const items = [
    { label: 'Home', to: '/' },
    { label: 'Industries', to: '/industries' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Blog', to: '/blog' }
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-neo mt-4">
        <nav className="card flex items-center justify-between px-4 md:px-6 h-14">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} className="h-7 w-auto" alt="Intangible Partners"/>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            {items.map(it => (
              <NavLink key={it.label} to={it.to} className={({isActive})=>`hover:text-accent ${isActive?'text-accent':''}`}>
                {it.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggle} className="btn-ghost text-xs">{theme==='dark'?'Light':'Dark'} Mode</button>
            <Link to="/contact" className="btn-primary text-sm">Get Started</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
