import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="section text-center">
      <div className="container-neo">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="text-slate-400 mt-2">This page wandered off.</p>
        <Link to="/" className="btn-primary mt-6 inline-block">Go Home</Link>
      </div>
    </section>
  )
}
