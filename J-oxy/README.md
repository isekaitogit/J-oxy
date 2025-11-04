# Oxylabs Junior IT Operations Specialist Portfolio

**Live Demo:** Coming soon on Netlify

Portfolio website showcasing qualifications for the Oxylabs Junior IT Operations Specialist role.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server runs on [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

- **Framework:** Next.js 15.5.6 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion 12.23.24
- **UI Components:** 
  - shadcn/ui
  - Radix UI
  - Custom components (ClipPathLinks, FlipCard, HoverPeek)
- **Icons:** Lucide React, React Icons
- **Background Effects:** Custom ASCII animation with Oxylabs colors

## 🌐 Deploying to Netlify

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Oxylabs portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/oxylabs-portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [https://app.netlify.com/](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and select your repository
   - Build settings are auto-detected from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `.next`
     - Node version: 18
   - Click "Deploy site"

3. **Configure Custom Domain (Optional):**
   - In Netlify dashboard: Site settings → Domain management
   - Add custom domain or use free `.netlify.app` subdomain

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Build and deploy
npm run build
netlify deploy --prod
```

## 📋 Build Configuration

The project includes:
- ✅ `netlify.toml` - Netlify build configuration
- ✅ `next.config.mjs` - Next.js optimization settings
- ✅ Build tested and passing
- ✅ All TypeScript errors resolved
- ✅ ESLint warnings are non-blocking

## ✨ Features

### Interactive Components
- **ASCII X Logo Background**: Animated Oxylabs branding with dual-speed scrolling text
- **3D Flip Cards**: Job requirements and skills with hover flip animation
- **HoverPeek Link Previews**: Live website previews on hover with magnifying lens
- **ClipPathLinks**: Directional clip-path animations for social media links
- **Full-Page Modals**: Detailed experience showcases with proof links
- **Dark/Light Mode**: Theme toggle in hero section

### Content Structure
- Hero section with work timeline and social links
- Job requirements mapping (5 cards)
- Skills & experience showcase (8 cards)
- Work journey timeline
- Detailed modals for each card with:
  - Overview
  - Responsibilities with tools
  - Key achievements
  - Why relevant to Oxylabs role

### Real Projects Featured
- **AI Education Platform**: Live prototype at [ltus-acadamy--paji-duolingo.europe-west4.hosted.app](https://ltus-acadamy--paji-duolingo.europe-west4.hosted.app/)
- **CyberCare Experience**: 96% customer satisfaction, NordVPN/NordProtect support
- **Problem-Solving Projects**: 21st.dev integration, Playwright MCP, Firebase migration

## 🎨 Design Highlights

- **Oxylabs Brand Colors**: 
  - Primary: `#00D9B1` (darker cyan)
  - Secondary: `#84F2DE` (lighter mint)
- **Monospace Font**: Professional terminal aesthetic
- **Glassmorphism Effects**: Modern card designs
- **Responsive Layout**: Mobile-first design
- **Performance**: Static generation for fast loading

## 📝 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Main portfolio page
│   ├── not-found.tsx         # 404 page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── ui/
│       ├── clip-path-links.tsx        # Social media links
│       ├── flip-card.tsx              # 3D flip cards
│       ├── link-preview.tsx           # HoverPeek component
│       ├── requirement-detail-modal.tsx  # Experience modals
│       └── work-timeline.tsx          # Career timeline
├── lib/
│   └── utils.ts              # Utility functions (cn)
├── public/                   # Static assets
├── netlify.toml              # Netlify configuration
└── next.config.mjs           # Next.js configuration
```

## 🔧 Environment Variables

No environment variables required for this portfolio.

## 📊 Build Output

- Route `/`: ~192 KB First Load JS
- Route `/_not-found`: ~102 KB First Load JS
- Static generation: ✅ Prerendered
- Build time: ~10-15 seconds

## 🐛 Known Issues

- **Warnings (Non-blocking)**:
  - `<img>` tags in external components (link-preview, clip-path-links)
  - React Hook dependency suggestion in link-preview

These warnings don't affect functionality and are acceptable for production.

## 📞 Contact

**Jaykumar Mathukiya**
- Email: [Your Email]
- LinkedIn: [jay-mathukiya-](https://www.linkedin.com/in/jay-mathukiya-)
- GitHub: [jay-021](https://github.com/jay-021/)
- Twitter: [@Jay_Mathukiya_](https://twitter.com/Jay_Mathukiya_)

## 📄 License

This is a personal portfolio project for job application purposes.

---

**Applying for:** Junior IT Operations Specialist at Oxylabs
**Status:** ✅ Ready for deployment
**Last Updated:** November 4, 2025
