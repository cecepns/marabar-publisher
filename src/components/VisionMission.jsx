const VisionMission = () => {
  const missions = [
    "Menyediakan platform akademik bagi para peneliti, akademisi, dan praktisi untuk mempublikasikan karya ilmiah yang inovatif dan orisinal.",
    "Menjunjung tinggi standar etik dan kualitas ilmiah melalui proses editorial dan peer-review yang objektif, transparan, dan profesional.",
    "Mendorong keterbukaan akses informasi ilmiah untuk memperluas diseminasi hasil penelitian secara global.",
    "Membangun jaringan kolaborasi dengan institusi pendidikan dan komunitas ilmiah di tingkat nasional.",
    "Mendorong integrasi ilmu dan praktik sosial dengan menyebarluaskan hasil penelitian dan pengabdian yang berdampak langsung pada peningkatan kualitas hidup masyarakat."
  ];

  return (
    <section id="visi-misi" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visi & Misi
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Visi */}
          <article className="animate-slide-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                Menjadi platform publikasi ilmiah terkemuka yang mendorong kemajuan ilmu pengetahuan, kolaborasi global, dan integritas akademik melalui diseminasi hasil riset berkualitas tinggi.
              </p>
            </div>
          </article>

          {/* Misi */}
          <article className="animate-slide-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Misi</h3>
              </div>
              <ol className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5" aria-hidden="true">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{mission}</p>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;