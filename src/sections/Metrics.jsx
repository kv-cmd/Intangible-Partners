import React from 'react'
import Counter from '../components/Counter.jsx'

const METRICS = [
  { to: 60, suffix:'%', label:'Average cost reduction' },
  { to: 10, suffix:'×', label:'Faster task completion' },
  { to: 24, suffix:'/7', label:'Always-on assistance' },
  { to: 98, suffix:'%', label:'Automated resolution (eligible cases)' }
]

export default function Metrics(){
  return (
    <section className="section">
      <div className="container-neo grid grid-cols-2 md:grid-cols-4 gap-4">
        {METRICS.map(m => (
          <div key={m.label} className="card p-6 text-left">
            <div className="text-3xl font-extrabold">
              <Counter to={m.to} duration={1400} />{m.suffix}
            </div>
            <div className="text-slate-400 text-sm">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
