import React, { useState, useEffect } from 'react';
// import { Menu, X, Phone } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
// import { scrollToSection } from '../utils/scrollToSection';
// import { requestCallback } from '../services/api';
import CallbackModal from './shared/CallbackModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCallbackModal, setShowCallbackModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Услуги', href: '#services' },
    { label: 'Процесс', href: '#process' },
    { label: 'Преимущества', href: '#advantages' },
    { label: 'О компании', href: '#about' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contact' }
  ];

  return (
    <>
      <header 
        className={`header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Logo className="w-12 h-12" />
              <div>
                <h1 className={`lg:text-sm xl:text-2xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Гидро МАКС СервиС
                </h1>
                <p className={`lg:text-xs text-sm transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-blue-100'
                }`}>
                  Профессиональная гидроизоляция
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center lg:gap-3 xl:gap-8 flex-shrink-0 md:text-sm">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-6">
              <div className={`text-right transition-colors flex-shrink-0 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                <p className="text-xs xl:text-sm font-medium">8 (937) 999-23-36</p>
                <p className="text-xs xl:text-xs opacity-75">Ежедневно <br className='xl:hidden'/>8:30-17:30</p>
              </div>
              <button 
                onClick={() => setShowCallbackModal(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white lg:px-3 xl:px-6 lg:py-1 xl:py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg lg:text-sm"
              >
                Заказать звонок
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 font-medium px-4 py-2 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-4 py-2 border-t border-gray-200 mt-4">
                  <p className="text-gray-700 font-medium">8 (937) 999-23-36</p>
                  <button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setShowCallbackModal(true);
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold mt-2"
                  >
                    Заказать звонок
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>

      </header>
      {/* Callback Modal */}
      <CallbackModal showCallbackModal={showCallbackModal} setShowCallbackModal={setShowCallbackModal} />
    </>
  );
};

export default Header;