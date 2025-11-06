import { useState, useEffect } from 'react';
// import { Menu, X, Phone } from 'lucide-react';
import { Menu, X, Phone } from 'lucide-react';
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
                  МАКС Строй Сервис
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
                <div className='flex items-center gap-3'>
                  <a href='https://t.me/+79379992336' target='_blank'>
                    <svg className="w-8 h-8 hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z" fill='currentColor'/></svg>
                  </a>
                  <a href='https://wa.me/+79379992336' target='_blank'>
                    <svg className="w-8 h-8 hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" fill='currentColor'/></svg>
                  </a>
                  <a href='tel:89379992336'>
                    <Phone  className="hover:text-blue-600"/>
                  </a>
                </div>
                {/* <p className="text-xs xl:text-sm font-medium">8 (937) 999-23-36</p> */}
                <p className="text-xs xl:text-xs opacity-75">Ежедневно <br className='xl:hidden'/>8:30-17:30</p>
              </div>
              <button 
                onClick={() => setShowCallbackModal(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white lg:px-3 xl:px-6 lg:py-1 xl:py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg lg:text-sm pointer"
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