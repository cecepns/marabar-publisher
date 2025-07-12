const Services = () => {
  const services = [
    {
      title: "Jasa Turnitin",
      description: "Layanan pengecekan plagiarisme menggunakan Turnitin untuk memastikan orisinalitas karya ilmiah Anda sebelum publikasi.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ["Pengecekan similarity index", "Laporan detail plagiarisme", "Rekomendasi perbaikan", "Turnaround cepat"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Jasa Pembuatan Artikel",
      description: "Bantuan profesional dalam pembuatan artikel ilmiah berkualitas tinggi sesuai standar jurnal internasional.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      features: ["Penulisan sesuai template jurnal", "Riset dan analisis mendalam", "Proofreading profesional", "Konsultasi berkelanjutan"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Jasa Analisis",
      description: "Layanan analisis data statistik dan metodologi penelitian untuk mendukung validitas hasil riset Anda.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ["Analisis statistik deskriptif", "Uji hipotesis", "Interpretasi hasil", "Visualisasi data"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="jasa" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Jasa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Layanan profesional yang mendukung kesuksesan publikasi ilmiah Anda
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className={`h-24 bg-gradient-to-r ${service.color} relative flex items-center justify-center`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" aria-hidden="true"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6287736218710?text=Halo, saya tertarik dengan layanan jasa yang ditawarkan. Mohon informasi lebih lanjut."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 inline-block text-center"
                  aria-label={`Konsultasi untuk ${service.title}`}
                >
                  Konsultasi Sekarang
                </a>
              </div>
            </article>
          ))}
        </div>

        <aside className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Butuh Konsultasi Khusus?</h3>
            <p className="text-lg mb-6 opacity-90">
              Tim ahli kami siap membantu Anda dengan kebutuhan publikasi yang spesifik
            </p>
            <a
              href="https://wa.me/6287736218710?text=Halo, saya ingin berkonsultasi tentang layanan publikasi ilmiah. Mohon informasi lebih lanjut."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
              aria-label="Hubungi kami untuk konsultasi layanan publikasi ilmiah"
            >
              Hubungi Kami
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Services;