import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle2, AlertTriangle, Cpu, Terminal, ArrowRight, Layers, Sparkles, RefreshCw } from 'lucide-react';
import TypewriterText from './TypewriterText';
import './LoopVisualizer.css';

const PRESET_LOOPS = [
  {
    id: 'refactor',
    name: 'Autonomous Code Refactoring Loop',
    description: 'Agent analyzes legacy Python code, identifies performance bottlenecks, writes async optimizations, runs benchmark tests, and refines until 4x speedup is achieved.',
    steps: [
      { step: 1, state: 'Plan', title: 'Parsing Code & Profiling Bottlenecks', detail: 'Agent analyzed 450 lines. Detected nested O(n^2) loop in data transformer.' },
      { step: 2, state: 'Execute', title: 'Generating Async Parallel Pipeline', detail: 'Applying asyncio.gather with vectorized NumPy arrays.' },
      { step: 3, state: 'Evaluate', title: 'Running Automated Benchmark Tests', detail: 'Test execution: Passed 12/12. Execution time reduced from 4.2s -> 0.9s.' },
      { step: 4, state: 'Refine', title: 'Finalizing Clean Architecture', detail: 'Type hints applied. Micro-optimizations verified. Output clean.' }
    ]
  },
  {
    id: 'self-heal',
    name: 'Self-Healing Debugger Loop',
    description: 'Agent catches runtime stack trace errors, inspects failing state, crafts code patches, runs pytest suite, and loops until zero errors remain.',
    steps: [
      { step: 1, state: 'Plan', title: 'Intercepting Stack Trace Failure', detail: 'Caught NullPointer / KeyError: "user_session" in auth middleware.' },
      { step: 2, state: 'Execute', title: 'Applying Null-Safety Guard Clause', detail: 'Refactored auth middleware with defensive optional chaining.' },
      { step: 3, state: 'Evaluate', title: 'Executing Pytest Suite', detail: 'Attempt 1 failed: Edge case missing for expired JWT tokens.' },
      { step: 4, state: 'Loop & Patch', title: 'Refining Patch for Token Refresh', detail: 'Patched token refresh handler. Attempt 2: Pytest 100% PASS!' }
    ]
  },
  {
    id: 'multi-agent',
    name: 'Multi-Agent Consensus & Execution',
    description: 'Architect Agent plans system design, Coder Agent writes implementation, Reviewer Agent audits security, and Tester Agent verifies API compliance.',
    steps: [
      { step: 1, state: 'Architect Agent', title: 'Designing REST API Schema', detail: 'Formulated OpenAPI 3.0 specs with JWT authentication.' },
      { step: 2, state: 'Coder Agent', title: 'Generating Fast API Service', detail: 'Generated 4 endpoints with async Postgres ORM integration.' },
      { step: 3, state: 'Security Audit', title: 'Scanning OWASP Vulnerabilities', detail: 'Identified missing rate-limiter header. Patch injected.' },
      { step: 4, state: 'Consensus Achieved', title: 'Deploying Production Container', detail: 'All 4 agents approved build. Container image verified!' }
    ]
  }
];

