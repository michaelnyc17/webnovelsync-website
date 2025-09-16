import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WS</span>
              </div>
              <span className="font-bold text-xl">WebnovelSync</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Free Chrome extension that helps writers sync their stories across multiple platforms. 
              Originally built for friends, now available to everyone.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/michaelnyc17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/download" className="hover:text-white transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a 
                  href="https://chromewebstore.google.com/detail/webnovelsync/gnemgbbfllodlnbioibbgkfkbpblphne?authuser=0&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Chrome Store
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/michaelnyc17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WebnovelSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}