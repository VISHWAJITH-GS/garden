'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, ArrowLeft, X } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import PlantCard from '@/components/plants/PlantCard'
import { getAllPlants } from '@/lib/plants'
import { searchPlants } from '@/lib/plant-search'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const plants = getAllPlants()

export default function SearchPage() {
  const [query, setQuery] = useState('')

  const filteredPlants = useMemo(() => searchPlants(plants, query), [query])

  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl pb-20 md:pb-12">
        <section className="px-4 sm:px-5 md:px-10 lg:px-16 pt-7 md:pt-10 pb-4 md:pb-6">
          <div className="flex items-start justify-between gap-3 mb-5">
            <div>
              <h1 className="heading-hero text-3xl md:text-5xl text-[var(--color-maroon)]">Search Plants</h1>
              <p className="copy-muted text-sm md:text-lg mt-2 max-w-2xl">
                Search by Tamil/English name, botanical name, medicinal uses, category, or planned location.
              </p>
            </div>
            <Button
              asChild
              className="shrink-0 border border-[var(--color-maroon)] bg-[var(--color-maroon)] text-white hover:bg-[var(--color-maroon-dark)]"
            >
              <Link href="/garden">
                <ArrowLeft size={16} />
                Garden
              </Link>
            </Button>
          </div>

          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try: Adathoda, Justicia adhatoda, cough, Main block..."
              className="pl-10 pr-10 h-11"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] hover:text-[var(--color-maroon)]"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <p className="mt-3 text-xs md:text-sm text-[var(--color-text-secondary)]">
            Showing {filteredPlants.length} of {plants.length} plants
          </p>
        </section>

        <section className="px-4 sm:px-5 md:px-10 lg:px-16 pb-6">
          {filteredPlants.length === 0 ? (
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center">
              <p className="heading-section text-lg text-[var(--color-maroon)]">No matching plants found</p>
              <p className="copy-muted text-sm mt-2">Try a broader term like a symptom, category, or location name.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {filteredPlants.map((plant, index) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  animationClass={`stagger-${(index % 5) + 1}`}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  )
}
