# TCE GARDEN — GitHub Copilot Agent Build File
# Thiagarajar College of Engineering, Madurai
# Vibe Coding Prompt — Full Website

---

## YOUR MISSION

You are building **TCE Garden** — a mobile-first web application for Thiagarajar College of Engineering (TCE), Madurai. Students scan QR codes placed on physical plant boards across campus. Each QR code directs them to a specific plant's profile page on this website.

Read this entire file before writing a single line of code. Every decision — folder structure, colors, fonts, components — is defined here. Follow it exactly.

---

## TECH STACK

| Layer | Technology |
|---|---|
| Framework | **Next.js 14** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** |
| Fonts | **Google Fonts** — `Tiro Tamil` (for Tamil script) + `DM Serif Display` (for headings) + `DM Sans` (for body) |
| Icons | **Lucide React** |
| Data | Local `plants.json` file (no database needed) |
| Deployment | Vercel |

### Bootstrap Command
```bash
npx create-next-app@latest tce-garden --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd tce-garden
npm install lucide-react
```

---

## DESIGN SYSTEM

### Color Palette
Define these as CSS variables in `app/globals.css`. Do NOT use arbitrary Tailwind values — always reference these variables.

```css
:root {
  --color-maroon: #7B1C2E;         /* TCE Primary Brand — Deep Maroon */
  --color-maroon-dark: #5A1220;    /* Darker maroon for hover states */
  --color-maroon-light: #F9EEF0;   /* Very pale pink/rose for pill backgrounds */
  --color-maroon-border: #E8C5CC;  /* Soft border for maroon-tinted elements */
  --color-gold: #C9A84C;           /* TCE Gold accent — used sparingly */
  --color-canvas: #F7F5F2;         /* Warm off-white page background */
  --color-surface: #FFFFFF;        /* Card/panel surface */
  --color-text-primary: #1A1A1A;   /* Near-black for main text */
  --color-text-secondary: #6B7280; /* Muted gray for subtitles */
  --color-text-botanical: #4B5563; /* Slightly warmer gray for botanical names */
  --color-border: #E5E7EB;         /* Standard light border */
}
```

### Typography
In `tailwind.config.ts`, extend the font family:
```ts
fontFamily: {
  'display': ['"DM Serif Display"', 'serif'],
  'body': ['"DM Sans"', 'sans-serif'],
  'tamil': ['"Tiro Tamil"', 'serif'],
}
```

In `app/layout.tsx`, import from Google Fonts:
```tsx
import { DM_Serif_Display, DM_Sans, Tiro_Tamil } from 'next/font/google'

const dmSerif = DM_Serif_Display({ weight: '400', subsets: ['latin'] })
const dmSans = DM_Sans({ subsets: ['latin'] })
const tiroTamil = Tiro_Tamil({ weight: '400', subsets: ['tamil'], variable: '--font-tamil' })
```

### Spacing & Radius Rules
- Cards: `rounded-2xl` with `shadow-sm` and `border border-[var(--color-border)]`
- Pills/Badges: `rounded-full`
- Buttons: `rounded-xl`
- Inner card padding: `p-5` on mobile
- Page side padding: `px-4`

---

## FOLDER STRUCTURE

Create exactly this structure. Do not add extra folders.

```
tce-garden/
├── app/
│   ├── globals.css
│   ├── layout.tsx              ← Root layout with fonts and metadata
│   ├── page.tsx                ← Home / Garden Index page
│   ├── plant/
│   │   └── [id]/
│   │       └── page.tsx        ← Individual plant profile page (QR destination)
│   └── not-found.tsx           ← Custom 404 page
├── components/
│   ├── Header.tsx              ← Sticky top navigation bar
│   ├── PlantCard.tsx           ← Card used on the home index page
│   ├── MedicinalPill.tsx       ← Pill badge for a single medicinal use
│   └── BottomNav.tsx           ← Mobile bottom navigation bar
├── data/
│   └── plants.json             ← All 20 plant records
├── public/
│   └── images/
│       └── plants/             ← Place plant photos here as [id].jpg (e.g., omavalli-001.jpg)
├── types/
│   └── plant.ts                ← TypeScript type definition
└── tailwind.config.ts
```

