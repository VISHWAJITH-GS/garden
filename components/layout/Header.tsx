import Navbar from '@/components/layout/Navbar'

interface HeaderProps {
	showLangToggle?: boolean
	lang?: 'en' | 'ta'
	onToggleLang?: () => void
}

export default function Header(props: HeaderProps) {
	return <Navbar {...props} />
}