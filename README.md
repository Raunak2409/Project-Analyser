# 🧭 Project Analyser

**Visualize and explore your codebase with ease.**  
Upload a local project or clone directly from GitHub to generate an interactive map of your codebase.

## ✨ Features

- 🌐 Clone any GitHub repository using its URL
- 📁 Upload a local project directory
- 🧠 Analyze code structure (coming soon)
- 💡 Interactive UI built with React + Tailwind
- ⚙️ Blazing fast with Vite and TypeScript

---

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/Raunak2409/Project-Analyser.git
cd Project-Analyser
```


2. Install dependencies
Make sure you have Node.js and npm installed. Then run:

```bash
npm install
```


4. Start the development server

```bash
npm run dev
```
Go to [http://localhost:5173](http://localhost:5173.) to view it in your browser.



📁 Project Structure
```pgsql
Project-Analyser/
├── public/ # Static assets
├── src/
│ ├── components/ui/ # Reusable UI components (Button, Input, Card)
│ ├── lib/ # Utility functions
│ ├── HomePage.tsx # Main upload/clone interface
│ ├── App.tsx # Root component
│ ├── main.tsx # Entry point for Vite
│ └── index.css # Tailwind base styles
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```


🛠 Tech Stack

- ⚛️ **React** (w/ TypeScript)
- 💨 **Tailwind CSS** for styling
- ⚡ **Vite** for development and build
- 🦾 **Lucide-react** for icons

