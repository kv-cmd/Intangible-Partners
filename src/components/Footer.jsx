import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Footer(){
  return (
    <footer className="section border-t border-white/10">
      <div className="container-neo grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="Intangible Partners" className="h-7 w-auto" />
          <p className="mt-3 text-sm text-slate-400">AI teammates that lighten workloads and elevate human potential.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><a href="#" className="hover:text-accent">Security</a></li>
            <li><a href="#" className="hover:text-accent">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-slate-300">hello@intangible.partners</p>
          <p className="text-sm text-slate-300">Global / Remote</p>
        </div>
      </div>
      <div className="container-neo mt-10 text-xs text-slate-500">© 2025 Intangible Partners. All rights reserved.</div>
    </footer>
  )
}
