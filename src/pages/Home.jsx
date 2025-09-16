import { ArrowRight, BookOpen, Zap, Shield, Users } from 'lucide-react'

export default function Home() {
  const platforms = [
    'WebNovel', 'ScribbleHub', 'Archive of Our Own', 'FanFiction.net', 
    'RoyalRoad', 'Wattpad', 'Inkitt'
  ]

  const features = [
    {
      icon: BookOpen,
      title: 'Multi-Platform Sync',
      description: 'Automatically sync your chapters across 7 different writing platforms with just one click.'
    },
    {
      icon: Zap,
      title: 'Fast & Reliable',
      description: 'Built with performance in mind. Quick chapter uploads with smart batch processing.'
    },
    {
      icon: Shield,
      title: 'Completely Free',
      description: 'No subscriptions, no hidden fees. Built by a writer, for writers who need simple tools.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Originally created for friends, now helping writers everywhere save time and effort.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sync Your Stories
              <span className="block text-blue-600">Across All Platforms</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              WebnovelSync is a free Chrome extension that helps writers publish chapters 
              to multiple platforms at once. Save hours of manual uploading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chromewebstore.google.com/detail/webnovelsync/gnemgbbfllodlnbioibbgkfkbpblphne?authuser=0&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Install Free Extension
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="/features" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supported Platforms
            </h2>
            <p className="text-lg text-gray-600">
              Sync your stories across all major writing platforms
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <span key={platform} className="platform-badge">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Writers Choose WebnovelSync
            </h2>
            <p className="text-lg text-gray-600">
              Simple, reliable, and completely free tools for content creators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Save Hours of Work?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join writers who are already using WebnovelSync to streamline their publishing workflow.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/webnovelsync/gnemgbbfllodlnbioibbgkfkbpblphne?authuser=0&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            Install WebnovelSync Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}