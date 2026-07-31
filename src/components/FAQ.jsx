import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQ.css';

const FAQS = [
  {
    question: 'Who is the Advanced AI Coding & Loop Engineering Bootcamp for?',
    answer: 'This bootcamp is designed for software developers, computer science students, tech professionals, and ambitious builders who want to master cutting-edge AI skills—including prompt engineering, autonomous agent loops, RAG, and production AI application deployment.'
  },
  {
    question: 'What prerequisites do I need to enroll?',
    answer: 'Basic familiarity with any programming language (Python, JavaScript, or C++) is recommended. You do NOT need prior Machine Learning or Deep Learning math expertise—we focus on application engineering, agent architectures, and LLM orchestration.'
  },
  {
    question: 'How is the cohort conducted starting August 10th, 2026?',
    answer: 'The bootcamp features live interactive weekend workshops, hands-on evening build labs, recorded session replays, and 24/7 dedicated mentor support via our private Discord/Slack community.'
  },
  {
    question: 'How do I pay the RWF 20,000 tuition fee?',
    answer: 'We accept Mobile Money (MTN MoMo & Airtel Money), Bank Direct Transfer, and major Credit/Debit cards (Visa/Mastercard). Multi-currency options (USD, EUR, KES) are automatically calculated at checkout.'
  },
  {
    question: 'Do I get access to code repositories and AI agent templates after graduation?',
    answer: 'Yes! All graduates receive lifetime access to our Baza AI Tech Agent Template Library, starter codebases, video lecture archives, and private Discord alumni network.'
  },
  {
    question: 'How is the Certificate of Completion verified by employers?',
    answer: 'Each certificate includes a unique cryptographic verification hash and QR code linked to your verified portfolio defense project on the Baza AI Tech credential registry.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about enrolling in Baza AI Tech.</p>
        </div>

        <div className="faq-accordion">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className={`faq-card glass-card ${isOpen ? 'active' : ''}`}
                onClick={() => setOpenIdx(isOpen ? null : index)}
              >
                <div className="faq-question">
                  <span className="faq-q-text font-heading">{faq.question}</span>
                  <ChevronDown size={20} className={`faq-icon ${isOpen ? 'rotated' : ''}`} />
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
