import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageShellProps {
	children: ReactNode
	className?: string
}

export default function PageShell({ children, className }: PageShellProps) {
	return <main className={cn('mx-auto w-full max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl px-0 md:px-2', className)}>{children}</main>
}