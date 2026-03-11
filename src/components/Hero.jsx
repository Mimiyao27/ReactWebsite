export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-[15%] w-16 h-16 rounded-2xl glass animate-float rotate-12 hidden lg:block" />
      <div className="absolute top-48 right-[20%] w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 animate-float-delayed hidden lg:block" />
      <div className="absolute bottom-40 left-[25%] w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 right-[15%] w-14 h-14 rounded-2xl glass animate-float-delayed rotate-45 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-light mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now Accepting New Projects
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
            We Build{' '}
            <span className="bg-gradient-to-r from-primary-light via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Digital Products
            </span>
            <br />
            That{' '}
            <span className="relative inline-block">
              Inspire
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C30 3 70 2 100 5C130 8 170 6 198 3" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#818cf8" />
                    <stop offset="1" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-light-dim/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            We're a team of passionate developers, designers, and strategists crafting cutting-edge digital experiences that push boundaries and transform businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Explore Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#team"
              className="px-8 py-4 rounded-2xl glass text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Meet Our Team
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6" style={{ animationDelay: '0.4s' }}>
          {[
            { number: '150+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '12+', label: 'Years Experience' },
            { number: '99%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 hover:bg-white/5 transition-colors duration-300">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-light-dim/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-light-dim/30">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-light-dim/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary-light animate-bounce" />
        </div>
      </div>
    </section>
  )
}
