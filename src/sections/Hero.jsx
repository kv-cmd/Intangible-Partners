import React from 'react'
import WebGLHero from '../components/WebGLHero.jsx'

export default function Hero(){
  return (
    <section id="top" className="section pt-36 overflow-hidden relative">
      <div className="fixed inset-0 -z-10 bg-stage" />
      <WebGLHero />
      <div className="container-neo text-center">
        <span className="badge mb-5">Your Invisible Teammate</span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Empower people.<br className="hidden md:block" /> Automate the busywork.
        </h1>
        <p className="mt-5 max-w-3xl mx-auto text-slate-300">
          Human-centric AI that quietly handles repetitive tasks so your team can focus on meaningful work.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/contact" className="btn-primary">Request a Demo</a>
          <a href="/case-studies" className="btn-ghost">See outcomes</a>
        </div>
      </div>
    </section>
  )
}
