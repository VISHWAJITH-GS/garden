'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, Leaf, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Plant } from '@/types/plant'
import Navbar from '@/components/layout/Navbar'
import MedicinalPill from '@/components/plants/MedicinalPill'
import PageShell from '@/components/layout/PageShell'
import { getPlantImagePath } from '@/lib/plant-image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

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
			<Navbar
				showLangToggle
				lang={lang}
				onToggleLang={() => setLang((current) => (current === 'en' ? 'ta' : 'en'))}
			/>

			<PageShell className="pb-28 md:pb-12 bg-[var(--color-canvas)] md:bg-transparent">
				<div className="flex flex-col md:flex-row md:items-start md:gap-8 md:p-8">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
					className="w-full h-72 md:h-[500px] md:w-1/2 md:rounded-3xl bg-[var(--color-maroon-light)] relative flex items-center justify-center overflow-hidden flex-shrink-0 md:shadow-lg"
				>
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
				</motion.div>

				<div className="flex flex-col flex-1 w-full relative z-10 md:mt-4">
				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.42 }} className="mx-4 -mt-6 md:m-0">
					<Card className="rounded-2xl shadow-md border-[var(--color-border)] md:border-transparent md:shadow-none md:bg-transparent">
						<CardContent className="p-5 md:p-0">
						<Badge className="bg-[var(--color-maroon-light)] text-[var(--color-maroon)] hover:bg-[var(--color-maroon-light)] hover:opacity-90 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[var(--color-maroon-border)] mb-3 inline-flex">
							{plant.category}
						</Badge>

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
						</CardContent>
					</Card>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.42 }} className="mx-4 mt-3 md:mx-0 md:mt-6">
					<Card className="rounded-2xl shadow-sm border-[var(--color-border)]">
						<CardContent className="p-5">
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
						</CardContent>
					</Card>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.42 }} className="mx-4 mt-4 md:mx-0 md:mt-8">
					<Button asChild variant="outline" className="w-full border-2 border-[var(--color-maroon)] text-[var(--color-maroon)] font-semibold text-sm h-12 rounded-xl hover:bg-[var(--color-maroon-light)] hover:text-[var(--color-maroon)] dark:hover:text-[var(--color-maroon)] transition-colors">
						<Link href="/">
							<ArrowLeft size={16} />
							Back to Garden
						</Link>
					</Button>
				</motion.div>
				</div>
				</div>
			</PageShell>
		</>
	)
}