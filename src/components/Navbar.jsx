import React, { useState, useEffect, useRef } from 'react';
import { Building2, Sparkles, Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenEnroll, currency, setCurrency, seatsLeft }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > 60 && currentScrollY > lastScrollY.current && !mobileMenuOpen) {
        setNavHidden(true);
      } else if (currentScrollY < lastScrollY.current || currentScrollY <= 20) {
        setNavHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${navHidden ? 'navbar-hidden' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          <div className="logo-badge">
            <img src="/baza_logo_badge.webp" alt="BazaDevSpace Logo" className="logo-img" />
          </div>
          <div className="logo-text">
            <span className="logo-title">BAZADEVSPACE</span>
            <span className="logo-subtitle">AI ACADEMY & ENTERPRISE</span>
          </div>
        </a>

        {/* Streamlined Desktop Links */}
        <nav className="navbar-links desktop-only">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#programs">Bootcamp</a>
          <a href="#simulator">Simulator</a>
          <a href="#instructors">Instructors</a>
          <a href="#faq">FAQ</a>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions desktop-only">
          <div className="currency-selector">
            <span className="currency-label">Currency:</span>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="RWF">RWF (Fr)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="KES">KES (KSh)</option>
            </select>
          </div>

          <button className="btn-primary btn-nav" onClick={onOpenEnroll}>
            <Sparkles size={16} />
            <span>Apply Now</span>
            <span className="seats-badge">{seatsLeft} seats</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-hamburger-btn mobile-only" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-drawer-links">
            <a href="#about" onClick={handleNavClick}>About Us</a>
            <a href="#mission" onClick={handleNavClick}>Mission & Vision</a>
            <a href="#services" onClick={handleNavClick}>Enterprise Services</a>
            <a href="#programs" onClick={handleNavClick}>Flagship Bootcamp</a>
            <a href="#simulator" onClick={handleNavClick}>Loop Simulator</a>
            <a href="#curriculum" onClick={handleNavClick}>Syllabus & Curriculum</a>
            <a href="#instructors" onClick={handleNavClick}>Instructors</a>
            <a href="#faq" onClick={handleNavClick}>FAQ</a>
          </nav>

          <div className="mobile-drawer-actions">
            <div className="currency-selector mobile-currency">
              <span className="currency-label"><Globe size={14} /> Select Currency:</span>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="RWF">RWF (Fr)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="KES">KES (KSh)</option>
              </select>
            </div>

            <button className="btn-primary btn-full-mobile" onClick={() => { setMobileMenuOpen(false); onOpenEnroll(); }}>
              <Sparkles size={18} />
              <span>Apply Now ({seatsLeft} seats remaining)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
