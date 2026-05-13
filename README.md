# Amit Kumar - Semiconductor & Electronics Engineer Portfolio

Personal portfolio website showcasing semiconductor research, electronics engineering, embedded systems, and VLSI design projects.

## About

M.Sc. Electronics graduate from University of Delhi with specialization in:
- Semiconductor Devices
- Thin Film Technology
- Spintronics
- Flexible Electronics
- VLSI Design
- Embedded Systems
- RTL Development

### Research Focus

Fabrication and characterization of FeCo/CoFe thin films on flexible substrates using sputtering techniques.

### Technical Tools

**Characterization:** XRD, VSM, FMR, AFM, FESEM, EDS
**Software:** MATLAB, Proteus, Verilog
**Hardware:** Arduino, ESP32, Embedded Systems

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Notifications:** Sonner

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── (sub pages)/
│   │   ├── about/
│   │   ├── projects/  (Research section)
│   │   └── contact/
│   ├── data.js        # Project data and navigation
│   ├── globals.css    # Global styles
│   ├── layout.js      # Root layout with metadata
│   └── page.js        # Home page
└── components/
    ├── about/         # About section components
    ├── contact/       # Contact form
    ├── navigation/    # Navigation menu
    └── projects/      # Research projects display
```

## Sections

- **Home:** Professional introduction with specialization areas
- **About:** Academic background, research specialization, technical tools
- **Research:** Semiconductor and electronics projects
- **Contact:** Professional contact form

## Customization

To personalize this portfolio:

1. Update `src/app/data.js` with your projects and social links
2. Update `src/app/layout.js` metadata
3. Update `src/components/about/index.jsx` with your background
4. Replace background images in `public/background/`
5. Configure EmailJS in `.env` for contact form

## License

This project is private and for personal portfolio use.

