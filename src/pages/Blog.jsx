import React from 'react'
import { Link } from 'react-router-dom'
import { loadMarkdownModules } from '../utils/markdown.js'

export default function Blog(){
  const [posts, setPosts] = React.useState([])
  React.useEffect(()=>{
    loadMarkdownModules('/content/blog/*.md').then(setPosts)
  },[])

  return (
    <section className="section">
      <div className="container-neo">
        <h1 className="text-3xl md:text-5xl font-bold">Blog & Insights</h1>
        <p className="mt-3 text-slate-400">Thoughtful, practical guidance on human-centric automation.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {posts.map(p => (
            <article key={p.slug} className="card p-6">
              <h3 className="font-semibold">{p.title}</h3>
              <div className="text-slate-400 text-sm">{p.date}</div>
              <p className="text-slate-400 mt-2">{p.summary}</p>
              <Link to={`/blog/${p.slug}`} className="btn-ghost mt-4 inline-block">Read</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
