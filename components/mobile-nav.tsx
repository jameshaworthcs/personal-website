'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem asChild>
          <Link href="#about">About</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#projects">Projects</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#skills">Skills</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#cv">CV</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#contact">Contact</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/blog">Blog</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNav
