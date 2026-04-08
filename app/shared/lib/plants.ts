import plantsData from '@/data/plants.json'
import type { Plant } from '@/types/plant'

const plants = plantsData as Plant[]

export function getAllPlants() {
  return plants
}

export function getPlantById(id: string) {
  return plants.find((plant) => plant.id === id)
}

export function getPlantCount() {
  return plants.length
}