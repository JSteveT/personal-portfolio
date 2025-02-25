import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold tracking-wide text-gray-900 hover:text-gray-600"
            >
              My Portfolio
            </Link>
          </div>

          {/* Nav links */}
          <div className="hidden space-x-4 md:flex">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="text-gray-700 hover:text-gray-900"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
