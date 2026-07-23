<div align="center">

  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60" alt="Quizee Banner" width="100%" height="300" style="object-fit: cover; border-radius: 10px;">

  <h1>Quizee</h1>

  <p><strong>Master Your Studies with an Interactive Learning Platform</strong></p>

  <p>
    Flashcards &bull; Quizzes &bull; Educational Blogs &bull; Code Snippets
  </p>

  <br/>

  ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
  ![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat&logo=reactrouter&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green)
  ![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?style=flat&logo=vercel&logoColor=white)

</div>

---

## Table of Contents

- [About](#about)
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build & Preview](#build--preview)
- [Project Structure](#project-structure)
- [Routing](#routing)
- [Components Breakdown](#components-breakdown)
  - [Header](#header)
  - [Home](#home)
  - [Quiz Selection](#quiz-selection)
  - [Quiz Component](#quiz-component)
  - [Blogs Listing](#blogs-listing)
  - [Blog Detail](#blog-detail)
  - [Footer](#footer)
- [Data Architecture](#data-architecture)
  - [Quiz Data](#quiz-data)
  - [Blog Data](#blog-data)
- [Styling](#styling)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [ESLint Configuration](#eslint-configuration)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)

---

## About

**Quizee** is a full-featured, modern educational web application built to help learners master various subjects through interactive quizzes, flashcards, and in-depth blog articles. Designed with performance and user experience at its core, Quizee provides a seamless learning journey across devices.

The platform currently covers **8 programming topics** with **80+ quiz questions**, **5 detailed educational blogs** with syntax-highlighted code examples, and a curated flashcard library spanning 30+ subjects.

---

## Demo

> **Live:** [https://quizcart.vercel.app](https://quizcart.vercel.app)

---

## Features

### Quizzes
- **8 Programming Topics**: HTML, CSS, JavaScript, Python, Java, C, PHP, TypeScript
- **80+ MCQ Questions**: 10 questions per topic, carefully curated
- **Score Tracking**: Real-time wrong answer tracking during the quiz
- **Detailed Review**: After completion, review every wrong answer with correct vs. your answer highlighted
- **Perfect Score Celebration**: Special message when all answers are correct
- **Instant Restart**: Re-attempt any quiz with a single click

### Blogs
- **5 In-Depth Articles**: HTML, CSS, JavaScript, Python, Java complete guides
- **Syntax Highlighting**: Powered by `react-syntax-highlighter` with One Dark theme
- **Structured Layout**: Introduction, sections, subsections, code snippets, conclusion
- **Table of Contents**: Sidebar navigation for quick section jumping
- **Author Profiles**: Author avatar, bio, and social links
- **Engagement Metrics**: Views, likes, shares, comments, bookmarks per article
- **Tags & Categories**: Organized content for easy discovery
- **Reading Time**: Estimated read time per article
- **Publication Dates**: Published and updated timestamps

### Flashcards
- **30+ Flashcard Sets**: Covering languages, sciences, history, arts, and more
- **Paginated Grid**: 6 cards per page with smooth pagination
- **Author Attribution**: Each set shows author name and avatar
- **Hover Animations**: Card lift and shadow effects on hover

### Home Page
- **Image Carousel**: Horizontally scrollable educational image gallery with arrow navigation
- **Feature Sections**: 4 marketing sections with alternating layouts
- **App Download CTAs**: Apple App Store and Google Play buttons
- **Blog Preview**: Direct link to the blog listing page

### Navigation & UI
- **Responsive Header**: Logo, search bar, categories dropdown, "Get Started" CTA
- **Mega Dropdown Categories**: 7 categories with sub-subjects (GCSE, A-Levels, Arts, Languages, Maths, Science, Social)
- **Mobile Search Bar**: Dedicated search input for mobile viewports
- **Persistent Footer**: Multi-column layout with navigation links, country tags, social icons, and language selector
- **Fully Responsive**: Optimized for mobile, tablet, and desktop

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | [React](https://reactjs.org/) | v19.1.0 |
| **Build Tool** | [Vite](https://vitejs.dev/) | v7.3.1 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | v4.1.11 |
| **Routing** | [React Router](https://reactrouter.com/) | v7.13.0 |
| **Icons** | [FontAwesome](https://fontawesome.com/) | v6.7.2 |
| **Code Highlighting** | [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) | v16.1.0 |
| **Linting** | [ESLint](https://eslint.org/) | v9.25.0 |
| **Deployment** | [Vercel](https://vercel.com/) | - |

### Package Dependencies

**Runtime:**
- `react` & `react-dom` — UI library
- `react-router-dom` — Client-side routing
- `@fortawesome/react-fontawesome` — Icon components
- `@fortawesome/free-solid-svg-icons` — Solid icon set
- `@fortawesome/free-brands-svg-icons` — Brand icon set
- `react-syntax-highlighter` — Code block rendering
- `tailwindcss` & `@tailwindcss/vite` — Utility-first CSS
- `@vitejs/plugin-react` — Vite React support

**Dev:**
- `eslint` — JavaScript linting
- `eslint-plugin-react-hooks` — React hooks lint rules
- `eslint-plugin-react-refresh` — Fast refresh lint rules
- `@types/react` & `@types/react-dom` — TypeScript type definitions
- `globals` — Global variable definitions for ESLint

---

## Getting Started

### Prerequisites

- **Node.js** — v18.0.0 or higher (v20+ recommended)
- **npm** — v9+ or **yarn** v1.22+ or **pnpm** v8+

### Installation

```bash
# Clone the repository
git clone https://github.com/mabdullah356/quieee.git

# Navigate to the project directory
cd quizee

# Install dependencies
npm install
```

### Development

```bash
# Start the Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

The app supports **Hot Module Replacement (HMR)** — changes reflect instantly without a full page reload.

### Build & Preview

```bash
# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

The optimized build output is generated in the `dist/` directory.

---

## Project Structure

```
quizee/
├── public/                        # Static assets served at root
│   ├── icon.jpg                   # Favicon / app icon
│   └── vite.svg                   # Vite logo
│
├── src/
│   ├── assets/                    # Static data & images
│   │   ├── blogs.json             # Blog articles data (5 articles)
│   │   ├── Quiz.png               # Quiz page image
│   │   └── react.svg              # React logo
│   │
│   ├── Components/                # React components
│   │   ├── Header.jsx             # Navigation bar with categories & search
│   │   ├── Home.jsx               # Landing page with flashcards & sections
│   │   ├── Quiz.jsx               # Quiz topic selection page
│   │   ├── QuizComponent.jsx      # Quiz gameplay & results review
│   │   ├── Blogs.jsx              # Blog listing grid
│   │   ├── Blog.jsx               # Individual blog post view
│   │   └── Footer.jsx             # Site-wide footer
│   │
│   ├── App.jsx                    # Root component with routing config
│   ├── App.css                    # Component-specific styles (currently unused)
│   ├── index.css                  # Tailwind CSS import & global styles
│   └── main.jsx                   # Application entry point
│
├── dist/                          # Production build output (gitignored)
├── index.html                     # HTML entry point
├── package.json                   # Dependencies & scripts
├── package-lock.json              # Dependency lock file
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint flat config
├── vercel.json                    # Vercel deployment config (SPA rewrites)
├── .gitignore                     # Git ignore rules
└── README.md                      # This file
```

---

## Routing

The application uses **React Router v7** with `BrowserRouter` for client-side routing.

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Landing page with flashcard carousel, feature sections, blog preview |
| `/quiz` | `Quiz` | Topic selection page — choose from 8 programming languages |
| `/quiz/play?topic={topic}` | `QuizComponent` | Active quiz interface with MCQ questions and score tracking |
| `/blogs` | `Blogs` | Blog listing grid showing all 5 articles |
| `/blog/:id` | `Blog` | Full blog post with syntax highlighting, TOC, author info |

> **Note:** The `vercel.json` config rewrites all routes to `index.html` to support client-side routing on refresh/deep links.

---

## Components Breakdown

### Header

**File:** `src/Components/Header.jsx`

- **Logo**: Clickable image linking to home (`/`)
- **Categories Dropdown**: Hover-activated mega menu with 7 categories:
  - GCSE, A-Levels, Arts, Languages, Maths, Science, Social
  - Each category displays 4 sub-subjects
- **Search Bar**: Desktop search input with magnifying glass icon
- **Mobile Search Bar**: Full-width search input visible only on mobile
- **Get Started Button**: Blue CTA button linking to `/quiz`
- **State Management**: Uses `useState` for dropdown toggle, search query, and active category

### Home

**File:** `src/Components/Home.jsx`

- **Hero Text**: Bold headline and description about the platform
- **Blog CTA Section**: Link to read blogs at `/blogs`
- **Image Carousel**: 7 Unsplash images with left/right arrow navigation using `useRef` and `scrollBy`
- **Flashcard Grid**: 30 flashcard sets displayed in a paginated 3-column grid
  - 6 cards per page
  - Left/right pagination with page counter
  - Each card shows: title, term count, author avatar, author name
- **Feature Sections**: 4 alternating image-text sections with:
  - Section 1: App download (App Store + Google Play buttons)
  - Section 2: Magic notes (reverse layout)
  - Section 3: Learn features
  - Section 4: Teacher empowerment (purple background)

### Quiz Selection

**File:** `src/Components/Quiz.jsx`

- **Topic Grid**: 8 programming topics in a 2-column radio button grid
  - HTML, CSS, JavaScript, Python, Java, C, PHP, TypeScript
- **Selected State**: Visual feedback with blue border and background on selection
- **Start Quiz Button**: Disabled until a topic is selected; navigates to `/quiz/play?topic={topic}`
- **Home Button**: Quick navigation back to landing page

### Quiz Component

**File:** `src/Components/QuizComponent.jsx`

- **URL Parameter**: Reads `topic` from query string via `useSearchParams`
- **Quiz Data**: 80 questions (10 per topic) stored inline in the component
- **Question Display**: Shows current question number, topic image, and question text
- **Option Selection**: 4 radio button options with visual selected state
- **Navigation**: "Next Question" / "Finish Quiz" button
- **Score Tracking**: Counts wrong answers and stores wrong question details
- **Results Modal**: Full-screen overlay showing:
  - Wrong answer count
  - Detailed review of each wrong question with:
    - User's wrong answer (red highlight)
    - Correct answer (green highlight)
    - All options with visual indicators
  - Perfect score celebration message
- **Restart**: Reloads the page to restart the quiz

### Blogs Listing

**File:** `src/Components/Blogs.jsx`

- **Card Grid**: 3-column responsive grid (1 on mobile, 2 on tablet, 3 on desktop)
- **Blog Card**: Each card shows:
  - Featured image with hover zoom effect
  - Title (2-line clamp)
  - Excerpt (3-line clamp)
  - "Read more" button with hover fill effect
- **Navigation**: Click anywhere on card to navigate to `/blog/{slug}`
- **Hover Effects**: Card lifts up (`-translate-y-1`) with shadow increase

### Blog Detail

**File:** `src/Components/Blog.jsx`

- **URL Parameter**: Reads `id` (slug) from URL via `useParams`
- **Blog Lookup**: Finds blog from `blogs.json` by slug match
- **Layout**: Two-column layout (2/3 article + 1/3 sidebar)

**Article Column:**
- Title, excerpt, featured image
- Introduction section
- Dynamic sections with subheadings and content
- Code snippets with `SyntaxHighlighter` (One Dark theme, line numbers)
- Conclusion section

**Sidebar:**
- **Table of Contents**: Clickable section links with hover effects
- **Author Card**: Avatar, name, bio, social links (Twitter, LinkedIn, Instagram)
- **Publication Info**: Published date, updated date, read time
- **Tags**: Pill-shaped tag badges
- **Engagement Stats**: Views, likes, shares, comments, bookmarks

### Footer

**File:** `src/Components/Footer.jsx`

- **Footer Sections** (5-column grid):
  - About us (list)
  - For Students (list: Flash Cards, Test, Learn, etc.)
  - For Teachers (list: Live, Blog, Quizlet Plus)
  - Resources (list: Help Centre, Terms, Privacy, etc.)
  - Language (dropdown: English, Arabic, Chinese, Spanish, French, German, Russian, Japanese, Urdu)
- **Countries Section**: 40 country tags in gradient pill badges
- **Social Links**: Facebook, Twitter, Instagram, YouTube, LinkedIn, GitHub, TikTok
- **Copyright**: "2026 Quizee, Inc."

---

## Data Architecture

### Quiz Data

**Location:** `src/Components/QuizComponent.jsx` (inline)

```javascript
quizData = [
  {
    topic: "HTML",           // Topic name
    img: "...",              // Unsplash image URL
    mcqs: [
      {
        question: "...",     // Question text
        options: [...],      // Array of 4 options
        answer: "..."        // Correct answer string
      },
      // ... 10 questions per topic
    ]
  },
  // ... 8 topics total
]
```

**Topics Covered:**

| Topic | Questions | Difficulty |
|-------|-----------|------------|
| HTML | 10 | Beginner |
| CSS | 10 | Beginner |
| JavaScript | 10 | Beginner-Intermediate |
| Python | 10 | Beginner |
| Java | 10 | Beginner-Intermediate |
| C | 10 | Beginner-Intermediate |
| PHP | 10 | Beginner |
| TypeScript | 10 | Intermediate |

### Blog Data

**Location:** `src/assets/blogs.json`

```javascript
[
  {
    id: 101,
    title: "...",
    slug: "html-complete-guide-a-to-z",  // URL-friendly identifier
    excerpt: "...",
    featuredImage: { url, alt, width, height, thumbnail },
    author: {
      id, name, avatar, bio, title,
      socialLinks: { twitter, linkedin, instagram }
    },
    publishedDate: "ISO-8601",
    updatedDate: "ISO-8601",
    readTime: 18,                        // minutes
    category: { id, name, slug },
    tags: [{ id, name, slug }],
    content: {
      introduction: { text },
      sections: [
        {
          heading: "Section Title",
          subsections: [
            {
              subheading: "Subsection Title",
              content: "Paragraph text...",
              codeSnippets: [
                {
                  title: "Code Example Title",
                  language: "javascript",
                  code: "..."
                }
              ]
            }
          ]
        }
      ],
      conclusion: { text }
    },
    engagement: { views, likes, shares, comments, bookmarks },
    comments: { enabled, moderated, count },
    newsletter: { enabled, ctaText }
  }
]
```

**Available Blogs:**

| ID | Title | Category | Tags |
|----|-------|----------|------|
| 101 | HTML A-to-Z: Complete Guide | Web Development | HTML, Frontend, Web Basics, Markup |
| 102 | CSS A-to-Z: Complete Guide | Web Development | CSS, Frontend, Styling, Design |
| 103 | JavaScript A-to-Z: Complete Guide | Web Development | JavaScript, Frontend, Programming, ES6 |
| 104 | Python A-to-Z: Complete Guide | Programming | Python, Programming, Backend, Data Science |
| 105 | Java A-to-Z: Complete Guide | Programming | Java, Programming, Backend, OOP |

---

## Styling

- **Framework:** Tailwind CSS v4 (utility-first)
- **Configuration:** `@tailwindcss/vite` plugin in `vite.config.js`
- **Global Styles:** Single `@import "tailwindcss"` in `src/index.css`
- **Component Styles:** All styling done inline via Tailwind utility classes
- **App CSS:** `src/App.css` exists but is currently unused (all original styles commented out)
- **Responsive Breakpoints:**
  - `sm:` — 640px+ (small tablets)
  - `md:` — 768px+ (tablets & small laptops)
  - `lg:` — 1024px+ (desktops)
- **Animations & Transitions:**
  - Hover scale effects on cards (`hover:scale-105`)
  - Shadow transitions (`hover:shadow-xl`, `hover:shadow-lg`)
  - Transform transitions (`transition-all duration-200/300`)
  - Active scale feedback (`active:scale-95`)
  - Smooth scroll for carousel (`scroll-smooth`)

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Create optimized production build in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Deployment

The project is configured for deployment on **Vercel**.

### Vercel Configuration

**File:** `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures all routes are handled by the client-side React Router, preventing 404 errors on page refresh or direct URL access.

### Deploy to Vercel

1. Push your code to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Vite and configures the build:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**

### Environment Variables

No environment variables are required — all data is bundled client-side.

---

## ESLint Configuration

**File:** `eslint.config.js`

Uses ESLint v9 flat config format with:

- **Base:** `@eslint/js` recommended rules
- **Plugins:**
  - `eslint-plugin-react-hooks` — Enforces Rules of Hooks
  - `eslint-plugin-react-refresh` — Ensures fast refresh compatibility
- **Ignored Paths:** `dist/`
- **Custom Rules:**
  - `no-unused-vars` — Errors on unused vars (ignores variables starting with uppercase or underscore)
  - `react-refresh/only-export-components` — Warns on non-component exports (allows constant exports)

---

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 15+ |
| Edge | 90+ |
| Mobile Chrome | 90+ |
| Mobile Safari | 15+ |

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes with a descriptive message
   ```bash
   git commit -m "feat: add new quiz topic for Rust"
   ```
4. **Push** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open** a Pull Request

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Description |
|--------|-------------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | Code style changes (formatting, etc.) |
| `refactor:` | Code refactoring |
| `test:` | Adding or updating tests |
| `chore:` | Maintenance tasks |

---

## Roadmap

- [ ] **User Authentication** — Save progress, bookmarks, and quiz scores
- [ ] **Create Study Sets** — User-generated flashcards with CRUD operations
- [ ] **Dark Mode** — System-wide dark theme with toggle
- [ ] **Backend Integration** — Replace JSON data with a database/CMS (e.g., Supabase, Sanity)
- [ ] **Quiz Timer** — Add countdown timer for quiz questions
- [ ] **Leaderboard** — Global and per-topic score rankings
- [ ] **Spaced Repetition** — Smart flashcard scheduling algorithm
- [ ] **Progress Tracking** — Dashboard showing quiz history and improvement
- [ ] **More Topics** — Expand quiz library (Rust, Go, SQL, React, etc.)
- [ ] **Blog Search & Filter** — Search by keyword, filter by category/tag
- [ ] **Newsletter Integration** — Email subscription for blog updates
- [ ] **Comments System** — User comments on blog posts
- [ ] **i18n Support** — Multi-language UI based on footer language selector
- [ ] **PWA Support** — Offline mode and installable app
- [ ] **Accessibility Audit** — WCAG 2.1 AA compliance

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

**Built with care by the Quizee Team**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mabdullah356/quieee)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

</div>
