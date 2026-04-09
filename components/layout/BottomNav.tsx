'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Info } from 'lucide-react'

const navItems = [
	{ label: 'Garden', href: '/', icon: Home },
	{ label: 'Search', href: '/search', icon: Search },
	{ label: 'About', href: '/about', icon: Info },
]

export default function BottomNav() {
	const pathname = usePathname()

	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-[var(--color-surface)] border-t border-[var(--color-border)] flex justify-around items-center py-2 z-50 max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto rounded-t-2xl md:rounded-t-none">
			{navItems.map(({ label, href, icon: Icon }) => {
				const isActive = pathname === href
				return (
					<Link
						key={href}
						href={href}
						className={`flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-colors ${
							isActive ? 'text-[var(--color-maroon)]' : 'text-[var(--color-text-secondary)]'
						}`}
					>
						<Icon
							size={22}
							strokeWidth={isActive ? 2.5 : 1.8}
							className={isActive ? 'text-[var(--color-maroon)]' : 'text-[var(--color-text-secondary)]'}
						/>
						<span className={`text-[10px] font-semibold ${isActive ? 'text-[var(--color-maroon)]' : ''}`}>
							{label}
						</span>
					</Link>
				)
			})}
		</nav>
	)
}