import React, { useState } from 'react';
import { Sparkles, Code, Cpu, Layers, CheckCircle2, Rocket, Award, Terminal, ArrowRight } from 'lucide-react';
import './Curriculum.css';

const CURRICULUM_MODULES = [
  {
    id: 1,
    title: 'Prompt Engineering & AI Agents',
    tagline: 'Module 01: Foundations of Agentic AI',
    icon: Sparkles,
    color: '#00E5FF',
    summary: 'Master zero-shot, few-shot, Chain-of-Thought (CoT), ReAct prompting patterns, and architectural design for autonomous agentic systems.',
    outcomes: [
      'Structured System Prompt Architectures & Dynamic Context Injection',
      'ReAct (Reason + Act) execution pipelines and Tool Binding',
      'Function Calling & JSON Schema enforcement across models',
      'Autonomous Memory Systems: Short-term, Long-term & RAG integration'
    ],
    tech: ['Python', 'OpenAI API', 'Anthropic Claude', 'Gemini 1.5 Pro', 'Pydantic'],
    project: 'Build a Multi-Tool Autonomous Research Agent that browses web APIs, extracts structured data, and compiles executive summaries.'
  },
  {
    id: 2,
    title: 'Loop Engineering Techniques',
    tagline: 'Module 02: Advanced Iterative Control Loops',
    icon: Cpu,
    color: '#8B5CF6',
    summary: 'Deep dive into iterative self-correction, automated code feedback loops, reflection patterns, and multi-agent consensus protocols.',
    outcomes: [
      'Building Reflection & Evaluation Loops (LLM-as-a-Judge)',
      'Self-Healing Code Execution & Stack Trace Auto-Debugging',
      'Multi-Agent Collaboration: Manager, Worker, and Auditor roles',
      'Handling infinite loops, fallback policies & token limit management'
    ],
    tech: ['LangGraph', 'AutoGen', 'CrewAI', 'Pytest', 'Docker Sandbox'],
    project: 'Engineer an Autonomous Code Optimization Loop that runs tests, identifies slow functions, and rewrites code until benchmark goals are met.'
  },
  {
    id: 3,
    title: 'Building AI-Powered Applications',
    tagline: 'Module 03: Full-Stack Production AI Systems',
    icon: Layers,
    color: '#38BDF8',
    summary: 'Transform standalone AI agent loops into production-ready web apps with low-latency streaming, vector databases, and scalable backend infrastructure.',
    outcomes: [
      'High-throughput Async API Endpoints with FastAPI & SSE streaming',
      'Vector Search Engine Architecture: Embeddings, Hybrid Search & Chunking',
      'Stateful Conversational UI components & WebSocket telemetry',
      'Enterprise Guardrails: Security, Rate Limiting, & Prompt Injection Defense'
    ],
    tech: ['FastAPI', 'React', 'Pinecone', 'ChromaDB', 'Redis', 'WebSockets'],
    project: 'Deploy a Full-Stack AI Coding Assistant Web App with real-time streaming code generation and live visual debugging terminal.'
  },
  {
    id: 4,
    title: 'Hands-on Real-World Projects',
    tagline: 'Module 04: Capstone Engineering Labs',
    icon: Rocket,
    color: '#10B981',
    summary: 'Work directly on enterprise-grade capstone projects designed in partnership with leading AI companies and startups.',
    outcomes: [
      'End-to-End Autonomous Software Engineer Agent (Auto-Dev)',
      'RAG Knowledge Base Engine over 100,000+ Internal Documents',
      'Voice & Multimodal AI Agent with Low-Latency Speech Synthesis',
      'AI Agent CI/CD Integration pipeline for GitHub Pull Requests'
    ],
    tech: ['Git / GitHub Actions', 'PostgreSQL', 'Vercel', 'AWS Lambda', 'Ollama'],
    project: 'Build and pitch your flagship Capstone AI product to industry mentors and potential employers.'
  },
  {
    id: 5,
    title: 'Certificate of Completion',
    tagline: 'Module 05: Verification & Career Acceleration',
    icon: Award,
    color: '#F59E0B',
    summary: 'Validate your skills with an official cryptographic Baza AI Tech Certificate of Completion, backed by project portfolio defense.',
    outcomes: [
      'Verifiable Cryptographic Digital Badge for LinkedIn & Portfolio',
      '1-on-1 Portfolio Defense & Technical Code Review with Instructors',
      'Exclusive Access to Baza AI Tech Alumni Network & Hiring Partners',
      'Career Mentorship: AI Developer resume review and interview coaching'
    ],
    tech: ['Verified Credentials', 'GitHub Showcase', 'LinkedIn Endorsement'],
    project: 'Defend your Capstone architecture and receive your accredited Baza AI Tech Certification.'
  }
];

export default function Curriculum() {
  const [activeModule, setActiveModule] = useState(CURRICULUM_MODULES[0]);

  return (
    <section className="curriculum-section" id="curriculum">
      <div className="container">
        <div className="section-header">
          <h2>What You'll Learn at Baza AI Tech</h2>
          <p>
            Our industry-focused curriculum covers everything from foundational prompt engineering 
            to advanced autonomous loop engineering and full-stack deployment.
          </p>
        </div>

        <div className="curriculum-layout">
          {/* Left: Module Navigation Tabs */}
          <div className="module-tabs">
            {CURRICULUM_MODULES.map((mod) => {
              const IconComponent = mod.icon;
              const isActive = activeModule.id === mod.id;

              return (
                <button
                  key={mod.id}
                  className={`module-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveModule(mod)}
                  style={{ '--tab-color': mod.color }}
                >
                  <div className="tab-icon-wrapper">
                    <IconComponent size={20} />
                  </div>
                  <div className="tab-text font-heading">
                    <span className="tab-number">0{mod.id}</span>
                    <span className="tab-title">{mod.title}</span>
                  </div>
                  <ArrowRight size={16} className="tab-arrow" />
                </button>
              );
            })}
          </div>

          {/* Right: Active Module Detailed Content */}
          <div className="module-content-card glass-card">
            <div className="module-card-header">
              <span className="module-tagline" style={{ color: activeModule.color }}>
                {activeModule.tagline}
              </span>
              <h3 className="module-card-title">{activeModule.title}</h3>
              <p className="module-card-summary">{activeModule.summary}</p>
            </div>

            <div className="outcomes-block">
              <h4 className="block-title">Key Engineering Mastery:</h4>
              <ul className="outcomes-list">
                {activeModule.outcomes.map((outcome, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} className="outcome-icon text-cyan" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tech-stack-block">
              <h4 className="block-title">Tools & Frameworks Covered:</h4>
              <div className="tech-tags font-code">
                {activeModule.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-highlight-box">
              <div className="project-header">
                <Rocket size={18} className="text-cyan" />
                <span className="project-label">Module Hands-On Project:</span>
              </div>
              <p className="project-desc">{activeModule.project}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
