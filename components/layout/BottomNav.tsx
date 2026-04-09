'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Info } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
	{ label: 'Garden', href: '/', icon: Home },
	{ label: 'Search', href: '/search', icon: Search },
	{ label: 'About', href: '/about', icon: Info },
]

export default function BottomNav() {
	const pathname = usePathname()

	return (
		<nav className="fixed bottom-0 left-0 right-0 glass-surface border-t border-white/70 flex justify-around items-center py-2 z-50 max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto rounded-t-2xl md:rounded-t-none">
			{navItems.map(({ label, href, icon: Icon }) => {
				const isActive = pathname === href
				return (
					<motion.div key={href} whileTap={{ scale: 0.96 }}>
					<Link
						key={href}
						href={href}
						className={`relative flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-colors ${
							isActive ? 'text-[var(--color-maroon)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-maroon)]'
						}`}
					>
						{isActive && (
							<motion.span
								layoutId="bottom-nav-pill"
								className="absolute inset-0 -z-10 rounded-xl bg-[var(--color-maroon-light)] border border-[var(--color-maroon-border)]"
								transition={{ type: 'spring', stiffness: 360, damping: 28 }}
							/>
						)}
						<Icon
							size={22}
							strokeWidth={isActive ? 2.5 : 1.8}
							className={isActive ? 'text-[var(--color-maroon)]' : 'text-[var(--color-text-secondary)]'}
						/>
						<span className={`text-[10px] font-semibold ${isActive ? 'text-[var(--color-maroon)]' : ''}`}>
							{label}
						</span>
					</Link>
					</motion.div>
				)
			})}
		</nav>
	)
}