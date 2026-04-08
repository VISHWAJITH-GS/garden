interface MedicinalPillProps {
	text: string
}

export default function MedicinalPill({ text }: MedicinalPillProps) {
	return (
		<span className="inline-block bg-[var(--color-maroon-light)] text-[var(--color-maroon)] text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--color-maroon-border)]">
			{text}
		</span>
	)
}
