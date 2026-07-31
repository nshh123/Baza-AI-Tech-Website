import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, ShieldCheck, CreditCard, Smartphone, User, Mail, Phone, Calendar, ArrowRight, Check } from 'lucide-react';
import './EnrollmentModal.css';

export default function EnrollmentModal({ isOpen, onClose, currency, formatPrice, onEnrollSuccess, seatsLeft }) {
  const [step, setStep] = useState(1);
  const [tier, setTier] = useState('standard');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: 'momo'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enrollmentComplete, setEnrollmentComplete] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00E5FF', '#8B5CF6', '#38BDF8', '#10B981']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `BAZA-ENROLL-${Math.floor(100000 + Math.random() * 900000)}`;
      setEnrollmentId(generatedId);
      setEnrollmentComplete(true);
      onEnrollSuccess();
      triggerConfetti();
    }, 1500);
  };

  const handleCloseModal = () => {
    setStep(1);
    setEnrollmentComplete(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleCloseModal}>
          <X size={20} />
        </button>

        {!enrollmentComplete ? (
          <>
            <div className="modal-header">
              <h2 className="modal-title">Secure Your Seat at Baza AI Tech</h2>
              <p className="modal-subtitle">
                {seatsLeft} seats remaining for the upcoming Advanced AI Coding & Loop Engineering Bootcamp.
              </p>
            </div>

            {/* Stepper Header */}
            <div className="modal-stepper">
              <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1. Select Tier</div>
              <div className="step-line"></div>
              <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2. Your Info</div>
              <div className="step-line"></div>
              <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3. Checkout</div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1: Select Tier */}
              {step === 1 && (
                <div className="step-content">
                  <div className="tier-cards-grid">
                    <div
                      className={`tier-card glass-card-solid ${tier === 'standard' ? 'selected' : ''}`}
                      onClick={() => setTier('standard')}
                    >
                      <div className="tier-badge">Standard Bootcamp</div>
                      <div className="tier-price font-heading text-cyan">{formatPrice(20000)}</div>
                      <span className="tier-subtext">Official Flyer Tuition</span>
                      <ul className="tier-features">
                        <li><Check size={14} className="text-cyan" /> Full Cohort Live & Recorded Access</li>
                        <li><Check size={14} className="text-cyan" /> Prompt & Loop Engineering Labs</li>
                        <li><Check size={14} className="text-cyan" /> Certificate of Completion</li>
                        <li><Check size={14} className="text-cyan" /> Discord Community Access</li>
                      </ul>
                    </div>

                    <div
                      className={`tier-card glass-card-solid ${tier === 'vip' ? 'selected' : ''}`}
                      onClick={() => setTier('vip')}
                    >
                      <div className="tier-badge vip-badge">VIP Mentorship</div>
                      <div className="tier-price font-heading text-cyan">{formatPrice(35000)}</div>
                      <span className="tier-subtext">Standard + Career Coaching</span>
                      <ul className="tier-features">
                        <li><Check size={14} className="text-cyan" /> Everything in Standard</li>
                        <li><Check size={14} className="text-cyan" /> 1-on-1 Code Review Sessions</li>
                        <li><Check size={14} className="text-cyan" /> AI Resume & Portfolio Audit</li>
                        <li><Check size={14} className="text-cyan" /> Priority Mentorship Queue</li>
                      </ul>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-primary modal-next-btn"
                    onClick={() => setStep(2)}
                  >
                    <span>Continue to Student Info</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}

              {/* STEP 2: Student Details */}
              {step === 2 && (
                <div className="step-content">
                  <div className="form-group">
                    <label><User size={16} /> Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label><Mail size={16} /> Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label><Phone size={16} /> Phone Number (MoMo / WhatsApp)</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +250 788 123 456"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="step-buttons">
                    <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => {
                        if (formData.fullName && formData.email) setStep(3);
                      }}
                    >
                      <span>Proceed to Payment</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Payment Choice & Confirm */}
              {step === 3 && (
                <div className="step-content">
                  <div className="summary-banner glass-card-solid">
                    <span className="summary-label">ORDER SUMMARY</span>
                    <div className="summary-row">
                      <span>{tier === 'vip' ? 'VIP Mentorship Pass' : 'Standard Bootcamp Pass'}</span>
                      <span className="font-heading text-cyan">{formatPrice(tier === 'vip' ? 35000 : 20000)}</span>
                    </div>
                  </div>

                  <div className="payment-options">
                    <label className={`payment-option ${formData.paymentMethod === 'momo' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="momo"
                        checked={formData.paymentMethod === 'momo'}
                        onChange={handleInputChange}
                      />
                      <Smartphone size={20} className="text-cyan" />
                      <span>Mobile Money (MTN MoMo / Airtel Money)</span>
                    </label>

                    <label className={`payment-option ${formData.paymentMethod === 'card' ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                      />
                      <CreditCard size={20} className="text-cyan" />
                      <span>Bank Card / Wire Transfer</span>
                    </label>
                  </div>

                  <div className="step-buttons">
                    <button type="button" className="btn-secondary" onClick={() => setStep(2)}>
                      Back
                    </button>
                    <button type="submit" className="btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>Processing Registration...</span>
                      ) : (
                        <>
                          <ShieldCheck size={18} />
                          <span>Confirm Enrollment</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        ) : (
          /* Enrollment Success Display */
          <div className="success-modal-body">
            <div className="success-icon-badge">
              <CheckCircle2 size={54} className="text-cyan animate-pulse-glow" />
            </div>

            <h2 className="success-title">Enrollment Confirmed!</h2>
            <p className="success-subtext">
              Welcome aboard, <strong>{formData.fullName}</strong>! You are officially reserved for the 
              <strong> August 10th, 2026</strong> Baza AI Tech cohort.
            </p>

            <div className="receipt-card glass-card-solid">
              <div className="receipt-row">
                <span>Registration ID:</span>
                <span className="font-code text-cyan">{enrollmentId}</span>
              </div>
              <div className="receipt-row">
                <span>Start Date:</span>
                <span>10th August 2026</span>
              </div>
              <div className="receipt-row">
                <span>Pass Tier:</span>
                <span>{tier === 'vip' ? 'VIP Mentorship' : 'Standard Bootcamp'}</span>
              </div>
              <div className="receipt-row">
                <span>Confirmation Email:</span>
                <span>{formData.email}</span>
              </div>
            </div>

            <p className="email-note">
              We have dispatched your onboarding pack and Discord invite link to <strong>{formData.email}</strong>.
            </p>

            <button className="btn-primary btn-full-width" onClick={handleCloseModal}>
              <span>Done - Go to Portal</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
