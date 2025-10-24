import React from 'react'

export default function ContactSection(){
  return (
    <section id="contact" className="section">
      <div className="container-neo grid lg:grid-cols-2 gap-8 items-start">
        <div className="card p-6">
          <h3 className="font-semibold text-lg">Contact us</h3>
          <p className="text-slate-400 mt-2">Tell us about your workflow. We’ll propose a quick win you can deploy this quarter.</p>
          <form className="mt-6 space-y-4" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label className="text-sm">Name</label>
              <input className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10" name="name" required/>
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input type="email" className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10" name="email" required/>
            </div>
            <div>
              <label className="text-sm">Company</label>
              <input className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10" name="company"/>
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea rows="5" className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10" name="message" required></textarea>
            </div>
            <button className="btn-primary">Send</button>
            <p className="text-xs text-slate-500 mt-2">We’ll get back within 1 business day.</p>
          </form>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-lg">What to expect</h3>
          <ul className="mt-4 list-disc list-inside text-slate-300 space-y-2">
            <li>15-minute discovery call</li>
            <li>Workflow fit + integration plan</li>
            <li>Pilot timeline & success metrics</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <div className="badge">No hype</div>
            <div className="badge">Outcome-focused</div>
            <div className="badge">Human-centric</div>
          </div>
        </div>
      </div>
    </section>
  )
}
