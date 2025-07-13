const Journals = () => {
  const journals = [
    {
      title: "Jurnal Kesehatan Farmasi Nusantara",
      description:
        "Jurnal Kesehatan Farmasi Nusantara is a national peer-reviewed journal published by the Mara Cendekia Publisher. The journal aims to disseminate research findings and mini-reviews in the field of pharmacy, encompassing various areas such as clinical pharmacy, community pharmacy, pharmaceutical chemistry, formulation, and related fields.",
      category: "Kefarmasian",
      color: "from-blue-500 to-blue-600",
      image:
        "https://journal.marapublisher.com/public/journals/1/journalThumbnail_en_US.jpg",
      link: "https://journal.marapublisher.com/index.php/jkfn",
    },
    {
      title: "Jurnal Pengabdian Masyarakat Terpadu",
      description:
        "Jurnal Pengabdian Masyarakat Terpadu  adalah jurnal nasional yang berisi hasil-hasil kegiatan pengabdian dan pemberdayaan masyarakat berupa penerapan berbagai bidang ilmu diantaranya kesehatan, pendidikan, ekonomi, teknik, pertanian, sosial humaniora, dan komputer serta bidang ilmu lainnya.",
      category: "Pengabdian Masyarakat",
      color: "from-green-500 to-green-600",
      image:
        "https://journal.marapublisher.com/public/journals/2/journalThumbnail_en_US.jpg",
      link: "https://journal.marapublisher.com/index.php/jpmt",
    },
    {
      title: "Jurnal Ekonomi dan Bisnis Nusantara",
      description:
        "Jurnal Ekonomi dan Bisnis Nusantara merupakan jurnal ilmiah yang berfokus pada penerbitan artikel berkualitas tinggi yang didedikasikan untuk semua aspek penelitian, masalah, dan perkembangan terbaru di bidang ekonomi, akuntansi, serta manajemen oleh akademisi maupun praktisi di seluruh Indonesia.",
      category: "Ekonomi & Bisnis",
      color: "from-purple-500 to-purple-600",
      image:
        "https://journal.marapublisher.com/public/journals/3/journalThumbnail_en_US.jpg",
      link: "https://journal.marapublisher.com/index.php/jebn",
    },
  ];

  return (
    <section id="jurnal" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jurnal Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Koleksi jurnal berkualitas tinggi yang menjadi wadah publikasi hasil
            riset dan pengabdian masyarakat
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journals.map((journal, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="w-full p-4 border-b border-gray-200 h-auto relative overflow-hidden flex justify-center items-center">
                <img
                  src={journal.image}
                  alt={`Logo ${journal.title}`}
                  className="w-44 h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {journal.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {journal.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {journal.description}
                </p>
                <a
                  href={journal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300"
                  aria-label={`Kunjungi ${journal.title}`}
                >
                  <span>Lihat Detail</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journals;