---

## DATA FILE

Create `data/plants.json` with exactly this content:

```json
[
  {
    "id": "omavalli-001",
    "tamilName": "ஓமவல்லி",
    "englishName": "Mexican Mint",
    "botanicalName": "Plectranthus amboinicus",
    "medicinalUses": ["Treat Respiratory Ailments", "Digestive Issues"],
    "category": "Herb"
  },
  {
    "id": "tulasi-002",
    "tamilName": "துளசி",
    "englishName": "Holy Basil",
    "botanicalName": "Ocimum sanctum",
    "medicinalUses": ["Treat Respiratory Ailments", "Coughs & Colds", "Asthma Relief"],
    "category": "Herb"
  },
  {
    "id": "vicks-tulasi-003",
    "tamilName": "விக்ஸ் துளசி",
    "englishName": "Vicks Basil",
    "botanicalName": "Ocimum tenuiflorum",
    "medicinalUses": ["Treat Respiratory Issues", "Headaches", "Oral Care"],
    "category": "Herb"
  },
  {
    "id": "katralai-004",
    "tamilName": "கற்றாழை",
    "englishName": "Aloe Vera",
    "botanicalName": "Aloe barbadensis Miller",
    "medicinalUses": ["Soothing Skin (Sunburns, Acne)", "Moisturizing Hair and Scalp"],
    "category": "Succulent"
  },
  {
    "id": "sitharathai-005",
    "tamilName": "சித்தரத்தை",
    "englishName": "Lesser Galangal",
    "botanicalName": "Alpinia officinarum",
    "medicinalUses": ["Aid Digestion", "Reduce Inflammation", "Treat Respiratory Issues"],
    "category": "Root Herb"
  },
  {
    "id": "pirandai-006",
    "tamilName": "பிரண்டை",
    "englishName": "Veldt Grape",
    "botanicalName": "Cissus quadrangularis",
    "medicinalUses": ["Bone Healing (Fractures)", "Reducing Joint Pain", "Improving Digestive Health"],
    "category": "Climber"
  },
  {
    "id": "iranakalli-007",
    "tamilName": "இரணக்கள்ளி",
    "englishName": "Air Plant",
    "botanicalName": "Kalanchoe pinnata",
    "medicinalUses": ["Treat Kidney Stones", "Hypertension", "Infections"],
    "category": "Succulent"
  },
  {
    "id": "manjal-008",
    "tamilName": "மஞ்சள்",
    "englishName": "Turmeric",
    "botanicalName": "Curcuma longa",
    "medicinalUses": ["Medicine for Arthritis", "Digestive Disorders", "Wound Healing"],
    "category": "Root Herb"
  },
  {
    "id": "thanneervittan-009",
    "tamilName": "தண்ணீர்விட்டான்கிழங்கு",
    "englishName": "Shatavari",
    "botanicalName": "Asparagus racemosus",
    "medicinalUses": ["Support Hormonal Balance", "Increase Lactation"],
    "category": "Root Herb"
  },
  {
    "id": "kariveppilai-010",
    "tamilName": "கறிவேப்பிலை",
    "englishName": "Curry Leaf",
    "botanicalName": "Murraya koenigii",
    "medicinalUses": ["Aid Digestion", "Manage Diabetes", "Boost Hair Health"],
    "category": "Tree"
  },
  {
    "id": "thiruneetrupachilai-011",
    "tamilName": "திருநீற்றுப்பச்சிலை",
    "englishName": "Sweet Basil",
    "botanicalName": "Ocimum basilicum",
    "medicinalUses": ["Promote Heart Health", "Manage Blood Sugar", "Fight Bacterial Infections"],
    "category": "Herb"
  },
  {
    "id": "aadathodai-012",
    "tamilName": "ஆடாதோடை",
    "englishName": "Malabar Nut",
    "botanicalName": "Justicia adhatoda",
    "medicinalUses": ["Treat Cough & Asthma", "Bronchitis", "Tuberculosis"],
    "category": "Shrub"
  },
  {
    "id": "insulin-sedi-013",
    "tamilName": "இன்சுலின் செடி",
    "englishName": "Insulin Plant",
    "botanicalName": "Chamaecostus cuspidatus",
    "medicinalUses": ["Manage Diabetes", "Acts as Antioxidant", "Antimicrobial Properties"],
    "category": "Herb"
  },
  {
    "id": "arainelli-014",
    "tamilName": "அரைநெல்லி",
    "englishName": "Star Gooseberry",
    "botanicalName": "Phyllanthus acidus",
    "medicinalUses": ["Boosting Immunity", "Improving Digestion", "Treating Skin Issues"],
    "category": "Tree"
  },
  {
    "id": "avuri-015",
    "tamilName": "அவுரி",
    "englishName": "True Indigo",
    "botanicalName": "Indigofera tinctoria",
    "medicinalUses": ["Hair Care", "Medicine for Skin & Liver Conditions", "Nitrogen-Fixing Crop"],
    "category": "Shrub"
  },
  {
    "id": "peenarisangu-016",
    "tamilName": "பீநாறிச்சங்கு",
    "englishName": "Wild Jasmine",
    "botanicalName": "Clerodendrum inerme",
    "medicinalUses": ["Anti-Inflammatory", "Antimicrobial", "Treat Skin Diseases"],
    "category": "Shrub"
  },
  {
    "id": "theyilaimaram-017",
    "tamilName": "தேயிலைமரம்",
    "englishName": "Tea Tree",
    "botanicalName": "Melaleuca alternifolia",
    "medicinalUses": ["Treat Acne & Dandruff", "Fungal Nail Infections", "Soothe Bug Bites"],
    "category": "Tree"
  },
  {
    "id": "ilaipirandai-018",
    "tamilName": "இலைபிரண்டை",
    "englishName": "Roundleaf Cissus",
    "botanicalName": "Cissus rotundifolia",
    "medicinalUses": ["Treating Diabetes", "Burns", "Gastrointestinal Issues"],
    "category": "Climber"
  },
  {
    "id": "nilavembu-019",
    "tamilName": "நிலவேம்பு",
    "englishName": "King of Bitters",
    "botanicalName": "Andrographis paniculata",
    "medicinalUses": ["Treat Upper Respiratory Infections", "Common Cold & Influenza", "Immune-Boosting"],
    "category": "Herb"
  },
  {
    "id": "mathulai-020",
    "tamilName": "மாதுளை",
    "englishName": "Pomegranate",
    "botanicalName": "Punica granatum",
    "medicinalUses": ["Reduced Inflammation", "Drought-Tolerant Landscaping"],
    "category": "Tree"
  }
]
```

