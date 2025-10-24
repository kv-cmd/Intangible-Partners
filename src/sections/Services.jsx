import React from 'react'

const SVCS = [
  ['AI Agents','Understanding requests and autonomously handling common tasks.'],
  ['Workflow Automation','Connect tools, route approvals, and orchestrate operations.'],
  ['Knowledge Assistant','Answers policy questions and surfaces SOPs instantly.'],
  ['Support Copilot','Autosuggests replies and resolves simple cases end-to-end.'],
  ['Document Automation','Classify, extract and validate documents with audit trails.'],
  ['Custom Solutions','Tailored assistants for your unique workflows.']
]

export default function Services(){
  return (
    <section id="services" className="section">
      <div className="container-neo">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Our Services</h2>
          <p className="mt-3 text-slate-400">Comprehensive automation, thoughtfully delivered.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SVCS.map(([t,d]) => (
            <article key={t} className="card p-6 hover:shadow-glow transition">
              <h3 className="font-semibold">{t}</h3>
              <p className="text-slate-400 mt-2">{d}</p>
              <a href="/contact" className="btn-ghost mt-4 inline-block">Talk to us</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
