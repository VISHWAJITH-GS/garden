import plantsData from '@/data/plants.json'
import { Plant } from '@/types/plant'
import Navbar from '@/components/layout/Navbar'
import PlantCard from '@/components/plants/PlantCard'
import Link from 'next/link'
import { ArrowDown, Leaf, Shapes, MapPin, Search } from 'lucide-react'
import { FadeIn, HoverLift } from '@/components/ui/motion'

export default function GardenPage() {
  const plants: Plant[] = plantsData as Plant[]
  const categoriesCount = new Set(plants.map((plant) => plant.category)).size
  const staggerClasses = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5']

  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl pb-20 md:pb-12">
        <FadeIn>
          <section className="px-4 sm:px-5 md:px-10 lg:px-16 pt-7 md:pt-10 pb-4 md:pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5 lg:gap-6 items-end">
              <div>
                <h1 className="heading-hero text-3xl md:text-5xl text-[var(--color-maroon)]">TCE Garden</h1>
                <p className="copy-muted text-sm md:text-lg mt-2 max-w-2xl">
                  Medicinal Plant Garden
                  <br />
                  Thiagarajar College of Engineering, Madurai
                </p>

                <div className="mt-5 flex flex-col sm:flex-row items-start gap-2.5">
                  <a
                    href="#plant-catalog"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-maroon)] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-maroon-dark)]"
                  >
                    Browse Plant Collection
                    <ArrowDown size={15} />
                  </a>

                  <Link
                    href="/search"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-maroon)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-maroon)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-maroon-light)]"
                  >
                    Search Plants
                    <Search size={15} />
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-maroon-light)]/35 p-4 md:p-5">
                <p className="text-xs font-semibold font-body uppercase tracking-[0.14em] text-[var(--color-maroon)] mb-3">Garden Snapshot</p>
                <div className="space-y-2.5">
                  <HoverLift>
                  <div className="rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-body uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">Total Plants</p>
                      <p className="mt-1 heading-section text-[var(--color-maroon)] text-lg">{plants.length}</p>
                    </div>
                    <Leaf size={18} className="text-[var(--color-gold)]" />
                  </div>
                  </HoverLift>

                  <HoverLift>
                  <div className="rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-body uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">Categories</p>
                      <p className="mt-1 heading-section text-[var(--color-maroon)] text-lg">{categoriesCount}</p>
                    </div>
                    <Shapes size={18} className="text-[var(--color-gold)]" />
                  </div>
                  </HoverLift>

                  <HoverLift>
                  <div className="rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-body uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">Location</p>
                      <p className="mt-1 heading-section text-[var(--color-maroon)] text-base">TCE Campus</p>
                    </div>
                    <MapPin size={18} className="text-[var(--color-gold)]" />
                  </div>
                  </HoverLift>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.08} className="px-4 sm:px-5 md:px-10 lg:px-16 pt-5 md:pt-10 pb-2 md:pb-6">
          <h2 className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-widest">
            All Plants
          </h2>
        </FadeIn>

        <div id="plant-catalog" className="px-4 sm:px-5 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {plants.map((plant, index) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              animationClass={staggerClasses[index % staggerClasses.length]}
            />
          ))}
        </div>
      </main>
    </>
  )
}
