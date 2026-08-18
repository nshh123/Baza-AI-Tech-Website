import React, { useState } from 'react';
import { CheckCircle2, QrCode, Sparkles } from 'lucide-react';
import './CertificatePreview.css';

export default function CertificatePreview() {
  const [studentName, setStudentName] = useState('Alex Rivera');

  return (
    <section className="certificate-section" id="certificate">
      <div className="container">
        <div className="section-header">
          <h2>Official Certificate of Completion</h2>
          <p>
            Earn a verifiable digital credential endorsed by BazaDevSpace, showcasing your mastery of advanced AI coding and loop engineering.
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
          <div className="certificate-frame glass-card" onContextMenu={(e) => e.preventDefault()}>
            <div className="cert-border-corner top-left"></div>
            <div className="cert-border-corner top-right"></div>
            <div className="cert-border-corner bottom-left"></div>
            <div className="cert-border-corner bottom-right"></div>

            {/* Anti-Forgery Specimen Watermark */}
            <div className="cert-watermark" aria-hidden="true">
              <span>SPECIMEN • PREVIEW ONLY</span>
            </div>

            <div className="cert-inner">
              <div className="cert-header">
                <div className="cert-logo">
                  <span className="cert-brand">BAZADEVSPACE</span>
                  <span className="cert-subbrand">ADVANCED AI ACADEMY</span>
                </div>
                <div className="cert-badge-gold">
                  <img src="/baza_logo_badge.webp" alt="BazaDevSpace Official Seal" className="cert-logo-img" />
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
                  <span className="signatory-name font-heading">Dr. Eric N.</span>
                  <span className="signatory-title">Head of AI Curriculum, BazaDevSpace</span>
                  <div className="signature-wrap">
                    <svg className="cert-signature-svg" viewBox="0 0 230 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M 18 42 C 18 24, 22 14, 28 14 C 36 14, 42 24, 38 38 C 35 46, 26 48, 18 44 M 42 36 C 46 28, 52 30, 56 32 C 58 35, 54 40, 52 44 M 58 43 A 1.5 1.5 0 1 1 58 40 A 1.5 1.5 0 1 1 58 43 M 72 20 C 80 14, 88 16, 86 24 C 84 28, 76 30, 72 30 C 82 30, 92 32, 88 40 C 84 46, 72 48, 66 44 M 92 38 C 96 30, 102 32, 106 34 C 108 37, 104 42, 102 44 M 108 38 C 112 32, 116 34, 118 36 C 119 39, 116 43, 114 45 M 115 25 A 1.5 1.5 0 1 1 115 22 A 1.5 1.5 0 1 1 115 25 M 122 36 C 126 32, 130 34, 132 36 C 134 39, 128 43, 124 45 M 142 16 C 138 28, 132 44, 130 50 M 136 22 C 146 32, 156 42, 164 48 M 160 22 C 158 32, 156 42, 154 50 M 168 49 A 1.5 1.5 0 1 1 168 46 A 1.5 1.5 0 1 1 168 49 M 32 53 C 75 49, 135 47, 190 49 C 208 50, 218 46, 208 42 C 194 36, 184 52, 202 54 C 212 55, 220 50, 226 46"
                        stroke="#0f172a"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="cert-qr-block">
                  <div className="qr-box">
                    <QrCode size={36} className="text-cyan" />
                  </div>
                  <div className="qr-info font-code">
                    <span>ID: BAZADEVSPACE-2026-8942</span>
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
