export function getPlantImagePath(englishName: string) {
	const slug = englishName
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')

	return `/images/plants/${slug}.png`
}
