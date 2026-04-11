import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PlantProfileClient from '@/components/plants/PlantProfileClient'
import { getPlantById } from '@/lib/plants'

interface PlantPageProps {
	params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PlantPageProps): Promise<Metadata> {
	const { id } = await params
	const plant = getPlantById(id)

	if (!plant) {
		return {
			title: 'Plant Not Found - TCE Garden',
			description: 'The plant you are looking for could not be found.',
		}
	}

	return {
		title: `${plant.englishName} - TCE Garden`,
		description: `Learn about ${plant.englishName} (${plant.tamilName}), a medicinal herb in the TCE Garden. Scientific name: ${plant.botanicalName}`,
		openGraph: {
			title: `${plant.englishName} - TCE Garden`,
			description: `Explore the medicinal properties and details of ${plant.englishName}`,
			images: [`/images/plants/${plant.id}.png`],
		},
	}
}

export default async function PlantPage({ params }: PlantPageProps) {
	const { id } = await params
	const plant = getPlantById(id)

	if (!plant) {
		notFound()
	}

	return (
		<>
			<PlantProfileClient plant={plant} />
		</>
	)
}
