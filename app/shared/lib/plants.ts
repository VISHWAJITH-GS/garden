import plantsData from '@/data/plants.json'
import type { Plant } from '@/types/plant'

const AVAILABLE_LOCATIONS = ['BHalls', 'Main block', 'Behind FC', 'AT block', 'Architecture']

function getStableHash(input: string) {
  return input.split('').reduce((hash, char) => hash + char.charCodeAt(0), 0)
}

function getPlannedLocationsForPlant(plant: Plant) {
  const hash = getStableHash(plant.id)
  const count = (hash % 3) + 2
  const locations = new Set<string>()
  let index = hash

  while (locations.size < count) {
    locations.add(AVAILABLE_LOCATIONS[index % AVAILABLE_LOCATIONS.length])
    index += 1
  }

  return Array.from(locations)
}

const plants = (plantsData as Plant[]).map((plant) => ({
  ...plant,
  plannedLocations: getPlannedLocationsForPlant(plant),
}))

export function getAllPlants() {
  return plants
}

export function getPlantById(id: string) {
  return plants.find((plant) => plant.id === id)
}

export function getPlantCount() {
  return plants.length
}