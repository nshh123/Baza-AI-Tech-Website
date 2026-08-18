import React from 'react';
import { UserCheck, Award, Sparkles, BookOpen } from 'lucide-react';
import './Instructors.css';

const INSTRUCTORS = [
  {
    name: 'Amina K.',
    role: 'Head of AI Agent Systems',
    bio: 'Ex-Senior ML Engineer with 8+ years developing autonomous agent frameworks and production LLM orchestration pipelines.',
    expertise: ['Loop Engineering', 'ReAct Architectures', 'LangGraph'],
    img: '/baza_ai_classroom.webp'
  },
  {
    name: 'Dr. Eric N.',
    role: 'Academic Director',
    bio: 'PhD in Computer Science, passionate about empowering African software developers with frontier AI application skills.',
    expertise: ['Prompt Optimization', 'LLM Fine-Tuning', 'AI Ethics'],
    img: '/student_header_curriculum.webp'
  },
  {
    name: 'David M.',
    role: 'Lead Full-Stack AI Instructor',
    bio: 'Specialist in high-throughput FastAPI streaming services, Vector Databases, and production RAG pipeline deployment.',
    expertise: ['FastAPI & SSE', 'Pinecone & RAG', 'React AI UIs'],
    img: '/student_header_simulator.webp'
  }
];

export default function Instructors() {
  return (
    <section className="instructors-section" id="instructors">
      <div className="container">
        <div className="section-header">
          <h2>Learn From Experienced AI Practitioners</h2>
          <p>
            Our instructors are active AI engineers and researchers who build production AI systems daily. 
            Get direct mentorship and code reviews throughout your journey.
          </p>
        </div>

        <div className="instructors-grid">
          {INSTRUCTORS.map((inst, index) => (
            <div key={index} className="instructor-card corp-card">
              <div className="instructor-img-wrapper">
                <img 
                  src={inst.img} 
                  alt={inst.name} 
                  className="instructor-img" 
                  loading="lazy" 
                  decoding="async" 
                />
              </div>
              <div className="instructor-body">
                <h3 className="instructor-name">{inst.name}</h3>
                <span className="instructor-role font-heading">{inst.role}</span>
                <p className="instructor-bio">{inst.bio}</p>

                <div className="instructor-expertise">
                  <span className="expertise-label">Specializations:</span>
                  <div className="expertise-tags font-code">
                    {inst.expertise.map((exp, idx) => (
                      <span key={idx} className="exp-tag">{exp}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
