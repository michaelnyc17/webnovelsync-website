import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WS</span>
            </div>
            <span className="font-bold text-xl text-gray-900">WebnovelSync</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link to="/download" className="text-gray-700 hover:text-blue-600 transition-colors">
              Download
            </Link>
            <Link to="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">
              Privacy
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://chromewebstore.google.com/detail/webnovelsync/gnemgbbfllodlnbioibbgkfkbpblphne?authuser=0&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Install Extension
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/download"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
              <Link
                to="/privacy"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <div className="px-3 py-2">
                <a
                  href="https://chromewebstore.google.com/detail/webnovelsync/gnemgbbfllodlnbioibbgkfkbpblphne?authuser=0&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center"
                >
                  Install Extension
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}