'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import { Plant } from '@/types/plant'
import { getPlantImagePath } from '@/lib/plant-image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface PlantCardProps {
	plant: Plant
	animationClass?: string
}

export default function PlantCard({ plant, animationClass = '' }: PlantCardProps) {
	const [imageLoaded, setImageLoaded] = useState(false)
	const [imageFailed, setImageFailed] = useState(false)

	return (
		<Link href={`/plant/${plant.id}`}>
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
				className={cn('group', animationClass)}
			>
				<motion.div whileHover={{ y: -4, scale: 1.015 }} whileTap={{ scale: 0.985 }} transition={{ duration: 0.2 }}>
					<Card className="border-[var(--color-border)] rounded-2xl smooth-shadow bg-white/90 backdrop-blur-[2px] transition-all duration-250 group-hover:border-[var(--color-maroon-border)] group-hover:shadow-lg">
						<CardContent className="p-4 flex items-center gap-4">
							<div className="relative w-20 h-20 rounded-xl bg-[var(--color-maroon-light)] flex-shrink-0 flex items-center justify-center overflow-hidden">
								{!imageFailed && (
									<Image
										src={getPlantImagePath(plant.englishName)}
										alt={plant.englishName}
										width={80}
										height={80}
										className="object-cover w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-110"
										onLoad={() => setImageLoaded(true)}
										onError={() => setImageFailed(true)}
									/>
								)}
								{(!imageLoaded || imageFailed) && (
									<Leaf size={28} className="text-[var(--color-maroon)] opacity-40 absolute" />
								)}
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
								<Badge className="mt-2 bg-[var(--color-maroon-light)] text-[var(--color-maroon)] hover:bg-[var(--color-maroon-light)] hover:opacity-90 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[var(--color-maroon-border)] uppercase tracking-wide">
									{plant.category}
								</Badge>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</motion.div>
		</Link>
	)
}