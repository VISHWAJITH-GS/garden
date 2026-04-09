'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Leaf, ChevronRight } from 'lucide-react'
import { Plant } from '@/types/plant'
import { getPlantImagePath } from '@/lib/plant-image'

interface PlantCardProps {
	plant: Plant
	animationClass?: string
}

export default function PlantCard({ plant, animationClass = '' }: PlantCardProps) {
	return (
		<Link href={`/plant/${plant.id}`} className={`block animate-fade-up ${animationClass}`}>
			<div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 flex items-center gap-4 shadow-sm active:scale-95 transition-transform duration-150">
				<div className="relative w-20 h-20 rounded-xl bg-[var(--color-maroon-light)] flex-shrink-0 flex items-center justify-center overflow-hidden">
					<Image
						src={getPlantImagePath(plant.englishName)}
						alt={plant.englishName}
						width={80}
						height={80}
						className="object-cover w-full h-full rounded-xl"
						onError={(event) => {
							event.currentTarget.style.display = 'none'
						}}
					/>
					<Leaf size={28} className="text-[var(--color-maroon)] opacity-40 absolute" />
				</div>

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

				<ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" strokeWidth={2} />
			</div>
		</Link>
	)
}