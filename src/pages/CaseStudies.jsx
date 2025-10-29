import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../utils/contentData';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
          Case Studies
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, idx) => (
            <Link
              to={`/case-studies/${study.id}`}
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                {study.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {study.summary}
              </p>
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
