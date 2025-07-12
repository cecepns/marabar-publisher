const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[url('assets/bg-malabar.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Satu publikasi
            <span className="block text-accent-500">sejuta inspirasi</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Platform publikasi ilmiah terkemuka untuk menyebarluaskan hasil riset berkualitas tinggi
          </p>
          <nav className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#jurnal"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Lihat jurnal ilmiah kami"
            >
              Lihat Jurnal
            </a>
            <a
              href="#jasa"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              aria-label="Pelajari layanan publikasi kami"
            >
              Layanan Kami
            </a>
          </nav>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;