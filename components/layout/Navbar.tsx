'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Globe, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

interface NavbarProps {
	showLangToggle?: boolean
	lang?: 'en' | 'ta'
	onToggleLang?: () => void
}

export default function Navbar({
	showLangToggle = false,
	lang = 'en',
	onToggleLang,
}: NavbarProps) {
	const pathname = usePathname()
	const [hash, setHash] = useState('')
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const navItems = [
		{ href: '/', label: 'Home', hashValue: '' },
		{ href: '/#about', label: 'About', hashValue: '#about' },
		{ href: '/garden', label: 'Garden', hashValue: '' },
	]

	const isNavActive = (href: string) => {
		if (href === '/') return pathname === '/' && hash !== '#about'
		if (href === '/#about') return pathname === '/' && hash === '#about'
		return pathname === '/garden'
	}

	const handleNavClick = (href: string, hashValue: string) => {
		if (href === '/#about' || href === '/') {
			setHash(hashValue)
		}
	}

	useEffect(() => {
		const syncHash = () => setHash(window.location.hash)
		syncHash()
		window.addEventListener('hashchange', syncHash)
		return () => window.removeEventListener('hashchange', syncHash)
	}, [pathname])

	return (
		<>
			<header
				className="fixed inset-x-0 top-0 z-[70] border-b bg-white"
				style={{ borderColor: 'var(--color-border)' }}
			>
				<div className="flex h-16 w-full flex-col justify-center px-2 md:h-20 md:flex-row md:items-center md:justify-between md:px-2">
					<div className="flex items-center justify-between md:hidden">
						<Image src="/images/tce-banner.png" alt="TCE Logo" width={160} height={28} className="object-contain" priority />
						<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
							<SheetTrigger asChild>
								<Button
									variant="outline"
									size="icon-sm"
									className="rounded-md border-[var(--color-maroon-border)] text-[var(--color-maroon)] hover:bg-[var(--color-maroon-light)]"
									aria-label="Open navigation menu"
								>
									<Menu size={16} />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-[84%] max-w-xs border-l-[var(--color-border)] bg-white p-0">
								<SheetTitle className="sr-only">Navigation Menu</SheetTitle>
								<div className="border-b border-[var(--color-border)] px-4 py-4">
									<Image
										src="/images/tce-logov2.png"
										alt="TCE Logo"
										width={170}
										height={30}
										className="h-7 w-auto object-contain"
										priority
									/>
								</div>
								<div className="px-4 py-5">
									<nav className="flex flex-col gap-2" aria-label="Mobile primary">
										{navItems.map((item) => (
											<Link
												key={item.label}
												href={item.href}
												onClick={() => {
														handleNavClick(item.href, item.hashValue)
													setMobileMenuOpen(false)
												}}
												className={cn(
													'rounded-lg px-4 py-2.5 text-sm font-semibold font-body',
													isNavActive(item.href)
														? 'bg-[var(--color-maroon)] text-white shadow-sm'
														: 'border border-[var(--color-maroon-border)] bg-white text-[var(--color-maroon)] hover:bg-[var(--color-maroon-light)]',
												)}
											>
												{item.label}
											</Link>
										))}
									</nav>
								</div>
							</SheetContent>
						</Sheet>
					</div>

					<div className="flex w-full items-center md:gap-6">
						<Link href="/" className="hidden md:block">
							<Image src="/images/tce-banner.png" alt="TCE Logo" width={220} height={48} className="object-contain" priority />
						</Link>

						<div className="ml-auto flex items-center gap-2">
							<nav className="hidden md:flex items-center gap-2" aria-label="Primary">
								{navItems.map((item) => {
									return (
										<div key={item.label}>
											<Link
												href={item.href}
												onClick={() => handleNavClick(item.href, item.hashValue)}
												className={cn(
													'rounded-lg px-4 py-2 text-sm font-semibold font-body',
													isNavActive(item.href)
														? 'bg-[var(--color-maroon)] text-white shadow-sm'
														: 'border border-[var(--color-maroon-border)] bg-white text-[var(--color-maroon)] hover:bg-[var(--color-maroon-light)]',
												)}
											>
												{item.label}
											</Link>
										</div>
									)
								})}
							</nav>

							{showLangToggle ? (
							<Button
								variant="ghost"
								onClick={onToggleLang}
								className="hidden md:flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium hover:border-[var(--color-maroon-border)] hover:bg-[var(--color-maroon-light)] hover:text-[var(--color-maroon)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-maroon)]/25 md:py-2.5 md:text-base"
								style={{ color: 'var(--color-text-secondary)' }}
								aria-label="Toggle language"
							>
								<Globe size={15} />
								<span>{lang === 'en' ? 'English' : 'Tamil'}</span>
							</Button>
							) : null}
						</div>
					</div>
				</div>
			</header>
			<div className="h-16 md:h-20" />
		</>
	)
}
