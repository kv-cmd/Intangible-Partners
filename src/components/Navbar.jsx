import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-glass border-b border-white/10 flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-display font-bold text-white tracking-wide">
          Intangible Partners
        </h1>
      </div>

      <div className="flex items-center gap-6 text-gray-200 font-medium">
        <Link to="/" className="hover:text-accent transition">Home</Link>
        <Link to="/case-studies" className="hover:text-accent transition">Case Studies</Link>
        <Link to="/blog" className="hover:text-accent transition">Blog</Link>
        <Link to="/contact" className="hover:text-accent transition">Contact</Link>

        <button
          onClick={toggleTheme}
          className="ml-4 p-2 border border-white/20 rounded-lg hover:border-accent transition"
          title="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}