export default function LoopVisualizer() {
  const [selectedLoop, setSelectedLoop] = useState(PRESET_LOOPS[0]);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [loopCount, setLoopCount] = useState(1);

  const startLoop = () => {
    setIsRunning(true);
    setActiveStepIndex(0);
    setLogs([]);
    setLoopCount(1);
  };

  useEffect(() => {
    let timer;
    if (isRunning && activeStepIndex < selectedLoop.steps.length) {
      const currentStep = selectedLoop.steps[activeStepIndex];
      timer = setTimeout(() => {
        setLogs(prev => [
          ...prev,
          `[${new Date().toLocaleTimeString()}] [STATE: ${currentStep.state.toUpperCase()}] ${currentStep.title}: ${currentStep.detail}`
        ]);
        
        if (activeStepIndex + 1 < selectedLoop.steps.length) {
          setActiveStepIndex(prev => prev + 1);
        } else {
          setIsRunning(false);
        }
      }, 1200);
    }
    return () => clearTimeout(timer);
  }, [isRunning, activeStepIndex, selectedLoop]);

  return (
    <section className="loop-visualizer" id="simulator">
      <div className="container">
        <div className="section-header">
          <h2>Interactive AI Loop Engineering Simulator</h2>
          <TypewriterText text="Experience how autonomous AI agents evaluate, execute, test, and self-correct code in production loops. This is the cutting-edge methodology taught at BazaDevSpace." />
        </div>

        <div className="simulator-grid">
          {/* Left Column: Preset Selector & Controls */}
          <div className="simulator-controls glass-card">
            <h3 className="controls-title">Select Agent Loop Preset</h3>
            
            <div className="presets-list">
              {PRESET_LOOPS.map((preset) => (
                <div
                  key={preset.id}
                  className={`preset-card ${selectedLoop.id === preset.id ? 'active' : ''}`}
                  onClick={() => {
                    if (!isRunning) {
                      setSelectedLoop(preset);
                      setActiveStepIndex(0);
                      setLogs([]);
                    }
                  }}
                >
                  <div className="preset-header">
                    <span className="preset-name">{preset.name}</span>
                    {selectedLoop.id === preset.id && <Sparkles size={16} className="text-cyan" />}
                  </div>
                  <p className="preset-desc">{preset.description}</p>
                </div>
              ))}
            </div>

            <div className="control-actions">
              <button 
                className="btn-primary btn-run-loop" 
                onClick={startLoop} 
                disabled={isRunning}
              >
                {isRunning ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    <span>Loop Executing...</span>
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    <span>Run AI Agent Loop</span>
                  </>
                )}
              </button>

              <button 
                className="btn-secondary" 
                onClick={() => {
                  setIsRunning(false);
                  setActiveStepIndex(0);
                  setLogs([]);
                }}
              >
                <RotateCcw size={16} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Pipeline Visualizer & Console Log */}
          <div className="simulator-display glass-card">
            {/* Visual Loop Node Pipeline */}
            <div className="loop-pipeline">
              <div className="pipeline-header">
                <span className="pipeline-title">Agent Execution Nodes</span>
                <span className="loop-counter">Loop Iteration #{loopCount}</span>
              </div>

              <div className="pipeline-nodes">
                {['Plan', 'Execute', 'Evaluate', 'Refine'].map((nodeName, idx) => {
                  const isActive = isRunning && activeStepIndex === idx;
                  const isCompleted = activeStepIndex > idx || (!isRunning && logs.length > 0);
                  
                  return (
                    <React.Fragment key={nodeName}>
                      <div className={`pipeline-node ${isActive ? 'active-node' : ''} ${isCompleted ? 'completed-node' : ''}`}>
                        <div className="node-icon">
                          {isCompleted ? <CheckCircle2 size={20} /> : <Cpu size={20} />}
                        </div>
                        <span className="node-name">{nodeName}</span>
                      </div>
                      {idx < 3 && <div className={`pipeline-connector ${activeStepIndex > idx ? 'active-connector' : ''}`}></div>}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Live Terminal Log Stream */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="terminal-title">
                  <Terminal size={14} />
                  <span>bazadevspace-agent-loop-telemetry.log</span>
                </div>
              </div>

              <div className="terminal-body">
                {logs.length === 0 ? (
                  <div className="terminal-placeholder">
                    <Sparkles size={24} className="text-cyan animate-pulse-glow" />
                    <p>Click "Run AI Agent Loop" above to watch autonomous agent execution in real-time.</p>
                  </div>
                ) : (
                  logs.map((log, index) => (
                    <div key={index} className="log-line">
                      <span className="log-prompt">&gt;</span>
                      <span className="log-text">{log}</span>
                    </div>
                  ))
                )}
                {isRunning && (
                  <div className="log-line log-loading">
                    <span className="log-prompt">&gt;</span>
                    <span className="log-text text-cyan">Executing agent prompt reasoning...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
