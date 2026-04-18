export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful landscaped garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 via-forest-900/70 to-forest-900/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sage-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <span className="w-2 h-2 bg-sage-400 rounded-full animate-pulse" />
          <span className="text-sage-300 text-sm font-medium">Serving Dallas Since 2002</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Premium Landscaping
          <br />
          <span className="text-sage-300">&amp; Lawn Care</span>
          <br />
          <span className="text-amber-400">in Dallas, TX</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Transform your outdoor space into a stunning retreat. Professional landscaping, 
          meticulous lawn care, and exceptional service that exceeds expectations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-forest-900 font-bold text-lg rounded-full transition-all shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/40 hover:scale-105"
          >
            Get a Free Estimate
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-full border border-white/30 transition-all"
          >
            View Our Services
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold text-white">20+</span>
            <span className="text-sage-400 text-sm">Years Experience</span>
          </div>
          <div className="w-px h-12 bg-white/20 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold text-white">500+</span>
            <span className="text-sage-400 text-sm">Happy Clients</span>
          </div>
          <div className="w-px h-12 bg-white/20 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold text-white">100%</span>
            <span className="text-sage-400 text-sm">Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
