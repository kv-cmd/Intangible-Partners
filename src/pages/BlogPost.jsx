import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { loadMarkdownModules } from '../utils/markdown.js'

export default function BlogPost(){
  const { slug } = useParams()
  const [post, setPost] = React.useState(null)
  React.useEffect(()=>{
    loadMarkdownModules('/content/blog/*.md').then(all => setPost(all.find(p=>p.slug===slug)))
  },[slug])
  if(!post) return <section className="section"><div className="container-neo">Loading…</div></section>
  return (
    <section className="section">
      <div className="container-neo">
        <Link to="/blog" className="btn-ghost mb-6 inline-block">← Back</Link>
        <h1 className="text-3xl md:text-5xl font-bold">{post.title}</h1>
        <div className="text-slate-400 mt-2">{post.date}</div>
        <div className="card p-6 mt-6 prose prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </section>
  )
}
