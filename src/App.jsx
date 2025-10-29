import React from "react";
import wordmark from "./assets/img/ip-wordmark.png";
import mark from "./assets/img/ip-mark.png";

export default function App() {
  return (
    <main className="bg-hero">

      {/* HERO */}
      <section className="section min-h-screen flex flex-col items-center justify-center text-center animate-fadeIn">
        <img src={wordmark} alt="Intangible Partners" className="w-72 md:w-80 mb-2" />
        <p className="text-muted text-sm mb-8">An Ateklo company</p>

        <h1 className="text-3xl md:text-4xl font-bold max-w-2xl leading-snug mb-5">
          We identify overlooked student talent to{" "}
          <span className="text-teal">discover, create,</span> and build ventures
          that redefine how frontier{" "}
          <span className="text-blue">science solves industry’s toughest problems.</span>
        </h1>

        <p className="max-w-xl text-muted mb-8">
          Our mission is to create, build, and deploy{" "}
          <strong>intangible machines</strong> that partner with companies to create value.
        </p>

        <div className="flex gap-3">
          <a href="#contact" className="btn">Work with us</a>
          <a href="#how" className="btn-ghost">See how it works</a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section section-dark text-center">
        <h2 className="text-2xl font-bold mb-3">How it works</h2>
        <p className="text-muted mb-8">
          Our forward-deployed engineer model embeds with your team to deliver measurable value quickly.
        </p>
        <div className="grid md:grid-cols-4 gap-4 text-left">
          {[
            { title: "Discover", desc: "Identify high-leverage workflows and value capture points using our opportunity mapping." },
            { title: "Deploy", desc: "Forward-deployed engineers co-build intangible machines with your domain experts." },
            { title: "Measure", desc: "Instrumented pilots quantify efficiency gains and revenue lift from day one." },
            { title: "Scale", desc: "Hardened systems roll out across teams; learnings compound into your advantage." },
          ].map((step) => (
            <div key={step.title} className="card p-4">
              <h3 className="font-semibold text-lg mb-2 text-teal">{step.title}</h3>
              <p className="text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="section text-center">
        <h2 className="text-2xl font-bold mb-3">Our Expertise</h2>
        <p className="text-muted mb-8">Efficiency • Value capture • Value identification</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Business Operations",
              items: ["Repetitive task automation", "Administrative automation", "Custom solutions"],
            },
            {
              title: "Sales Enablement",
              items: ["Lead prospecting", "Lead qualification", "CRM improvement"],
            },
            {
              title: "Value Definition & Quantification",
              items: ["Risk & model quality analysis", "Diligence", "Portfolio strategy"],
            },
          ].map((card) => (
            <div key={card.title} className="card p-6">
              <h3 className="font-semibold text-lg text-teal mb-3">{card.title}</h3>
              <ul className="text-muted space-y-2">
                {card.items.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section-dark text-center">
        <img src={mark} alt="Intangible Partners" className="w-10 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-3">Let’s create your intangible machines.</h2>
        <p className="text-muted mb-6">We partner with operators, researchers, and leadership teams.</p>
        <a href="mailto:contact@ateklo.com" className="btn">contact@ateklo.com</a>
      </section>

      <footer className="py-6 text-center text-muted border-t border-border text-sm">
        © {new Date().getFullYear()} Intangible Partners. All rights reserved.
      </footer>
    </main>
  );
}
