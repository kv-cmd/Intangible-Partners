import React from 'react'

export default function About(){
  return (
    <section className="section">
      <div className="container-neo">
        <h1 className="text-3xl md:text-5xl font-bold">About</h1>
        <p className="mt-3 text-slate-400 max-w-3xl">
          We’re builders focused on human-centric automation. Our mission is simple:
          give people more time for meaningful work.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="card p-6">
            <h3 className="font-semibold">Our Philosophy</h3>
            <p className="text-slate-400 mt-2">
              AI should elevate, not replace. We measure success by time saved and smiles earned, not just tickets closed.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Security & Privacy</h3>
            <p className="text-slate-400 mt-2">
              Enterprise-grade controls, least-privilege integration, and transparent data retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