---

## TYPE DEFINITIONS

Create `types/plant.ts`:

```ts
export interface Plant {
  id: string;
  tamilName: string;
  englishName: string;
  botanicalName: string;
  medicinalUses: string[];
  category: string;
}
```

---

## ROOT LAYOUT — `app/layout.tsx`

```tsx
import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'TCE Garden',
  description: 'Explore the medicinal plant garden of Thiagarajar College of Engineering, Madurai.',
  themeColor: '#7B1C2E',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ta" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        {/* Load Tiro Tamil for Tamil script rendering */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tiro+Tamil&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-[var(--color-canvas)] text-[var(--color-text-primary)] antialiased">
        {children}
      </body>
    </html>
  )
}
```

---

## GLOBAL CSS — `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-maroon: #7B1C2E;
  --color-maroon-dark: #5A1220;
  --color-maroon-light: #F9EEF0;
  --color-maroon-border: #E8C5CC;
  --color-gold: #C9A84C;
  --color-canvas: #F7F5F2;
  --color-surface: #FFFFFF;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B7280;
  --color-text-botanical: #4B5563;
  --color-border: #E5E7EB;
  --font-tamil: 'Tiro Tamil', serif;
}

/* Tamil script: always use Tiro Tamil font */
.tamil-text {
  font-family: var(--font-tamil);
}

