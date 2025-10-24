import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { loadMarkdownModules } from '../utils/markdown.js'

export default function CaseStudyDetail(){
  const { slug } = useParams()
  const [cs, setCS] = React.useState(null)
  React.useEffect(()=>{
    loadMarkdownModules('/content/case-studies/*.md').then(all => setCS(all.find(p=>p.slug===slug)))
  },[slug])
  if(!cs) return <section className="section"><div className="container-neo">Loading…</div></section>
  return (
    <section className="section">
      <div className="container-neo">
        <Link to="/case-studies" className="btn-ghost mb-6 inline-block">← Back</Link>
        <h1 className="text-3xl md:text-5xl font-bold">{cs.title}</h1>
        <div className="text-accent font-extrabold mt-2">{cs.metric}</div>
        <div className="card p-6 mt-6 prose prose-invert max-w-none">
          <ReactMarkdown>{cs.content}</ReactMarkdown>
        </div>
      </div>
    </section>
  )
}
