import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, QrCode, Sparkles } from 'lucide-react';
import './CertificatePreview.css';

export default function CertificatePreview() {
  const [studentName, setStudentName] = useState('Alex Rivera');

  return (
    <section className="certificate-section" id="certificate">
      <div className="container">
        <div className="section-header">
          <h2>Official Certificate of Completion</h2>
          <p>
            Earn a verifiable digital credential endorsed by Baza AI Tech, showcasing your mastery of advanced AI coding and loop engineering.
          </p>
        </div>

        <div className="certificate-interactive-container">
          {/* Controls: Try your name on the certificate */}
          <div className="name-customizer glass-card">
            <label className="customizer-label font-heading">
              <Sparkles size={16} className="text-cyan" />
              Preview Your Official Certificate:
            </label>
            <div className="input-group">
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value || 'Your Name')}
                placeholder="Enter your full name..."
                className="name-input font-heading"
                maxLength={30}
              />
            </div>
          </div>

          {/* Certificate Render Card */}
          <div className="certificate-frame glass-card">
            <div className="cert-border-corner top-left"></div>
            <div className="cert-border-corner top-right"></div>
            <div className="cert-border-corner bottom-left"></div>
            <div className="cert-border-corner bottom-right"></div>

            <div className="cert-inner">
              <div className="cert-header">
                <div className="cert-logo">
                  <span className="cert-brand">BAZA AI TECH</span>
                  <span className="cert-subbrand">ADVANCED AI ACADEMY</span>
                </div>
                <div className="cert-badge-gold">
                  <ShieldCheck size={28} />
                </div>
              </div>

              <div className="cert-title-block">
                <span className="cert-prefix font-heading">CERTIFICATE OF COMPLETION</span>
                <h3 className="cert-student-name font-heading">{studentName}</h3>
                <p className="cert-citation">
                  has successfully completed the intensive curriculum and demonstrated advanced mastery in
                </p>
                <h4 className="cert-course-name font-heading">
                  ADVANCED AI CODING & LOOP ENGINEERING BOOTCAMP
                </h4>
              </div>

              <div className="cert-skills-chips">
                <span>Prompt Engineering</span>
                <span>•</span>
                <span>ReAct Agents</span>
                <span>•</span>
                <span>Loop Engineering</span>
                <span>•</span>
                <span>FastAPI & RAG</span>
                <span>•</span>
                <span>Multi-Agent Consensus</span>
              </div>

              <div className="cert-footer">
                <div className="cert-signatory">
                  <div className="signature-line"></div>
                  <span className="signatory-name font-heading">Dr. Eric N.</span>
                  <span className="signatory-title">Head of AI Curriculum, Baza AI Tech</span>
                </div>

                <div className="cert-qr-block">
                  <div className="qr-box">
                    <QrCode size={36} className="text-cyan" />
                  </div>
                  <div className="qr-info font-code">
                    <span>ID: BAZA-2026-8942</span>
                    <span className="cert-status">
                      <CheckCircle2 size={12} />
                      <span className="cert-status-desktop">CRYPTOGRAPHICALLY VERIFIED</span>
                      <span className="cert-status-mobile">VERIFIED</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
