import React from 'react'
import { Link } from 'react-router-dom'
import { loadMarkdownModules } from '../utils/markdown.js'

export default function CaseStudies(){
  const [cases, setCases] = React.useState([])
  React.useEffect(()=>{
    loadMarkdownModules('/content/case-studies/*.md').then(setCases)
  },[])

  return (
    <section className="section">
      <div className="container-neo">
        <h1 className="text-3xl md:text-5xl font-bold">Case Studies</h1>
        <p className="mt-3 text-slate-400">Measurable outcomes from real deployments.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {cases.map(c => (
            <article key={c.slug} className="card p-6 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              <h3 className="font-semibold">{c.title}</h3>
              <div className="mt-1 text-accent font-extrabold">{c.metric}</div>
              <p className="text-slate-400 mt-2">{c.excerpt || ''}</p>
              <Link to={`/case-studies/${c.slug}`} className="btn-ghost mt-4 inline-block">Read more</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
