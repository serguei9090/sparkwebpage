import React, { useState, useEffect } from 'react';

// Google 4-Color Signature Accent Bar
export const GoogleColorBar = ({ className = "h-1 w-full" }) => (
  <div className={`flex ${className}`}>
    <div className="w-1/4 bg-[#4285F4]"></div>
    <div className="w-1/4 bg-[#EA4335]"></div>
    <div className="w-1/4 bg-[#FBBC05]"></div>
    <div className="w-1/4 bg-[#34A853]"></div>
  </div>
);

// Spark Emblem Logo with multi-ring animation
export const SparkEmblem = ({ className = "w-8 h-8", animated = true }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className={`w-full h-full ${animated ? 'animate-spin-slow' : ''}`}>
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#sparkRingGrad)" strokeWidth="6" strokeDasharray="50 15 35 15 45 15" strokeLinecap="round" />
      <defs>
        <linearGradient id="sparkRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="35%" stopColor="#EA4335" />
          <stop offset="70%" stopColor="#FBBC05" />
          <stop offset="100%" stopColor="#34A853" />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-base sm:text-lg select-none">✨</span>
    </div>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedScenario, setSelectedScenario] = useState('github');

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 font-sans selection:bg-[#4285F4]/30 selection:text-white">
      <GoogleColorBar className="h-[2.5px] w-full" />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#060911]/85 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer">
            <SparkEmblem className="w-8 h-8" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-bold text-slate-200 text-base tracking-tight">Google</span>
                <span className="google-gradient-text font-extrabold text-lg tracking-tight">Spark</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-[#4285F4] border border-blue-500/20 font-mono font-bold">2.5</span>
              </div>
              <span className="text-[9px] text-slate-400 font-mono tracking-wider uppercase mt-0.5">Autonomous Research Engine</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://github.com/serguei9090/sparkwebpage"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 mb-8">
          <span className="h-2 w-2 rounded-full bg-[#34A853] animate-pulse"></span>
          Gemini Spark 2.5 Multi-Modal Architecture • MCP v1.8 Active
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          Autonomous Multimodal <br />
          <span className="google-gradient-text">Research & Execution Engine</span>
        </h1>

        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
          Orchestrating concurrent subagent swarms, universal Model Context Protocols, sandboxed VM execution, and zero-leak privacy guardrails.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://serguei9090.github.io/sparkwebpage/"
            className="px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#4285F4] to-[#2563eb] text-white shadow-xl shadow-blue-500/25 hover:from-[#5294ff] hover:to-[#3b82f6] transition"
          >
            Explore Live Standalone App ↗
          </a>
        </div>
      </main>
    </div>
  );
}
