'use client'

import Link from 'next/link'
import Image from 'next/image'
import { User, ChevronDown, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
	showLangToggle?: boolean
	lang?: 'en' | 'ta'
	onToggleLang?: () => void
}

export default function Header({ showLangToggle = false, lang = 'en', onToggleLang }: HeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
			<div className="flex justify-between items-center px-4 py-3 h-16 md:h-20 w-full mx-auto max-w-7xl">
				<Link href="/" className="flex items-center gap-2 active:scale-95 transition-transform duration-150">
					<div className="relative h-10 md:h-12 w-[180px] sm:w-[240px] md:w-[320px]">
						<Image src="/images/tce-banner.png" alt="TCE Banner" fill className="object-contain object-left" priority />
					</div>
					<div className="h-6 md:h-8 w-px bg-gray-300 mx-1 hidden sm:block"></div>
					<span className="font-bold text-lg md:text-xl text-[#cc0000] tracking-tight whitespace-nowrap hidden min-[360px]:block">
						TCE GARDEN
					</span>
				</Link>

				{showLangToggle ? (
					<button
						onClick={onToggleLang}
						className="flex items-center gap-2 hover:bg-gray-50 px-2 py-1.5 rounded-lg transition-colors cursor-pointer outline-none"
					>
						<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[#cc0000]">
							<User size={16} strokeWidth={2.5} />
						</div>
						<span className="text-sm font-semibold text-gray-700 hidden sm:block">
							{lang === 'en' ? 'EN' : 'TA'}
						</span>
						<ChevronDown size={14} className="text-gray-500 hidden sm:block" strokeWidth={2.5} />
					</button>
				) : (
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[#cc0000]">
							<Leaf size={16} strokeWidth={2.5} />
						</div>
					</div>
				)}
			</div>
		</header>
	)
}