/* Page fade-in on load */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-fade-up {
  animation: fadeUp 0.4s ease-out forwards;
}

/* Staggered card animations */
.stagger-1 { animation-delay: 0.05s; opacity: 0; }
.stagger-2 { animation-delay: 0.10s; opacity: 0; }
.stagger-3 { animation-delay: 0.15s; opacity: 0; }
.stagger-4 { animation-delay: 0.20s; opacity: 0; }
.stagger-5 { animation-delay: 0.25s; opacity: 0; }
```

---

## TAILWIND CONFIG — `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        tamil: ["'Tiro Tamil'", 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

---

## COMPONENT 1 — `components/Header.tsx`

This is the sticky top bar present on every page.

**Visual spec:**
- White background, subtle bottom border
- Left: a small vertical maroon rectangle (2px wide, 24px tall) + "TCE Garden" in bold dark text
- Right (on plant profile page): an EN/TA toggle pill button in maroon style
- Right (on home page): a small leaf icon in maroon

```tsx
'use client'

import Link from 'next/link'
import { Leaf } from 'lucide-react'

interface HeaderProps {
  showLangToggle?: boolean
  lang?: 'en' | 'ta'
  onToggleLang?: () => void
}

export default function Header({ showLangToggle = false, lang = 'en', onToggleLang }: HeaderProps) {
  return (
    <nav className="bg-[var(--color-surface)] border-b border-[var(--color-border)] px-4 py-3.5 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2.5">
        {/* TCE Maroon brand accent bar */}
        <div className="w-1.5 h-6 bg-[var(--color-maroon)] rounded-full" />
        <span className="font-display text-lg text-[var(--color-text-primary)] tracking-tight">
          TCE Garden
        </span>
      </Link>

      {showLangToggle ? (
        <button
          onClick={onToggleLang}
          className="text-xs font-semibold text-[var(--color-maroon)] bg-[var(--color-maroon-light)] px-3 py-1.5 rounded-full border border-[var(--color-maroon-border)] transition-colors hover:bg-[var(--color-maroon-border)]"
        >
          {lang === 'en' ? 'TA | EN' : 'EN | TA'}
        </button>
      ) : (
        <Leaf size={20} className="text-[var(--color-maroon)]" />
      )}
    </nav>
  )
}
```

---

## COMPONENT 2 — `components/MedicinalPill.tsx`

A pill badge for a single medicinal use. Used on the plant profile page.

```tsx
interface MedicinalPillProps {
  text: string
}

export default function MedicinalPill({ text }: MedicinalPillProps) {
  return (
    <span className="inline-block bg-[var(--color-maroon-light)] text-[var(--color-maroon)] text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--color-maroon-border)]">
      {text}
    </span>
  )
}
```

---

## COMPONENT 3 — `components/PlantCard.tsx`

Card used on the home garden index page. Tapping it navigates to `/plant/[id]`.

**Visual spec:**
- White card, `rounded-2xl`, `shadow-sm`, `border`
- Left side: a small 80×80px square image placeholder (colored `bg-[var(--color-maroon-light)]`) with a leaf icon centered inside
- Right side: Tamil name (large, tamil font), English name (small, muted), botanical name (tiny, italic), and category pill
- Full card is a clickable link

```tsx
import Link from 'next/link'
import Image from 'next/image'
import { Leaf } from 'lucide-react'
import { Plant } from '@/types/plant'

interface PlantCardProps {
  plant: Plant
  animationClass?: string
}

export default function PlantCard({ plant, animationClass = '' }: PlantCardProps) {
  return (
    <Link href={`/plant/${plant.id}`} className={`block animate-fade-up ${animationClass}`}>
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 flex items-center gap-4 shadow-sm active:scale-95 transition-transform duration-150">
        
        {/* Plant Image / Placeholder */}
        <div className="w-20 h-20 rounded-xl bg-[var(--color-maroon-light)] flex-shrink-0 flex items-center justify-center overflow-hidden">
          <Image
            src={`/images/plants/${plant.id}.jpg`}
            alt={plant.englishName}
            width={80}
            height={80}
            className="object-cover w-full h-full rounded-xl"
            onError={(e) => {
              // If no image found, show placeholder
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          {/* Fallback leaf icon — shown when no image exists */}
          <Leaf size={28} className="text-[var(--color-maroon)] opacity-40 absolute" />
        </div>

        {/* Plant Info */}
        <div className="flex-1 min-w-0">
          <p className="tamil-text text-xl font-bold text-[var(--color-text-primary)] leading-tight truncate">
            {plant.tamilName}
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-medium mt-0.5 truncate">
            {plant.englishName}
          </p>
          <p className="text-xs italic text-[var(--color-text-botanical)] mt-0.5 truncate">
            {plant.botanicalName}
          </p>
          <span className="mt-2 inline-block bg-[var(--color-maroon-light)] text-[var(--color-maroon)] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[var(--color-maroon-border)] uppercase tracking-wide">
            {plant.category}
          </span>
        </div>

        {/* Arrow */}
        <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
```

---

## COMPONENT 4 — `components/BottomNav.tsx`

Mobile bottom navigation bar. Always fixed to the bottom of the screen.

**Tabs:** Home (Garden), Search, About

```tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Info } from 'lucide-react'

const navItems = [
  { label: 'Garden',  href: '/',       icon: Home   },
  { label: 'Search',  href: '/search', icon: Search },
  { label: 'About',   href: '/about',  icon: Info   },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--color-surface)] border-t border-[var(--color-border)] flex justify-around items-center py-2 z-50 max-w-md mx-auto">
      {navItems.map(({ label, href, icon: Icon }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-colors ${
              isActive
                ? 'text-[var(--color-maroon)]'
                : 'text-[var(--color-text-secondary)]'
            }`}
          >
            <Icon
              size={22}
              strokeWidth={isActive ? 2.5 : 1.8}
              className={isActive ? 'text-[var(--color-maroon)]' : 'text-[var(--color-text-secondary)]'}
            />
            <span className={`text-[10px] font-semibold ${isActive ? 'text-[var(--color-maroon)]' : ''}`}>
              {label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
```

---

## PAGE 1 — HOME / GARDEN INDEX — `app/page.tsx`

This is the full list of all 20 plants. Students land here if they type the root URL.

**Visual spec:**
- Header at the top (no lang toggle here)
- A hero section: maroon background strip with "TCE Garden 🌿" in white display font, subtitle "Thiagarajar College of Engineering — Medicinal Plant Garden", and a small "20 Plants" pill badge
- Search bar below the hero: full-width, rounded, with magnifying glass icon
- List of all 20 `PlantCard` components with staggered fade-up animation
- Bottom nav fixed at the bottom
- Add `pb-24` to the main content area so cards aren't hidden behind the bottom nav

```tsx
import plantsData from '@/data/plants.json'
import { Plant } from '@/types/plant'
import Header from '@/components/Header'
import PlantCard from '@/components/PlantCard'
import BottomNav from '@/components/BottomNav'
import { Search } from 'lucide-react'

export default function HomePage() {
  const plants: Plant[] = plantsData as Plant[]

  const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5']

  return (
    <>
      <Header />

      <main className="max-w-md mx-auto pb-24">
        
        {/* Hero Banner */}
        <div className="bg-[var(--color-maroon)] px-5 pt-7 pb-8">
          <span className="inline-block bg-[var(--color-gold)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            {plants.length} Plants
          </span>
          <h1 className="font-display text-3xl text-white leading-tight">
            TCE Garden
          </h1>
          <p className="text-white/70 text-sm mt-1.5 font-body">
            Thiagarajar College of Engineering<br />Medicinal Plant Garden — Madurai
          </p>

          {/* Search Bar */}
          <div className="mt-5 bg-white rounded-xl flex items-center px-4 py-3 gap-3 shadow-md">
            <Search size={16} className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search plants..."
              className="w-full text-sm text-[var(--color-text-primary)] placeholder-gray-400 outline-none font-body"
              readOnly
            />
          </div>
        </div>

        {/* Section Label */}
        <div className="px-4 pt-5 pb-2">
          <h2 className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-widest">
            All Plants
          </h2>
        </div>

        {/* Plant Cards List */}
        <div className="px-4 flex flex-col gap-3">
          {plants.map((plant, index) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              animationClass={staggerClasses[index % staggerClasses.length]}
            />
          ))}
        </div>

      </main>

      <BottomNav />
    </>
  )
}
```

---

## PAGE 2 — PLANT PROFILE — `app/plant/[id]/page.tsx`

**This is the most important page.** Every QR code points here. The URL format is `/plant/omavalli-001`.

**Visual spec:**

1. **Header** — with EN/TA language toggle (`showLangToggle={true}`)
2. **Plant Image** — full-width, 288px tall (`h-72`), `object-cover`. If no image exists, show a maroon-tinted placeholder with a large leaf icon centered
3. **Floating info card** — White card that overlaps the bottom of the image by `-mt-6`, `rounded-2xl`, `shadow-md`, `mx-4`, `p-5`
   - Tamil name in `font-tamil text-4xl font-bold`
   - English name in `text-base text-[var(--color-text-secondary)]`
   - Botanical name in `text-sm italic text-[var(--color-text-botanical)]` with a small tag icon
4. **Medicinal Properties card** — separate white card below, `mx-4 mt-3`, lists all `MedicinalPill` components in a flex-wrap layout, with a heart icon header
5. **Category badge** — shown between the name and properties cards
6. **Back to Garden button** — at the very bottom, `mx-4 mt-4`, full-width, outlined maroon button
7. Wrap everything in `pb-24` to avoid bottom nav overlap

```tsx
'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Tag, Heart, ArrowLeft, Leaf } from 'lucide-react'
import plantsData from '@/data/plants.json'
import { Plant } from '@/types/plant'
import Header from '@/components/Header'
import MedicinalPill from '@/components/MedicinalPill'
import BottomNav from '@/components/BottomNav'

