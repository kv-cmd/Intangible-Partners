// src/utils/markdown.js
import matter from 'gray-matter'
import { marked } from 'marked'

// 🧩 Import all markdown files (blog + case studies) eagerly for production builds
// Using absolute paths (starting from /src) avoids Windows/Vite import-glob issues

const blogPosts = import.meta.glob('/src/content/blog/*.md', { eager: true })
const caseStudies = import.meta.glob('/src/content/case-studies/*.md', { eager: true })

// 🧠 Helper function to parse markdown files into usable objects
function parseMarkdown(modules) {
  return Object.entries(modules).map(([path, file]) => {
    const { data, content } = matter(file.default)
    const slug = path.split('/').pop().replace('.md', '')
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || 'Unknown date',
      summary: data.summary || '',
      metric: data.metric || '',
      content: marked(content || '')
    }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))
}

// 📚 Parsed data exports
export const posts = parseMarkdown(blogPosts)
export const cases = parseMarkdown(caseStudies)
