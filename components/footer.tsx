import Link from 'next/link'
import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-3">
            <Link
              href="https://github.com/jameshaworthcs/personal-website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Source Code</span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} James Haworth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
