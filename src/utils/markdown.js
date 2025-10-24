// src/utils/markdown.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// 📂 Define absolute paths for markdown folders
const blogDir = path.resolve('src/content/blog');
const caseDir = path.resolve('src/content/case-studies');

// 🧠 Function to read markdown files from a directory
function loadMarkdownFiles(dir) {
  const files = fs.readdirSync(dir);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const { data, content: mdContent } = matter(content);
      return {
        slug: file.replace('.md', ''),
        title: data.title || 'Untitled',
        date: data.date || 'Unknown',
        summary: data.summary || '',
        metric: data.metric || '',
        content: marked.parse(mdContent || ''),
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// 🧩 Exports
export const posts = loadMarkdownFiles(blogDir);
export const cases = loadMarkdownFiles(caseDir);
