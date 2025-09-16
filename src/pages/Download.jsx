import { Download as DownloadIcon, Chrome, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react'

export default function Download() {
  const steps = [
    {
      step: 1,
      title: 'Install Extension',
      description: 'Click the install button to add WebnovelSync to your Chrome browser.',
      action: 'Install from Chrome Web Store'
    },
    {
      step: 2,
      title: 'Configure Platforms',
      description: 'Set up your story IDs for each platform you want to sync to.',
      action: 'Open extension popup'
    },
    {
      step: 3,
      title: 'Set Chapter Range',
      description: 'Choose which chapters you want to sync (start and end numbers).',
      action: 'Configure in settings'
    },
    {
      step: 4,
      title: 'Start Syncing',
      description: 'Navigate to your source story and click "Scan Current Tab" to begin.',
      action: 'Begin sync process'
    }
  ]

  const requirements = [
    'Google Chrome browser (version 88 or higher)',
    'Active accounts on target publishing platforms',
    'Story IDs from each platform you want to sync to',
    'Published source story on a supported platform'
  ]

  const faqs = [
    {
      question: 'Which platforms can I sync from?',
      answer: 'You can use any of the 7 supported platforms as your source: WebNovel, ScribbleHub, AO3, FanFiction.net, RoyalRoad, Wattpad, or Inkitt.'
    },
    {
      question: 'How do I find my story ID?',
      answer: 'Story IDs are usually found in the URL of your story management page. Check our documentation for platform-specific instructions.'
    },
    {
      question: 'Is there a limit to how many chapters I can sync?',
      answer: 'No, there\'s no limit. You can sync individual chapters or hundreds at once using the chapter range settings.'
    },
    {
      question: 'What if something goes wrong during sync?',
      answer: 'The extension includes error handling and retry mechanisms. Check the sync log for detailed information about any issues.'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Download WebnovelSync
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get started with the free Chrome extension in just a few clicks
          </p>
          
          {/* Download Button */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center mb-4">
              <Chrome className="h-12 w-12 text-blue-600 mr-4" />
              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-900">Chrome Extension</h2>
                <p className="text-gray-600">Free • No Registration Required</p>
              </div>
            </div>
            <a
              href="https://chromewebstore.google.com/detail/webnovelsync/gnemgbbfllodlnbioibbgkfkbpblphne?authuser=0&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              <DownloadIcon className="mr-2 h-6 w-6" />
              Install from Chrome Web Store
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Version 1.8 • Updated September 2025
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-6 w-6 text-amber-600 mr-2" />
            <h3 className="text-lg font-semibold text-amber-800">Requirements</h3>
          </div>
          <ul className="space-y-2">
            {requirements.map((requirement, index) => (
              <li key={index} className="flex items-center text-amber-700">
                <CheckCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                {requirement}
              </li>
            ))}
          </ul>
        </div>

        {/* Setup Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Setup Guide
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {step.action}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Having trouble with installation or setup? Get in touch for support.
          </p>
          <a
            href="https://github.com/michaelnyc17"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Contact on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}