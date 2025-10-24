import React from 'react'
import { Link } from 'react-router-dom'
import { cases as caseData } from '../utils/contentData.js'

export default function CaseStudies() {
  // Keep React state logic for consistency
  const [cases, setCases] = React.useState([])

  React.useEffect(() => {
    // Load static data (no markdown imports needed)
    setCases(caseData)
  }, [])

  return (
    <div className="case-studies-container">
      <h1 className="page-title">Case Studies</h1>
      <div className="case-studies-grid">
        {cases.map((item) => (
          <div key={item.slug} className="case-card">
            <h2 className="case-title">{item.title}</h2>
            <p className="case-summary">{item.summary}</p>
            <p className="case-metric"><strong>{item.metric}</strong></p>
            <Link to={`/case/${item.slug}`} className="btn">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
