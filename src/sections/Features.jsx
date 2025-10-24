import React from 'react'

const FEATS = [
  ['Automate Routine Tasks','Scheduling, data entry, approvals and FAQs—off your plate.'],
  ['Always-Available Support','Answers questions, resolves requests, and keeps work moving 24/7.'],
  ['Seamless Integrations','Fits your tools and workflows. No disruption—just a boost.'],
  ['Enterprise-grade', 'Security, privacy and auditability from day one.']
]

export default function Features(){
  return (
    <section id="features" className="section">
      <div className="container-neo">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Built for real work—<span className="text-accent">not hype</span></h2>
          <p className="mt-3 text-slate-400">Human-friendly automation your team will love.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATS.map(([t,d])=> (
            <div key={t} className="card p-6">
              <h3 className="font-semibold text-lg">{t}</h3>
              <p className="text-slate-400 mt-2">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
