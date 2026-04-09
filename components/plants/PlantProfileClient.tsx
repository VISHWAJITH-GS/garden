'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, Leaf, Tag } from 'lucide-react'
import type { Plant } from '@/types/plant'
import Header from '@/components/layout/Header'
import MedicinalPill from '@/components/plants/MedicinalPill'
import BottomNav from '@/components/layout/BottomNav'
import PageShell from '@/components/layout/PageShell'
import { getPlantImagePath } from '@/lib/plant-image'

interface PlantProfileClientProps {
	plant: Plant
}

export default function PlantProfileClient({ plant }: PlantProfileClientProps) {
	const [lang, setLang] = useState<'en' | 'ta'>('ta')
	const [imgError, setImgError] = useState(false)

	useEffect(() => {
		setImgError(false)
	}, [plant.englishName])

	return (
		<>
			<Header
				showLangToggle
				lang={lang}
				onToggleLang={() => setLang((current) => (current === 'en' ? 'ta' : 'en'))}
			/>

			<PageShell className="pb-28 bg-[var(--color-canvas)]">
				<div className="w-full h-72 bg-[var(--color-maroon-light)] relative flex items-center justify-center overflow-hidden">
					{!imgError ? (
						<Image
							key={plant.englishName}
							src={getPlantImagePath(plant.englishName)}
							alt={plant.englishName}
							fill
							className="object-cover"
							onError={() => setImgError(true)}
						/>
					) : (
						<div className="flex flex-col items-center gap-3">
							<Leaf size={56} className="text-[var(--color-maroon)] opacity-20" />
							<p className="text-sm text-[var(--color-text-secondary)]">Photo coming soon</p>
						</div>
					)}
				</div>

				<div className="mx-4 -mt-6 relative z-10">
					<div className="bg-[var(--color-surface)] rounded-2xl shadow-md border border-[var(--color-border)] p-5 animate-fade-up">
						<span className="inline-block bg-[var(--color-maroon-light)] text-[var(--color-maroon)] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[var(--color-maroon-border)] mb-3">
							{plant.category}
						</span>

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

						<div className="flex items-center gap-1.5 mt-3">
							<Tag size={13} className="text-gray-400 flex-shrink-0" />
							<p className="text-sm italic text-[var(--color-text-botanical)]">{plant.botanicalName}</p>
						</div>
					</div>
				</div>

				<div className="mx-4 mt-3 animate-fade-up stagger-2">
					<div className="bg-[var(--color-surface)] rounded-2xl shadow-sm border border-[var(--color-border)] p-5">
						<div className="flex items-center gap-2 mb-4">
							<Heart size={18} className="text-[var(--color-maroon)]" />
							<h2 className="font-bold text-[var(--color-text-primary)] text-sm uppercase tracking-wide">
								Medicinal Properties
							</h2>
						</div>

						<div className="flex flex-wrap gap-2">
							{plant.medicinalUses.map((use, index) => (
								<MedicinalPill key={index} text={use} />
							))}
						</div>
					</div>
				</div>

				<div className="mx-4 mt-4 animate-fade-up stagger-3">
					<Link
						href="/"
						className="flex items-center justify-center gap-2 w-full border-2 border-[var(--color-maroon)] text-[var(--color-maroon)] font-semibold text-sm py-3 rounded-xl hover:bg-[var(--color-maroon-light)] transition-colors"
					>
						<ArrowLeft size={16} />
						Back to Garden
					</Link>
				</div>
			</PageShell>

			<BottomNav />
		</>
	)
}