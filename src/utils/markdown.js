import matter from 'gray-matter'

export async function loadMarkdownModules(glob) {
  const files = import.meta.glob(glob, { as: 'raw', eager: true })
  return Object.keys(files).map((path) => {
    const raw = files[path]
    const { data, content } = matter(raw)
    const slug = path.split('/').pop().replace(/\.md$/, '')
    return { slug, ...data, content }
  }).sort((a,b)=> new Date(b.date||0) - new Date(a.date||0))
}
