// src/utils/markdown.js
import matter from 'gray-matter';
import { marked } from 'marked';

// 🔧 Cross-platform safe import for all markdown files
// Using import.meta.globEager fixes the Windows "Invalid glob import" error
const blogModules = import.meta.globEager('../content/blog/*.md');
const caseModules = import.meta.globEager('../content/case-studies/*.md');

// 🧠 Parse markdown to HTML and extract frontmatter
function parseMarkdown(modules) {
  return Object.entries(modules)
    .map(([path, file]) => {
      const { data, content } = matter(file.default);
      const slug = path.split('/').pop().replace('.md', '');
      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || 'Unknown date',
        summary: data.summary || '',
        metric: data.metric || '',
        content: marked.parse(content || ''),
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const posts = parseMarkdown(blogModules);
export const cases = parseMarkdown(caseModules);
