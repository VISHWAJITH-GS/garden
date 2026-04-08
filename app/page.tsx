import plantsData from '@/data/plants.json'
import { Plant } from '@/types/plant'
import Header from '@/components/Header'
import PlantCard from '@/components/PlantCard'
import BottomNav from '@/components/BottomNav'
import { Search } from 'lucide-react'

export default function HomePage() {
  const plants: Plant[] = plantsData as Plant[]

  const staggerClasses = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5']

  return (
    <>
      <Header />

      <main className="max-w-md mx-auto pb-24">
        <div className="bg-[var(--color-maroon)] px-5 pt-7 pb-8">
          <span className="inline-block bg-[var(--color-gold)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            {plants.length} Plants
          </span>
          <h1 className="font-display text-3xl text-white leading-tight">TCE Garden</h1>
          <p className="text-white/70 text-sm mt-1.5 font-body">
            Thiagarajar College of Engineering
            <br />
            Medicinal Plant Garden - Madurai
          </p>

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

        <div className="px-4 pt-5 pb-2">
          <h2 className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-widest">
            All Plants
          </h2>
        </div>

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
