import React from 'react';
import { Target, Eye, ShieldCheck, HeartHandshake, CheckCircle2, Award, Zap } from 'lucide-react';
import './CompanyAbout.css';

export default function CompanyAbout() {
  return (
    <section className="company-about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About BazaDevSpace</h2>
          <p>
            BazaDevSpace was founded with a singular purpose: to bridge the gap between theoretical artificial 
            intelligence research and practical, high-value engineering execution.
          </p>
        </div>

        <div className="mission-vision-grid" id="mission">
          {/* Mission Card */}
          <div className="mv-card corp-card">
            <div className="mv-icon-badge">
              <Target size={28} className="text-blue" />
            </div>
            <h3 className="mv-title">Our Mission</h3>
            <p className="mv-text">
              To democratize advanced AI engineering skills across Africa and beyond. We train developers, 
              tech founders, and corporate teams to build, deploy, and scale autonomous AI systems 
              that solve high-impact, real-world problems.
            </p>
            <ul className="mv-bullets">
              <li><CheckCircle2 size={16} className="text-blue" /> Hands-on, code-first curriculum</li>
              <li><CheckCircle2 size={16} className="text-blue" /> Production-ready AI agent architectures</li>
              <li><CheckCircle2 size={16} className="text-blue" /> Direct pipeline to global tech opportunities</li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="mv-card corp-card">
            <div className="mv-icon-badge vision-badge">
              <Eye size={28} className="text-teal" />
            </div>
            <h3 className="mv-title">Our Vision</h3>
            <p className="mv-text">
              To establish BazaDevSpace as Africa’s premier center of excellence for Applied Artificial Intelligence. 
              We envision a future where local talent leads the global frontier in autonomous loop engineering, 
              LLM orchestration, and ethical AI innovation.
            </p>
            <ul className="mv-bullets">
              <li><CheckCircle2 size={16} className="text-teal" /> Establishing regional AI innovation hubs</li>
              <li><CheckCircle2 size={16} className="text-teal" /> Fostering enterprise AI transformation</li>
              <li><CheckCircle2 size={16} className="text-teal" /> Pioneering ethical & sovereign AI standards</li>
            </ul>
          </div>
        </div>

        {/* Company Core Values Grid */}
        <div className="company-values-wrapper">
          <h3 className="values-header-title">Our Core Educational Philosophy</h3>
          <div className="values-grid">
            <div className="value-card corp-card">
              <div className="value-header">
                <Zap size={22} className="text-blue" />
                <h4 className="value-title">Applied Engineering First</h4>
              </div>
              <p className="value-desc">
                We skip pure academic theory. Every lesson at BazaDevSpace centers around writing real code, 
                testing live agent loops, and deploying production web services.
              </p>
            </div>

            <div className="value-card corp-card">
              <div className="value-header">
                <ShieldCheck size={22} className="text-teal" />
                <h4 className="value-title">Trust & Accreditation</h4>
              </div>
              <p className="value-desc">
                Our certifications are backed by rigorous capstone project defenses and cryptographic verification, 
                giving employers total confidence in our alumni.
              </p>
            </div>

            <div className="value-card corp-card">
              <div className="value-header">
                <HeartHandshake size={22} className="text-indigo" />
                <h4 className="value-title">Lifetime Alumni Support</h4>
              </div>
              <p className="value-desc">
                Learning doesn't end at graduation. BazaDevSpace alumni gain lifetime access to updated course modules, 
                private Discord communities, and career mentorship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
