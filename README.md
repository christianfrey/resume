# Resume

A modern, responsive personal resume website built with Tailwind CSS v4 and Puppeteer for PDF generation.

## Live Demo

[View Live Resume](https://christianfrey.github.io/resume/) | [Download PDF](https://christianfrey.github.io/resume/resume.pdf)

## Tech Stack

- **Build Tool**: [Vite](https://vite.dev/) - Next generation frontend tooling
- **CSS Framework**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **PDF Generation**: [Puppeteer](https://pptr.dev/) - Headless Chrome Node.js API for generating PDFs
- **Deployment**: GitHub Pages via [GitHub Pages Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) workflow

## Quick Start

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
git clone https://github.com/christianfrey/resume.git
cd resume
npm install
npm run dev
```

### Export PDF with Puppeteer

```bash
npm run generate:pdf
```

## Deployment

The project automatically deploys to GitHub Pages when code is pushed to the `main` branch using GitHub Actions.

## Contributing

This is a personal resume project, but feel free to:

- Report bugs or suggest improvements via issues
- Fork the project as inspiration for your own resume
- Share feedback on the design or code structure
