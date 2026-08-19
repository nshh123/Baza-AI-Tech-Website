import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Users, Award, Briefcase, Sparkles, Building2 } from 'lucide-react';
import './Hero.css';

const HERO_SLIDES = [
  {
    src: '/baza_ai_classroom.webp',
    alt: 'BazaDevSpace Classroom Learning Environment'
  },
  {
    src: '/student_header_programs.webp',
    alt: 'BazaDevSpace Programs & Services'
  },
  {
    src: '/student_header_instructors.webp',
    alt: 'Learn From Experienced AI Practitioners'
  },
  {
    src: '/student_header_simulator.webp',
    alt: 'Interactive AI Loop Engineering Simulator'
  },
  {
    src: '/student_header_curriculum.webp',
    alt: "What You'll Learn at BazaDevSpace"
  }
];

export default function Hero({ onOpenEnroll, formatPrice, seatsLeft }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="corporate-hero" id="overview">
      <div className="container hero-container-grid">
        {/* Left Text Column */}
        <div className="hero-text-col">
          <h1 className="hero-title">
            Empowering the Next Generation of <span className="text-highlight">AI Engineers</span> & Tech Leaders
          </h1>

          <p className="hero-subtitle">
            <strong>BazaDevSpace</strong> provides hands-on, enterprise-grade AI training. 
            We teach software developers and organizations how to master prompt engineering, build autonomous 
            agent loops, and deploy production-ready AI applications.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary" onClick={onOpenEnroll}>
              <span>Explore Flagship Bootcamp</span>
              <ArrowRight size={18} />
            </button>

            <a href="#enterprise" className="btn-secondary">
              <Building2 size={18} />
              <span>Enterprise Custom Training</span>
            </a>
          </div>

          {/* Corporate Impact Metrics */}
          <div className="hero-stats-row">
            <div className="stat-box">
              <span className="stat-number font-heading">500+</span>
              <span className="stat-label">Graduates Trained</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box">
              <span className="stat-number font-heading">94%</span>
              <span className="stat-label">Career Growth</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box">
              <span className="stat-number font-heading">15+</span>
              <span className="stat-label">Enterprise Partners</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box">
              <span className="stat-number font-heading">4.9/5</span>
              <span className="stat-label">Student Rating</span>
            </div>
          </div>
        </div>

        {/* Right Photo Column showcasing sliding showcase photography */}
        <div className="hero-image-col">
          <div className="image-frame-wrapper">
            <div className="hero-slideshow-container">
              <div 
                className="hero-slideshow-track" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {HERO_SLIDES.map((slide, idx) => (
                  <div key={idx} className="hero-slide-item">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="hero-classroom-img"
                      loading={idx === 0 ? "eager" : "lazy"}
                      fetchpriority={idx === 0 ? "high" : "auto"}
                      decoding="async"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom-Right Slide Indicator Bar */}
              <div className="hero-slide-dots" aria-label="Slideshow pagination">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    className={`slide-dot ${idx === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Overlay Trust Pill */}
            <div className="hero-trust-pill corp-card">
              <div className="pill-icon">
                <Sparkles size={20} className="text-blue" />
              </div>
              <div className="pill-info">
                <span className="pill-title">Next Cohort Starts Aug 10, 2026</span>
                <span className="pill-sub">Tuition: {formatPrice(20000)} • Limited Seats</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
