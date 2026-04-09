import plantsData from '@/data/plants.json'
import { Plant } from '@/types/plant'
import Header from '@/components/layout/Header'
import PlantCard from '@/components/plants/PlantCard'
import { Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export default function HomePage() {
  const plants: Plant[] = plantsData as Plant[]

  const staggerClasses = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5']

  return (
    <>
      <Header />

      <main className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl pb-24 md:pb-12">
        <div className="bg-[var(--color-maroon)] px-5 md:px-10 lg:px-16 pt-7 md:pt-14 pb-8 md:pb-12 md:rounded-b-[2.5rem]">
          <Badge className="bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold)] hover:opacity-90 font-bold uppercase tracking-widest px-3 py-1 mb-3">
            {plants.length} Plants
          </Badge>
          <h1 className="font-display text-3xl text-white leading-tight">TCE Garden</h1>
          <p className="text-white/70 text-sm mt-1.5 font-body">
            Thiagarajar College of Engineering
            <br />
            Medicinal Plant Garden - Madurai
          </p>

          <div className="mt-5 md:mt-8 bg-white rounded-xl flex items-center px-4 md:px-6 py-3 gap-3 shadow-md md:w-2/3 lg:w-1/2">
            <Search size={16} className="text-gray-400 flex-shrink-0" />
            <Input
              type="text"
              placeholder="Search plants..."
              className="w-full text-sm placeholder-gray-400 outline-none font-body border-0 focus-visible:ring-0 shadow-none px-0 h-auto"
              readOnly
            />
          </div>
        </div>

        <div className="px-4 md:px-10 lg:px-16 pt-5 md:pt-10 pb-2 md:pb-6">
          <h2 className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-widest">
            All Plants
          </h2>
        </div>

        <div className="px-4 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
