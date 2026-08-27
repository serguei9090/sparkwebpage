# ✨ Google Spark — Autonomous Multimodal Intelligence Webpage

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-4285F4?style=for-the-badge&logo=github)](https://serguei9090.github.io/sparkwebpage/)
[![Google Color Theme](https://img.shields.io/badge/Design-Google%20Material%20You-34A853?style=for-the-badge&logo=google)](https://serguei9090.github.io/sparkwebpage/)
[![React](https://img.shields.io/badge/React%2018-SPA-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Modern%20UI-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, highly-responsive interactive web application showcasing **Google Spark** (Gemini Spark) — an autonomous multimodal research and task execution engine designed with the iconic **Google 4-Color Theme** (`#4285F4` Blue, `#EA4335` Red, `#FBBC05` Yellow, `#34A853` Green) and Google Material You aesthetics.

🌐 **Live GitHub Pages URL**: [https://serguei9090.github.io/sparkwebpage/](https://serguei9090.github.io/sparkwebpage/)  
📂 **GitHub Repository**: [https://github.com/serguei9090/sparkwebpage](https://github.com/serguei9090/sparkwebpage)

---

## 🚀 Key Features

- 🎨 **Iconic Google 4-Color Theme**: Styled using official Google brand accents (Google Blue `#4285F4`, Google Red `#EA4335`, Google Yellow `#FBBC05`, and Google Green `#34A853`) on dark glassmorphism card surfaces.
- ⚡ **Interactive Agent Sandbox & Simulator**: Real-time interactive playground simulating Spark's cognitive execution flow, checklist generation (`task.md`), subagent worker allocation, and live terminal daemon streams.
- 🧠 **Multimodal Reasoning Matrix**: Deep breakdown of tokenization across code AST graphs, vision, tabular data, audio streams, and real-time inputs.
- 🛠️ **Universal Tool Ecosystem**: Categorized directory of 15+ Model Context Protocol (MCP) integrations across Developer tools, Google Workspace (Docs, Sheets, Slides, Drive), Comms (Gmail, Calendar, Chat), and Web intelligence (Search, Maps, Browser Agent).
- ⚙️ **Cognitive Pipeline Visualizer**: 5-stage architecture pipeline showing intent parsing, structured planning, parallel subagent dispatch, MCP validation, and grounded citation synthesis.
- 📊 **Performance Benchmarks Table**: Side-by-side comparison between Google Spark 2.5, single-thread LLMs, and legacy hardcoded script pipelines.
- 📱 **Full Mobile & Desktop Responsiveness**: Ultra-smooth navigation, interactive tab switchers, and fluid typography powered by Google Sans & JetBrains Mono.

---

## 🏗️ Architecture & Tech Stack

```text
┌────────────────────────────────────────────────────────┐
│                   Google Spark Webpage                 │
├──────────────────────────┬─────────────────────────────┤
│ Frontend Framework       │ React 18 (SPA Architecture) │
│ Styling Engine           │ Tailwind CSS + Glassmorphism│
│ Typography               │ Google Sans + JetBrains Mono│
│ Icons & Graphics         │ Lucide SVG & Google Accents │
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
