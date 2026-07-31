import React from 'react';
import { Calendar, Sparkles, CheckCircle2, ArrowRight, Diamond } from 'lucide-react';
import './BootcampCard.css';

export default function BootcampCard({ onOpenEnroll, formatPrice, seatsLeft }) {
  return (
    <section className="bootcamp-program-section" id="programs">
      <div className="container">
        <div className="section-header">
          <h2>Flagship Bootcamp Offering</h2>
          <p>
            Our flagship cohort program brings together developers for an intensive 6-week hands-on journey 
            in applied AI coding and autonomous loop engineering.
          </p>
        </div>

        <div className="corp-bootcamp-card corp-card">
          <div className="bootcamp-card-header">
            <span className="corp-brand-tag font-heading">BAZA AI TECH • OFFICIAL BOOTCAMP</span>
            <h3 className="corp-bootcamp-title">
              ADVANCED AI CODING & LOOP ENGINEERING BOOTCAMP
            </h3>
            <p className="corp-bootcamp-subtitle">Master the future of AI development</p>
          </div>

          <div className="bootcamp-card-body">
            {/* What You'll Learn Column */}
            <div className="learn-col">
              <h4 className="learn-heading font-heading">WHAT YOU'LL LEARN:</h4>
              <ul className="learn-bullet-list">
                <li>
                  <Diamond size={16} className="text-blue fill-blue" />
                  <span>Prompt Engineering & AI Agents</span>
                </li>
                <li>
                  <Diamond size={16} className="text-blue fill-blue" />
                  <span>Loop Engineering Techniques</span>
                </li>
                <li>
                  <Diamond size={16} className="text-blue fill-blue" />
                  <span>Building AI-Powered Applications</span>
                </li>
                <li>
                  <Diamond size={16} className="text-blue fill-blue" />
                  <span>Hands-on Real-World Projects</span>
                </li>
                <li>
                  <Diamond size={16} className="text-blue fill-blue" />
                  <span>Certificate of Completion</span>
                </li>
              </ul>
            </div>

            {/* Program Details Column */}
            <div className="details-col">
              <div className="detail-stat-box">
                <span className="detail-label font-heading">START DATE</span>
                <span className="detail-value text-blue">10th August 2026</span>
              </div>

              <div className="detail-stat-box">
                <span className="detail-label font-heading">TUITION INVESTMENT</span>
                <span className="detail-value text-blue">{formatPrice(20000)}</span>
              </div>

              <div className="detail-stat-box">
                <span className="detail-label font-heading">COHORT AVAILABILITY</span>
                <span className="detail-value text-blue">{seatsLeft} Seats Remaining</span>
              </div>

              <button className="btn-primary btn-bootcamp-cta" onClick={onOpenEnroll}>
                <span>ENROLL NOW - LIMITED SEATS!</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
