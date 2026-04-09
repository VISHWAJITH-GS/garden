'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
	showLangToggle?: boolean
	lang?: 'en' | 'ta'
	onToggleLang?: () => void
}

export default function Header({ showLangToggle = false, lang = 'en', onToggleLang }: HeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full flex flex-col bg-[var(--color-surface)] shadow-md">
			<div className="w-full relative h-[48px] md:h-[60px] bg-white">
				<Image src="/images/tce-banner.png" alt="TCE Banner" fill className="object-cover object-top opacity-90" priority />
			</div>
			<div className="border-b border-[var(--color-border)] px-4 py-3 flex justify-between items-center bg-[var(--color-surface)] backdrop-blur-md">
				<Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform duration-150">
					<div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[var(--color-maroon)] shadow-sm bg-white flex items-center justify-center p-0.5">
						<Image src="/images/tce-logov2.png" alt="TCE Logo" width={32} height={32} className="object-contain" priority />
					</div>
					<span className="font-display text-lg text-[var(--color-text-primary)] tracking-tight font-bold">
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
				<Leaf size={22} className="text-[var(--color-maroon)] p-0.5" />
			)}
			</div>
		</header>
	)
}