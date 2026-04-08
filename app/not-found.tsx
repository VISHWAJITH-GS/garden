import Link from 'next/link'
import { Leaf, AlertCircle } from 'lucide-react'
import Header from '@/components/layout/Header'
import PageShell from '@/components/layout/PageShell'

export default function NotFound() {
	return (
		<>
			<Header />
			<PageShell className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
				<div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-sm p-8 w-full">
					<AlertCircle size={40} className="text-[var(--color-maroon)] mx-auto mb-4 opacity-60" />
					<h1 className="font-display text-2xl text-[var(--color-text-primary)] mb-2">Plant Not Found</h1>
					<p className="text-sm text-[var(--color-text-secondary)] mb-6">
						This QR code may be outdated or invalid. Please check the board and try scanning again.
					</p>
					<Link
						href="/"
						className="inline-flex items-center gap-2 bg-[var(--color-maroon)] text-white font-semibold text-sm px-5 py-3 rounded-xl"
					>
						<Leaf size={16} />
						Browse All Plants
					</Link>
				</div>
			</PageShell>
		</>
	)
}
