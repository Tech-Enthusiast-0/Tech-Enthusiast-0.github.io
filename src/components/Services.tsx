const services = [
  {
    title: 'Lawn Maintenance',
    description: 'Regular mowing, edging, fertilization, and weed control to keep your lawn lush and healthy year-round.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Flower Beds',
    description: 'Custom flower bed design, installation, and seasonal planting to add vibrant color and curb appeal.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Gutter Clean-up',
    description: 'Thorough gutter cleaning and debris removal to protect your home from water damage and maintain drainage.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
    ),
  },
  {
    title: 'Fence Repair',
    description: 'Professional fence repair and restoration services to enhance privacy, security, and property value.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-forest-100 text-forest-700 text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-800 mb-6 text-balance">
            Complete Lawn &amp; Landscape Solutions
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto text-pretty">
            From routine maintenance to complete transformations, we offer comprehensive 
            services to keep your property looking its absolute best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-stone-50 rounded-2xl p-8 hover:bg-forest-800 transition-all duration-300 hover:shadow-2xl hover:shadow-forest-900/20 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-sage-100 group-hover:bg-sage-500/20 rounded-xl flex items-center justify-center text-forest-600 group-hover:text-sage-300 mb-6 transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-forest-800 group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-earth-600 group-hover:text-sage-300 leading-relaxed transition-colors">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center text-forest-600 group-hover:text-amber-400 font-medium transition-colors">
                <span className="text-sm">Learn more</span>
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-forest-700 hover:bg-forest-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Request a Service Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
