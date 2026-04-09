'use client'

import { Search, Info, Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar'

const navItems = [
  { title: 'Garden', url: '/', icon: Home },
  { title: 'Search', url: '/search', icon: Search },
  { title: 'About', url: '/about', icon: Info },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b px-2 py-4 mb-2 h-16 md:h-20 flex flex-col justify-center bg-white md:bg-transparent transition-all">
        <Link href="/" className="flex items-center gap-3 px-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[var(--color-maroon)] shadow-sm bg-white flex items-center justify-center p-0.5 shrink-0">
            <Image src="/images/tce-logov2.png" alt="TCE Logo" width={32} height={32} className="object-contain" priority />
          </div>
          {!isCollapsed && (
            <span className="font-display text-lg text-[var(--color-text-primary)] tracking-tight font-bold truncate">
              TCE Garden
            </span>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className="font-medium h-10"
                  >
                    <Link href={item.url}>
                      <item.icon className="scale-110" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
