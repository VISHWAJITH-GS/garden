import type { Plant } from '@/types/plant'

function normalizeText(value: string) {
  return value.toLowerCase().replace(/\s+/g, ' ').trim()
}

function compactText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '')
}

export function searchPlants(plants: Plant[], query: string) {
  const normalizedQuery = normalizeText(query)

  if (!normalizedQuery) {
    return plants
  }

  const queryTerms = normalizedQuery.split(' ').filter(Boolean)
  const compactQuery = compactText(normalizedQuery)

  return plants.filter((plant) => {
    const searchableText = [
      plant.tamilName,
      plant.englishName,
      plant.botanicalName,
      plant.category,
      ...plant.medicinalUses,
      ...(plant.plannedLocations ?? []),
    ]
      .join(' ')
    const normalizedSearchable = normalizeText(searchableText)
    const compactSearchable = compactText(searchableText)

    const includesAllTerms = queryTerms.every((term) => normalizedSearchable.includes(term))
    const includesCompactQuery = compactQuery.length > 2 && compactSearchable.includes(compactQuery)

    return includesAllTerms || includesCompactQuery
  })
}