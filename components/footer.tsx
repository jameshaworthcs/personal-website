import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link
              href="https://github.com/jameshaworthcs/personal-website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-foreground transition-colors"
            >
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              <span>Source code</span>
            </Link>
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
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
