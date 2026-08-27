# ✨ Google Spark — Autonomous Multimodal Intelligence Webpage

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-4285F4?style=for-the-badge&logo=github)](https://serguei9090.github.io/sparkwebpage/)
[![Google Color Theme](https://img.shields.io/badge/Design-Google%20Material%20You%20%26%20Glassmorphism-34A853?style=for-the-badge&logo=google)](https://serguei9090.github.io/sparkwebpage/)
[![React](https://img.shields.io/badge/React%2018-SPA-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Modern%20UI-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, highly-responsive interactive web application showcasing **Google Spark** (Gemini Spark) — an autonomous multimodal research and task execution engine designed with a **premium dark glassmorphism aesthetic**, the iconic **Google 4-Color Theme** (`#4285F4` Blue, `#EA4335` Red, `#FBBC05` Yellow, `#34A853` Green), and Google Material You design accents.

🌐 **Live GitHub Pages URL**: [https://serguei9090.github.io/sparkwebpage/](https://serguei9090.github.io/sparkwebpage/)  
📂 **GitHub Repository**: [https://github.com/serguei9090/sparkwebpage](https://github.com/serguei9090/sparkwebpage)

---

## 🚀 Key Features

- 🎨 **Premium Obsidian & Glassmorphism Aesthetic**: Translucent frosted surfaces with backdrop blur (`backdrop-blur-xl`), subtle radial glow backdrops, and signature Google 4-color micro-accents.
- ⚡ **Interactive Agent Sandbox & Simulator**: Real-time interactive playground simulating Spark's cognitive execution flow, checklist generation (`task.md`), subagent worker allocation, and live terminal daemon streams.
- 🧠 **Bento Grid Core Architecture**: Interactive breakdown of Multimodal Deep Reasoning, Parallel Subagent Delegation, Universal Toolchain, and Context Security.
- 🛠️ **Universal Tool Ecosystem & RPC Inspector**: Categorized directory of 18+ Model Context Protocol (MCP) integrations with click-to-inspect RPC drawer.
- ⚙️ **5-Stage Cognitive Pipeline Deep Dive**: Interactive architecture breakdown illustrating Intent Parsing, Planning (`task.md`), Swarm Spawning, Tool Execution, and Citation Grounding.
- 📊 **Empirical Performance Matrix**: Side-by-side benchmark comparison against single-thread LLMs and legacy scripts.
- ❓ **Interactive Knowledge Base / FAQ**: Expandable accordion detailing subagent concurrency, zero-leak privacy policies, and deployment lifecycle.

---

## 🏗️ Architecture & Tech Stack

```text
┌────────────────────────────────────────────────────────┐
│                   Google Spark Webpage                 │
├──────────────────────────┬─────────────────────────────┤
│ Frontend Framework       │ React 18 (SPA Architecture) │
│ Styling Engine           │ Tailwind CSS + Glassmorphism│
│ Typography               │ Google Sans + JetBrains Mono│
│ Design Language          │ Google 4-Color + Obsidian   │
│ Deployment Target        │ GitHub Pages (CI/CD Action) │
└──────────────────────────┴─────────────────────────────┘
```

---

## 🛠️ Local Development

### Option 1: Standalone Instant Preview
Simply open `index.html` in any modern web browser or serve via Python:

```bash
python3 -m http.server 8080
# Open http://localhost:8080 in your browser
```

### Option 2: Node.js & Vite Dev Server
```bash
# Install dependencies
npm install

# Start Vite hot-reload server
npm run dev

# Build production bundle
npm run build
```

---

## 📦 Deployment to GitHub Pages

This repository is configured with a GitHub Actions workflow in `.github/workflows/deploy.yml`. Pushes to the `main` branch automatically build and publish the static site directly to GitHub Pages.

---

## 👤 Author & Credits

- **Author**: Serguei Castillo ([@serguei9090](https://github.com/serguei9090))
- **Engine**: Gemini Autonomous Multimodal Engine / Google Spark
- **License**: MIT
