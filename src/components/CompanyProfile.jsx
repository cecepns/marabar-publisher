const CompanyProfile = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Alamat",
      value: "Dukuh Krajan, Kec. Balong, Kab. Ponorogo, Jawa Timur, Kode Pos 63461"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "marapublisher@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "HP/WA",
      value: "+62 858 8184 0618"
    }
  ];

  return (
    <section id="profil" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Profil Perusahaan
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <article className="animate-slide-up">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                PT. Mara Cendekia Publisher
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Perusahaan penerbit yang berkomitmen untuk menyediakan platform publikasi ilmiah berkualitas tinggi bagi para peneliti, akademisi, dan praktisi di Indonesia. Dengan standar editorial yang ketat dan proses peer-review yang profesional, kami mendukung kemajuan ilmu pengetahuan melalui diseminasi hasil riset yang berkualitas.
              </p>
              
              <address className="space-y-6 not-italic">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600" aria-hidden="true">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.label}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </address>
            </div>
          </article>

          <aside className="animate-slide-up">
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Mengapa Memilih Kami?</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full" aria-hidden="true"></div>
                  <span>Proses editorial profesional dan transparan</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full" aria-hidden="true"></div>
                  <span>Peer-review berkualitas tinggi</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full" aria-hidden="true"></div>
                  <span>Open access untuk jangkauan global</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full" aria-hidden="true"></div>
                  <span>Dukungan penuh untuk penulis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full" aria-hidden="true"></div>
                  <span>Standar internasional</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;