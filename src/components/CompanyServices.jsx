import React from 'react';
import { GraduationCap, Building2, Users, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import TypewriterText from './TypewriterText';
import './CompanyServices.css';

export default function CompanyServices({ onOpenEnroll }) {
  return (
    <section className="company-services-section" id="services">
      <div className="container">
        <div className="section-header" id="enterprise">
          <h2>BazaDevSpace Programs & Services</h2>
          <TypewriterText text="Whether you are an individual engineer accelerating your career or an enterprise transforming your engineering organization, BazaDevSpace provides specialized AI training solutions." />
        </div>

        {/* Corporate Services Grid */}
        <div className="services-grid">
          {/* Card 1: Bootcamps */}
          <div className="service-card corp-card">
            <div className="service-icon-box">
              <GraduationCap size={24} className="text-blue" />
            </div>
            <h3 className="service-title">Public AI Engineering Bootcamps</h3>
            <p className="service-desc">
              Intensive, cohort-based training programs designed for developers wanting to master prompt engineering, 
              autonomous agent loops, and RAG architectures.
            </p>
            <ul className="service-list">
              <li><CheckCircle2 size={16} className="text-blue" /> Cohort-based live weekend labs</li>
              <li><CheckCircle2 size={16} className="text-blue" /> Verifiable Certificate of Completion</li>
              <li><CheckCircle2 size={16} className="text-blue" /> Capstone project portfolio defense</li>
            </ul>
            <button className="btn-secondary service-btn" onClick={onOpenEnroll}>
              <span>View Bootcamps</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Card 2: Enterprise Team Training with Photo */}
          <div className="service-card corp-card featured-service">
            <div className="service-icon-box">
              <Building2 size={24} className="text-blue" />
            </div>
            <h3 className="service-title">Enterprise Corporate Training</h3>
            <p className="service-desc">
              Custom AI upskilling programs tailored to your organization's tech stack, security policies, 
              and internal developer workflows.
            </p>
            <div className="service-img-wrapper">
              <img
                src="/baza_ai_enterprise.webp"
                alt="Enterprise AI Workshop by BazaDevSpace"
                className="service-img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <a href="mailto:info@bazadevspace.com?subject=Enterprise%20Training%20Inquiry" className="btn-primary service-btn">
              <span>Request Enterprise Proposal</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 3: Executive AI Leadership */}
          <div className="service-card corp-card">
            <div className="service-icon-box">
              <Users size={24} className="text-blue" />
            </div>
            <h3 className="service-title">Executive AI Leadership Workshops</h3>
            <p className="service-desc">
              Strategic, high-level briefings for CTOs, VPs of Engineering, and Product Leaders on AI adoption, 
              governance, LLM cost management, and security.
            </p>
            <ul className="service-list">
              <li><CheckCircle2 size={16} className="text-blue" /> 1-2 day intensive executive retreats</li>
              <li><CheckCircle2 size={16} className="text-blue" /> ROI & LLM cost optimization modeling</li>
              <li><CheckCircle2 size={16} className="text-blue" /> Security & data privacy compliance</li>
            </ul>
            <a href="mailto:info@bazadevspace.com?subject=Executive%20Workshop%20Inquiry" className="btn-secondary service-btn">
              <span>Book Executive Briefing</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 4: Talent Sourcing */}
          <div className="service-card corp-card">
            <div className="service-icon-box">
              <Briefcase size={24} className="text-blue" />
            </div>
            <h3 className="service-title">AI Talent Sourcing & Placement</h3>
            <p className="service-desc">
              We connect leading technology companies with vetted, top-tier BazaDevSpace graduates 
              who have proven mastery in agent loop engineering.
            </p>
            <ul className="service-list">
              <li><CheckCircle2 size={16} className="text-blue" /> Pre-vetted code portfolio verification</li>
              <li><CheckCircle2 size={16} className="text-blue" /> Direct hiring partner introductions</li>
              <li><CheckCircle2 size={16} className="text-blue" /> Contract & full-time placement</li>
            </ul>
            <a href="mailto:info@bazadevspace.com?subject=Talent%20Hiring%20Inquiry" className="btn-secondary service-btn">
              <span>Partner as Employer</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