interface PlantProfileProps {
  params: { id: string }
}

export default function PlantProfile({ params }: PlantProfileProps) {
  const [lang, setLang] = useState<'en' | 'ta'>('ta')
  const [imgError, setImgError] = useState(false)

  const plant = (plantsData as Plant[]).find(p => p.id === params.id)

  if (!plant) notFound()

  return (
    <>
      <Header
        showLangToggle
        lang={lang}
        onToggleLang={() => setLang(l => l === 'en' ? 'ta' : 'en')}
      />

      <main className="max-w-md mx-auto pb-28 bg-[var(--color-canvas)]">

        {/* Plant Image */}
        <div className="w-full h-72 bg-[var(--color-maroon-light)] relative flex items-center justify-center overflow-hidden">
          {!imgError ? (
            <Image
              src={`/images/plants/${plant.id}.jpg`}
              alt={plant.englishName}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Fallback Placeholder */
            <div className="flex flex-col items-center gap-3">
              <Leaf size={56} className="text-[var(--color-maroon)] opacity-20" />
              <p className="text-sm text-[var(--color-text-secondary)]">Photo coming soon</p>
            </div>
          )}
        </div>

        {/* Core Info Card — overlaps image */}
        <div className="mx-4 -mt-6 relative z-10">
          <div className="bg-[var(--color-surface)] rounded-2xl shadow-md border border-[var(--color-border)] p-5 animate-fade-up">
            
            {/* Category Pill */}
            <span className="inline-block bg-[var(--color-maroon-light)] text-[var(--color-maroon)] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[var(--color-maroon-border)] mb-3">
              {plant.category}
            </span>

            {/* Plant Names */}
            {lang === 'ta' ? (
              <>
                <h1 className="tamil-text text-4xl font-bold text-[var(--color-text-primary)] leading-tight">
                  {plant.tamilName}
                </h1>
                <p className="text-base text-[var(--color-text-secondary)] font-semibold mt-1">
                  {plant.englishName}
                </p>
              </>
            ) : (
              <>
                <h1 className="font-display text-3xl text-[var(--color-text-primary)] leading-tight">
                  {plant.englishName}
                </h1>
                <p className="tamil-text text-xl text-[var(--color-text-secondary)] mt-1">
                  {plant.tamilName}
                </p>
              </>
            )}

            {/* Botanical Name */}
            <div className="flex items-center gap-1.5 mt-3">
              <Tag size={13} className="text-gray-400 flex-shrink-0" />
              <p className="text-sm italic text-[var(--color-text-botanical)]">
                {plant.botanicalName}
              </p>
            </div>

          </div>
        </div>

        {/* Medicinal Properties Card */}
        <div className="mx-4 mt-3 animate-fade-up stagger-2">
          <div className="bg-[var(--color-surface)] rounded-2xl shadow-sm border border-[var(--color-border)] p-5">
            
            {/* Card Header */}
            <div className="flex items-center gap-2 mb-4">
              <Heart size={18} className="text-[var(--color-maroon)]" />
              <h2 className="font-bold text-[var(--color-text-primary)] text-sm uppercase tracking-wide">
                Medicinal Properties
              </h2>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {plant.medicinalUses.map((use, index) => (
                <MedicinalPill key={index} text={use} />
              ))}
            </div>

          </div>
        </div>

        {/* Back to Garden Button */}
        <div className="mx-4 mt-4 animate-fade-up stagger-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full border-2 border-[var(--color-maroon)] text-[var(--color-maroon)] font-semibold text-sm py-3 rounded-xl hover:bg-[var(--color-maroon-light)] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Garden
          </Link>
        </div>

      </main>

      <BottomNav />
    </>
  )
}
```

---

## PAGE 3 — CUSTOM 404 — `app/not-found.tsx`

Shown when someone scans an invalid/old QR code.

```tsx
import Link from 'next/link'
import { Leaf, AlertCircle } from 'lucide-react'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="max-w-md mx-auto min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-sm p-8 w-full">
          <AlertCircle size={40} className="text-[var(--color-maroon)] mx-auto mb-4 opacity-60" />
          <h1 className="font-display text-2xl text-[var(--color-text-primary)] mb-2">
            Plant Not Found
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            This QR code may be outdated or invalid. Please check the board and try scanning again.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[var(--color-maroon)] text-white font-semibold text-sm px-5 py-3 rounded-xl"
          >
            <Leaf size={16} />
            Browse All Plants
          </Link>
        </div>
      </main>
    </>
  )
}
```

---

## QR CODE GENERATION

After the site is deployed, generate QR codes for each plant using the following URLs. Each QR code must be printed on a **20cm × 30cm** weather-resistant board.

| Board Label | QR Code URL |
|---|---|
| ஓமவல்லி | `https://your-domain.com/plant/omavalli-001` |
| துளசி | `https://your-domain.com/plant/tulasi-002` |
| விக்ஸ் துளசி | `https://your-domain.com/plant/vicks-tulasi-003` |
| கற்றாழை | `https://your-domain.com/plant/katralai-004` |
| சித்தரத்தை | `https://your-domain.com/plant/sitharathai-005` |
| பிரண்டை | `https://your-domain.com/plant/pirandai-006` |
| இரணக்கள்ளி | `https://your-domain.com/plant/iranakalli-007` |
| மஞ்சள் | `https://your-domain.com/plant/manjal-008` |
| தண்ணீர்விட்டான்கிழங்கு | `https://your-domain.com/plant/thanneervittan-009` |
| கறிவேப்பிலை | `https://your-domain.com/plant/kariveppilai-010` |
| திருநீற்றுப்பச்சிலை | `https://your-domain.com/plant/thiruneetrupachilai-011` |
| ஆடாதோடை | `https://your-domain.com/plant/aadathodai-012` |
| இன்சுலின் செடி | `https://your-domain.com/plant/insulin-sedi-013` |
| அரைநெல்லி | `https://your-domain.com/plant/arainelli-014` |
| அவுரி | `https://your-domain.com/plant/avuri-015` |
| பீநாறிச்சங்கு | `https://your-domain.com/plant/peenarisangu-016` |
| தேயிலைமரம் | `https://your-domain.com/plant/theyilaimaram-017` |
| இலைபிரண்டை | `https://your-domain.com/plant/ilaipirandai-018` |
| நிலவேம்பு | `https://your-domain.com/plant/nilavembu-019` |
| மாதுளை | `https://your-domain.com/plant/mathulai-020` |

