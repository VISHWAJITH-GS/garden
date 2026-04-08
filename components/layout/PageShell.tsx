import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageShellProps {
	children: ReactNode
	className?: string
}

export default function PageShell({ children, className }: PageShellProps) {
	return <main className={cn('mx-auto max-w-md', className)}>{children}</main>
}