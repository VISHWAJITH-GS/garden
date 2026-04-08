import { notFound } from 'next/navigation'
import plantsData from '@/data/plants.json'
import type { Plant } from '@/types/plant'
import PlantProfileClient from '@/components/plants/PlantProfileClient'

interface PlantProfilePageProps {
	params: {
		id: string
	}
}

export default function PlantProfilePage({ params }: PlantProfilePageProps) {
	const plant = (plantsData as Plant[]).find((entry) => entry.id === params.id)

	if (!plant) {
		notFound()
	}

	return <PlantProfileClient plant={plant} />
}
