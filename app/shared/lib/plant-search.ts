import type { Plant } from '@/types/plant'

export function searchPlants(plants: Plant[], query: string) {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return plants
  }

  return plants.filter((plant) => {
    const searchableText = [
      plant.tamilName,
      plant.englishName,
      plant.botanicalName,
      plant.category,
      ...plant.medicinalUses,
    ]
      .join(' ')
      .toLowerCase()

    return searchableText.includes(normalizedQuery)
  })
}