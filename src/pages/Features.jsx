import { CheckCircle, Clock, Settings, Shield, Zap, BookOpen } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Multi-Platform Publishing',
      description: 'Publish to 7 platforms simultaneously: WebNovel, ScribbleHub, AO3, FanFiction.net, RoyalRoad, Wattpad, and Inkitt.',
      benefits: [
        'One-click publishing to all platforms',
        'Automatic chapter formatting',
        'Smart duplicate detection'
      ]
    },
    {
      icon: Zap,
      title: 'Batch Processing',
      description: 'Upload multiple chapters at once with configurable batch sizes for optimal performance.',
      benefits: [
        'Process 1-5 chapters simultaneously',
        'Adjustable speed settings',
        'Progress tracking and logs'
      ]
    },
    {
      icon: Settings,
      title: 'Flexible Configuration',
      description: 'Customize chapter ranges, title formats, and platform-specific settings.',
      benefits: [
        'Custom chapter numbering',
        'Platform-specific story IDs',
        'Selective platform targeting'
      ]
    },
    {
      icon: Clock,
      title: 'Time-Saving Automation',
      description: 'Eliminate repetitive manual uploads and focus on what matters - writing.',
      benefits: [
        'Save hours of manual work',
        'Consistent posting schedules',
        'Reduced upload errors'
      ]
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Local processing with no data collection. Your stories stay private.',
      benefits: [
        'No server uploads',
        'Local Chrome storage only',
        'Privacy-first design'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Reliability Features',
      description: 'Built-in error handling, retry mechanisms, and detailed sync logs.',
      benefits: [
        'Automatic retry on failures',
        'Detailed error reporting',
        'Sync history tracking'
      ]
    }
  ]

  const platforms = [
    {
      name: 'WebNovel',
      description: 'Popular platform for original novels and translations',
      features: ['Chapter management', 'Story ID configuration']
    },
    {
      name: 'ScribbleHub',
      description: 'Community-driven platform for web novels',
      features: ['Direct chapter upload', 'Custom formatting']
    },
    {
      name: 'Archive of Our Own (AO3)',
      description: 'Fan fiction and original works archive',
      features: ['Work verification', 'Chapter management']
    },
    {
      name: 'FanFiction.net',
      description: 'Large fan fiction community',
      features: ['Story updates', 'Chapter tracking']
    },
    {
      name: 'RoyalRoad',
      description: 'Platform focused on fantasy and LitRPG',
      features: ['Chapter publishing', 'Work management']
    },
    {
      name: 'Wattpad',
      description: 'Social reading and writing platform',
      features: ['Story synchronization', 'Chapter uploads']
    },
    {
      name: 'Inkitt',
      description: 'Platform for discovering new stories',
      features: ['Chapter management', 'Story tracking']
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Writers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WebnovelSync provides everything you need to efficiently manage and publish 
            your stories across multiple platforms.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Supported Platforms */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supported Platforms
            </h2>
            <p className="text-lg text-gray-600">
              Detailed platform support and capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {platform.description}
                </p>
                <ul className="space-y-1">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Streamline Your Publishing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Install WebnovelSync and start syncing your stories today.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/webnovelsync/gnemgbbfllodlnbioibbgkfkbpblphne?authuser=0&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Install Free Extension
          </a>
        </div>
      </div>
    </div>
  )
}