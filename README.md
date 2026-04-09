# TCE Garden 🌿

**TCE Garden** is a mobile-first web application built for the Thiagarajar College of Engineering (TCE), Madurai. It serves as a digital companion to the physical medicinal plant garden on campus. Students can scan QR codes placed on plant boards to instantly view the plant's profile, including its Tamil name, English name, botanical name, and medicinal uses.

## Features

- **Mobile-First Design**: Optimized for students viewing on their phones while exploring the garden.
- **Bilingual Support (EN/TA)**: Plant profiles can be toggled between English and Tamil.
- **Searchable Index**: Browse and search through all the medicinal plants available in the garden.
- **Fast & Responsive**: Built with Next.js App Router for optimal performance.
- **Offline Data**: Uses local JSON data for fast, reliable access without a database.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Fonts** | Google Fonts — `Tiro Tamil` (Tamil script), `DM Serif Display` (Headings), `DM Sans` (Body) |
| **Icons** | Lucide React |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
d:\garden\
├── app/
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home / Garden Index page
│   └── plant/[id]/page.tsx # Individual plant profile page (QR destination)
├── components/
│   ├── Header.tsx          # Sticky top navigation bar
│   ├── PlantCard.tsx       # Card used on the home index page
│   ├── MedicinalPill.tsx   # Pill badge for a single medicinal use
│   └── BottomNav.tsx       # Mobile bottom navigation bar
├── data/
│   └── plants.json         # All plant records
└── public/
    └── images/
        └── plants/         # Plant photos
```

## Data Customization

Plant data is managed in `data/plants.json`. To add or modify plants, edit this file. The images associated with the plants should be placed in `public/images/plants/` with the filename matching the plant's `id` (e.g., `omavalli-001.jpg`).

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
