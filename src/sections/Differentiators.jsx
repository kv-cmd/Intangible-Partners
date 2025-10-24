import React from 'react'

const DIFFS = [
  ['Human-centric by design','We empower people—never replace them. Your team stays in control; our AI handles the grind.'],
  ['Outcomes, not jargon','We speak in results: time saved, happier teams, faster resolution.'],
  ['Invisible when you want it','A calm background helper that fits your workflow without adding noise.'],
  ['Transparent & measurable','30-day impact reports on tasks automated and time saved.']
]

export default function Differentiators(){
  return (
    <section id="differentiators" className="section">
      <div className="container-neo grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold">Why we’re different</h2>
          <p className="mt-3 text-slate-400">We’re not another “AI employee.” We’re your invisible teammate—respectful, reliable, outcome-driven.</p>
          <ul className="mt-6 space-y-4">
            {DIFFS.map(([t,d]) => (
              <li key={t} className="card p-5 hover:shadow-glow transition">
                <h3 className="font-semibold">{t}</h3>
                <p className="text-slate-400">{d}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-lg">What you’ll notice in 30 days</h3>
          <ul className="mt-4 list-disc list-inside text-slate-300 space-y-2">
            <li>Inbox load down, response times up.</li>
            <li>Repetitive requests resolved automatically.</li>
            <li>Employees spend more time on meaningful work.</li>
            <li>Clear reporting on time saved & tasks automated.</li>
          </ul>
          <a href="/contact" className="btn-primary mt-6 inline-block">See it in action</a>
        </div>
      </div>
    </section>
  )
}
