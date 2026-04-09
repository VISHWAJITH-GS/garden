'use client'

import { useMemo, useState } from 'react'
import { Search, Leaf } from 'lucide-react'
import Header from '@/components/layout/Header'
import BottomNav from '@/components/layout/BottomNav'
import PlantCard from '@/components/plants/PlantCard'
import plantsData from '@/data/plants.json'
import { Plant } from '@/types/plant'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const plants = plantsData as Plant[]
  const filteredPlants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return plants
    }

    return plants.filter((plant) => {
      const searchableText = [
        plant.tamilName,
        plant.englishName,
        plant.botanicalName,
        plant.category,
        ...plant.medicinalUses,
      ]
        .join(' ')
        .toLowerCase()

      return searchableText.includes(normalizedQuery)
    })
  }, [plants, query])

  return (
    <>
      <Header />

      <main className="mx-auto max-w-md pb-24">
        <div className="bg-[var(--color-maroon)] px-5 pt-7 pb-7">
          <Badge className="bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold)] hover:opacity-90 font-bold uppercase tracking-widest px-3 py-1 mb-3">
            Search Plants
          </Badge>
          <h1 className="font-display text-3xl text-white leading-tight">Find a plant fast</h1>
          <p className="text-white/70 text-sm mt-1.5 font-body">
            Search by Tamil name, English name, botanical name, category, or medicinal use.
          </p>

          <div className="mt-5 bg-white rounded-xl flex items-center px-4 py-3 gap-3 shadow-md">
            <Search size={16} className="text-gray-400 flex-shrink-0" />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search plants..."
              className="w-full text-sm placeholder-gray-400 outline-none font-body bg-transparent border-0 focus-visible:ring-0 shadow-none px-0 h-auto"
            />
          </div>
        </div>

        <div className="px-4 pt-5 pb-2 flex items-center justify-between gap-3">
          <h2 className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-widest">
            Results
          </h2>
          <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
            {filteredPlants.length} of {plants.length}
          </span>
        </div>

        <div className="px-4 flex flex-col gap-3">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant, index) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                animationClass={`stagger-${(index % 5) + 1}`}
              />
            ))
          ) : (
            <Card className="rounded-2xl shadow-sm border-[var(--color-border)]">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <Leaf size={32} className="text-[var(--color-maroon)] mb-3 opacity-30" />
                <p className="font-semibold text-[var(--color-text-primary)]">No matching plants</p>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                  Try a different name, category, or medicinal use.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <BottomNav />
    </>
  )
}