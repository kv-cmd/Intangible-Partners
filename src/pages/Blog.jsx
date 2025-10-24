import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../utils/contentData'

// ✅ Blog page using static data (no markdown import issues)
export default function Blog() {
  return (
    <div className="bg-gradient-to-b from-gray-950 to-black min-h-screen text-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Insights & Stories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-indigo-800 hover:to-purple-900 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-indigo-300 transition-all">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 mb-3">{post.date}</p>
              <p className="text-gray-300 mb-4 line-clamp-3">{post.summary}</p>
              <span className="inline-block text-indigo-400 font-medium group-hover:translate-x-1 transition-all">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}