# HematoTech - Predictive Hematology Intelligence Platform

A modern, bilingual (English/French) Next.js website for HematoTech, showcasing innovative AI-driven hematological analytics and predictive modeling capabilities.

## 🌍 Company Information

- **Company**: HematoTech SAS
- **Founder**: Dr. Alice Lemoine
- **Location**: 15 Rue Cuvier, Immeuble Galilée, 75005 Paris, France
- **Specialization**: Predictive Hematology Modeling (HemaPredict™)

## 🚀 Features

### Core Technology
- **HemaPredict™**: Advanced AI-driven predictive hematology modeling
- **Personalized Hematological Models**: Unique AI models for each patient
- **Time-Based Projections**: 30, 60, and 90-day forecasts
- **Scenario Analysis**: "What-if" treatment simulations
- **HemaStability Score™**: Proprietary stability quantification system

### Platform Features
- Centralized blood test management
- Intelligent anomaly detection
- Patient monitoring tools
- Detailed clinical reports
- Laboratory device integration
- HIPAA-compliant security

### Website Features
- **Bilingual Support**: Full English/French localization
- **Automatic Language Detection**: Middleware-based language routing
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Clean Architecture**: Component-based React/Next.js structure
- **Production-Ready**: TypeScript, static generation, optimized build

## 📁 Project Structure

```
hemato.tech/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx           # Main layout with i18n
│   │   ├── page.tsx             # Home page
│   │   ├── features/
│   │   │   └── page.tsx         # Features showcase
│   │   ├── predictive-modeling/
│   │   │   └── page.tsx         # HemaPredict™ details
│   │   ├── about/
│   │   │   └── page.tsx         # Company info & team
│   │   └── contact/
│   │       └── page.tsx         # Contact & partnership inquiries
│   └── globals.css
├── components/
│   ├── Navbar.tsx               # Navigation with language switcher
│   ├── Footer.tsx               # Footer with links
│   ├── Hero.tsx                 # Hero section component
│   ├── Section.tsx              # Reusable section wrapper
│   ├── FeatureCard.tsx          # Feature card component
│   ├── ChartPlaceholder.tsx     # Chart visualization placeholder
│   └── ContactForm.tsx          # Contact form with validation
├── lib/
│   └── i18n.ts                  # Internationalization utilities
├── locales/
│   ├── en/
│   │   └── common.json          # English translations
│   └── fr/
│       └── common.json          # French translations
├── middleware.ts                 # Language detection & routing
├── public/
│   ├── icons/                   # Icon assets
│   └── images/                  # Image assets
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.7 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: React 19.2.0
- **Internationalization**: Custom i18n with JSON translations
- **Node**: Compatible with Node.js 18+

## 📖 Routes

### English Routes
- `/en` - Home page
- `/en/features` - Features showcase
- `/en/predictive-modeling` - HemaPredict™ details
- `/en/about` - About company & team
- `/en/contact` - Contact & partnerships

### French Routes
- `/fr` - Page d'accueil
- `/fr/features` - Présentation des fonctionnalités
- `/fr/predictive-modeling` - Détails sur HemaPredict™
- `/fr/about` - À propos de l'entreprise et l'équipe
- `/fr/contact` - Contact & partenariats

### Root Behavior
- `/` - Automatically redirects to `/en` (default language)

## 🌐 Internationalization (i18n)

The website uses a custom i18n system with JSON translation files in `/locales/[lang]/common.json`.

**Language Detection**:
1. Middleware checks URL for language prefix (`/en`, `/fr`)
2. If no language prefix, redirects to default language (`/en`)
3. Language switcher in navbar allows users to toggle between languages

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb, #1e40af)
- **Neutral**: Gray/White
- **Accent**: Light Blue (#dbeafe, #eff6ff)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Server runs at `http://localhost:3000` (or next available port)

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## 📊 Pages

- **Home** (`/[lang]`) - Hero, features overview, CTA
- **Features** (`/[lang]/features`) - Detailed feature showcase
- **Predictive Modeling** (`/[lang]/predictive-modeling`) - HemaPredict™ details
- **About** (`/[lang]/about`) - Dr. Alice Lemoine, mission, vision, values, team
- **Contact** (`/[lang]/contact`) - Contact form, partnerships, investor relations

## 📧 Contact Information

**HematoTech SAS**
- Address: 15 Rue Cuvier, Immeuble Galilée, 75005 Paris, France
- Founder: Dr. Alice Lemoine

## 📄 License

Proprietary and confidential to HematoTech SAS.

---

**Built with ❤️ for HematoTech - Transforming Hematology through Intelligent Prediction**
