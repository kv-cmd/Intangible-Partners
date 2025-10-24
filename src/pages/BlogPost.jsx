import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts } from '../utils/contentData'

// ✅ Blog post detail page
export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center text-gray-200">
        <h1 className="text-4xl font-bold mb-2">404 - Blog Post Not Found</h1>
        <p className="text-lg mb-6">The post you’re looking for doesn’t exist.</p>
        <Link to="/blog" className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-all">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-gray-100 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="text-indigo-400 hover:text-indigo-300 mb-4 inline-block transition-all"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          {post.title}
        </h1>
        <p className="text-gray-400 text-sm mb-2">{post.date}</p>
        <p className="text-lg text-indigo-300 font-semibold mb-8">{post.author}</p>

        <div
          className="prose prose-invert prose-lg max-w-none leading-relaxed text-gray-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12">
          <Link
            to="/blog"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition-all text-white font-semibold shadow-lg"
          >
            ← Read More Articles
          </Link>
        </div>
      </div>
    </div>
  )
}