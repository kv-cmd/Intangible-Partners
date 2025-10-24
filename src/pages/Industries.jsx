import React from 'react'

const INDS = [
  { name: 'SaaS & Tech', desc: 'Ticket deflection, onboarding help, internal Q&A.' },
  { name: 'Retail', desc: 'HR requests, scheduling, policy answers, store ops.' },
  { name: 'Logistics', desc: 'Dispatch assistance, document handling, status updates.' },
  { name: 'Finance', desc: 'Compliance Q&A, report prep, back-office workflows.' },
  { name: 'Healthcare', desc: 'Patient FAQs, policy guidance, onboarding.' },
  { name: 'Manufacturing', desc: 'Work order assistance, safety SOPs, shift handovers.' }
]

export default function Industries(){
  return (
    <section className="section">
      <div className="container-neo">
        <h1 className="text-3xl md:text-5xl font-bold">Industries</h1>
        <p className="mt-3 text-slate-400">We tailor assistants to the nuances of your sector.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {INDS.map(i => (
            <div key={i.name} className="card p-6">
              <h3 className="font-semibold">{i.name}</h3>
              <p className="text-slate-400 mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
