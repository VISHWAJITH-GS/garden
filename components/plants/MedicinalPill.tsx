import { Badge } from '@/components/ui/badge'

interface MedicinalPillProps {
	text: string
}

export default function MedicinalPill({ text }: MedicinalPillProps) {
	return (
		<Badge variant="outline" className="bg-[var(--color-maroon-light)] text-[var(--color-maroon)] text-xs font-semibold px-3 py-1.5 rounded-full border-[var(--color-maroon-border)] hover:bg-[var(--color-maroon-light)] hover:opacity-90 inline-flex">
			{text}
		</Badge>
	)
}