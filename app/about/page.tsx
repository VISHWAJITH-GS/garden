import { BookOpen, Leaf, MapPin, QrCode, Sprout } from 'lucide-react'
import Header from '@/components/layout/Header'
import BottomNav from '@/components/layout/BottomNav'
import plantsData from '@/data/plants.json'
import { Plant } from '@/types/plant'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const highlights = [
  {
    icon: Leaf,
    title: 'Local garden guide',
    text: 'Built for quick browsing on campus phones and QR scans placed near each plant board.',
  },
  {
    icon: QrCode,
    title: 'QR-first access',
    text: 'Each plant profile is reachable from a stable `/plant/[id]` route for direct scanning.',
  },
  {
    icon: BookOpen,
    title: 'Simple data model',
    text: 'Plant content lives in a single JSON file, which keeps updates easy for non-developers.',
  },
  {
    icon: MapPin,
    title: 'Campus context',
    text: 'TCE Garden documents medicinal plants maintained by Thiagarajar College of Engineering, Madurai.',
  },
]

export default function AboutPage() {
  const plantCount = (plantsData as Plant[]).length

  return (
    <>
      <Header />

      <main className="mx-auto max-w-md pb-24">
        <div className="bg-[var(--color-maroon)] px-5 pt-7 pb-8">
          <Badge className="bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold)] hover:opacity-90 font-bold uppercase tracking-widest px-3 py-1 mb-3">
            About TCE Garden
          </Badge>
          <h1 className="font-display text-3xl text-white leading-tight">A small guide for a living collection</h1>
          <p className="text-white/70 text-sm mt-1.5 font-body">
            A maintainable mobile app for browsing medicinal plants and their details.
          </p>
        </div>

        <div className="px-4 pt-5 grid gap-3">
          <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Sprout size={18} className="text-[var(--color-maroon)]" />
                <h2 className="font-semibold text-[var(--color-text-primary)]">Collection size</h2>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)]">
                The current catalogue contains {plantCount} plant records, all stored locally in one data file.
              </p>
            </CardContent>
          </Card>

          {highlights.map((highlight) => {
            const Icon = highlight.icon

            return (
              <Card
                key={highlight.title}
                className="rounded-2xl border-[var(--color-border)] shadow-sm"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={18} className="text-[var(--color-maroon)]" />
                    <h2 className="font-semibold text-[var(--color-text-primary)]">{highlight.title}</h2>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">{highlight.text}</p>
                </CardContent>
              </Card>
            )
          })}

          <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
            <CardContent className="p-5">
              <h2 className="font-semibold text-[var(--color-text-primary)] mb-2">How to update it</h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Edit the JSON data, add new plant photos under <span className="font-semibold">public/images/plants</span>,
                and update the shared helpers when the structure changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <BottomNav />
    </>
  )
}