Use [qr-code-generator.com](https://www.qr-code-generator.com) or run `npm install qrcode` and generate them programmatically.

---

## ADDING PLANT PHOTOS

1. Take a clear photo of each plant on campus.
2. Rename the file to match the plant ID exactly. Example: `omavalli-001.jpg`
3. Place all photos in `public/images/plants/`
4. The `<Image>` component will automatically load them. If no photo exists, the placeholder is shown — the site will NOT crash.

Recommended photo specs:
- Format: JPG or WebP
- Size: 800×600px minimum
- Compress to under 200KB using [squoosh.app](https://squoosh.app)

---

## DEPLOYMENT STEPS

1. Push the project to GitHub: `git init → git add . → git commit -m "Initial TCE Garden build" → git push`
2. Go to [vercel.com](https://vercel.com) → "Add New Project" → Import from GitHub
3. Framework: Next.js (auto-detected)
4. Click **Deploy**
5. Replace `your-domain.com` in all QR codes with the Vercel URL (e.g., `tce-garden.vercel.app`)
6. Optional: Add a custom domain like `garden.tce.edu` in Vercel Settings → Domains

---

## CHECKLIST FOR THE AGENT

Before finishing, verify every item below:

- [ ] `data/plants.json` has all 20 plants with correct Tamil names
- [ ] `types/plant.ts` is created with the `Plant` interface
- [ ] CSS variables are defined in `globals.css`
- [ ] Tailwind config has `font-display`, `font-body`, `font-tamil` defined
- [ ] Google Fonts (`DM Serif Display`, `DM Sans`, `Tiro Tamil`) are loaded in `layout.tsx`
- [ ] `Header.tsx` has the maroon accent bar and lang toggle
- [ ] `PlantCard.tsx` links correctly to `/plant/[id]`
- [ ] `MedicinalPill.tsx` uses the maroon-light background
- [ ] `BottomNav.tsx` highlights the active route
- [ ] `app/page.tsx` renders all 20 plant cards with stagger animation
- [ ] `app/plant/[id]/page.tsx` reads the ID from params, finds the plant, renders profile
- [ ] `app/plant/[id]/page.tsx` has language toggle that switches between Tamil and English display
- [ ] `app/not-found.tsx` shows a friendly error for bad QR codes
- [ ] `public/images/plants/` folder exists (even if empty — images added later)
- [ ] Image fallback works without crashing when `.jpg` is missing
- [ ] Bottom nav does not cover content (use `pb-24` or `pb-28` on main)
- [ ] Site is fully responsive and looks correct on a 375px wide mobile screen
- [ ] Run `npm run build` and confirm zero TypeScript/build errors before deploying

---

*End of Build File — TCE Garden, Thiagarajar College of Engineering, Madurai*
