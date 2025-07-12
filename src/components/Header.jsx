import { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Jurnal', href: '#jurnal' },
    { name: 'Jasa', href: '#jasa' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center p-4">
          <div className="flex-shrink-0">
            <a href="#home" aria-label="Beranda PT Mara Cendekia Publisher">
              <img src={logo} alt="Logo PT Mara Cendekia Publisher" className="w-20 h-auto" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-accent-500 hover:text-accent-500 px-3 py-2 text-lg font-medium transition-colors duration-200"
                    aria-label={`Navigasi ke ${item.name}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-accent-500 hover:text-accent-500 p-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden" role="navigation" aria-label="Mobile navigation">
            <ul className="px-2 pt-2 pb-3 space-y-1 bg-white/10 rounded-lg mt-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-black hover:text-accent-500 block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={`Navigasi ke ${item.name}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;