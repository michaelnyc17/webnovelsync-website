import { Shield, Eye, Database, Lock, Github } from 'lucide-react'

export default function Privacy() {
  const principles = [
    {
      icon: Shield,
      title: 'Privacy by Design',
      description: 'WebnovelSync was built with privacy as a core principle. No personal data is collected or transmitted to external servers.'
    },
    {
      icon: Database,
      title: 'Local Storage Only',
      description: 'All your settings and story data are stored locally in your browser using Chrome\'s secure storage API.'
    },
    {
      icon: Eye,
      title: 'No Tracking',
      description: 'We don\'t use analytics, tracking pixels, or any form of user behavior monitoring.'
    },
    {
      icon: Lock,
      title: 'Secure Operations',
      description: 'All operations happen directly between your browser and the publishing platforms. No middleman servers.'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your privacy matters. Here's how WebnovelSync protects your data.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: September 2025
          </p>
        </div>

        {/* Privacy Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="feature-card">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <principle.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {principle.title}
              </h3>
              <p className="text-gray-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Policy */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Collection and Usage</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Information We Do NOT Collect</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Personal identification information</li>
              <li>• Email addresses or contact details</li>
              <li>• Story content or chapter text</li>
              <li>• Browsing history or usage analytics</li>
              <li>• Device information or IP addresses</li>
              <li>• Login credentials or passwords</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Information Stored Locally</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Platform story IDs you configure</li>
              <li>• Chapter range settings</li>
              <li>• Extension preferences (batch size, title format)</li>
              <li>• Sync logs and error messages</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Note:</strong> All this data stays on your device and is never transmitted to our servers.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">How the Extension Works</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <ol className="space-y-4 text-gray-700">
              <li><strong>1. Local Processing:</strong> The extension reads chapter content directly from your browser tab.</li>
              <li><strong>2. Direct Communication:</strong> Chapter data is sent directly to each publishing platform using their existing upload systems.</li>
              <li><strong>3. No Intermediary:</strong> There are no external servers involved in the process.</li>
              <li><strong>4. Authentication:</strong> The extension uses your existing browser sessions with each platform.</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Permissions Explained</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Storage Permission</h4>
              <p className="text-gray-700">Required to save your extension settings locally in Chrome.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Scripting Permission</h4>
              <p className="text-gray-700">Allows the extension to interact with publishing platform pages to upload chapters.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Host Permissions</h4>
              <p className="text-gray-700">Access to specific publishing platforms to enable chapter synchronization.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Tabs Permission</h4>
              <p className="text-gray-700">Needed to read chapter content from the current browser tab.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact and Updates</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-4">
              This privacy policy may be updated to reflect changes in the extension or legal requirements. 
              Any significant changes will be announced through the Chrome Web Store listing.
            </p>
            <p className="text-gray-700">
              For privacy concerns or questions, you can contact us through GitHub:
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/michaelnyc17"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                <Github className="h-5 w-5 mr-2" />
                Contact on GitHub
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Source</h2>
          <div className="bg-green-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              WebnovelSync is committed to transparency. The extension's source code is available 
              for review, allowing you to verify our privacy practices.
            </p>
            <p className="text-gray-700">
              You can inspect the code to confirm that no data is being collected or transmitted 
              beyond what's necessary for the extension's functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}