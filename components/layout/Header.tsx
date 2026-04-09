'use client'

import Link from 'next/link'
import { Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
	showLangToggle?: boolean
	lang?: 'en' | 'ta'
	onToggleLang?: () => void
}

export default function Header({ showLangToggle = false, lang = 'en', onToggleLang }: HeaderProps) {
	return (
		<nav className="bg-[var(--color-surface)] border-b border-[var(--color-border)] px-4 py-3.5 flex justify-between items-center sticky top-0 z-50">
			<Link href="/" className="flex items-center gap-2.5">
				<div className="w-1.5 h-6 bg-[var(--color-maroon)] rounded-full" />
				<span className="font-display text-lg text-[var(--color-text-primary)] tracking-tight">
					TCE Garden
				</span>
			</Link>

			{showLangToggle ? (
				<Button
					variant="outline"
					onClick={onToggleLang}
					className="text-xs font-semibold text-[var(--color-maroon)] bg-[var(--color-maroon-light)] px-3 py-1.5 h-auto rounded-full border-[var(--color-maroon-border)] transition-colors hover:bg-[var(--color-maroon-border)] hover:text-[var(--color-maroon)]"
				>
					{lang === 'en' ? 'TA | EN' : 'EN | TA'}
				</Button>
			) : (
				<Leaf size={20} className="text-[var(--color-maroon)]" />
			)}
		</nav>
	)
}