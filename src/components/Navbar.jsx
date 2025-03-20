import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiChevronDown, FiGlobe } from 'react-icons/fi';
import Logo from '/images/Filmora.jpeg';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isAuthenticated = !!localStorage.getItem('token');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAIFeaturesOpen, setIsAIFeaturesOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'ja', name: 'Japanese' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ru', name: 'Russian' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-red/90 backdrop-blur-md' : 'bg-red'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
          <Link to="/" className="text-xl font-bold text-white">Filmora</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/" className={({ isActive }) => `text-white ${isActive ? 'font-bold' : ''}`}>{t('home')}</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `text-white ${isActive ? 'font-bold' : ''}`}>{t('pricing')}</NavLink>
          <NavLink to="/blog" className={({ isActive }) => `text-white ${isActive ? 'font-bold' : ''}`}>{t('blog')}</NavLink>
          <div className="relative">
            <button className="text-white flex items-center" onClick={() => setIsAIFeaturesOpen(!isAIFeaturesOpen)}>
              {t('aiFeatures')} <FiChevronDown className={`ml-1 transition-transform ${isAIFeaturesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isAIFeaturesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-gray-800 shadow-lg rounded-md z-50">
                <NavLink to="/ai-features/AIImageGen" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">{t('AI Image')}</NavLink>
                <NavLink to="/ai-features/AIThemeGen" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">{t('AI Theme')}</NavLink>
                <NavLink to="/ai-features/AIBackgroundGen" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">{t('AI Background')}</NavLink>
                <NavLink to="/ai-features/AICharacterGen" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">{t('AI Character')}</NavLink>
              </div>
            )}
          </div>
          <div className="relative">
            <button className="text-white flex items-center" onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}>
              <FiGlobe className="mr-1" /> {languages.find(lang => lang.code === i18n.language)?.name || 'English'}
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-gray-800 shadow-lg rounded-md z-50">
                {languages.map(({ code, name }) => (
                  <button key={code} onClick={() => changeLanguage(code)} className={`w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 ${i18n.language === code ? 'bg-gray-700' : ''}`}>{name}</button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <button onClick={() => { localStorage.removeItem('token'); window.location.reload(); }} className="bg-red-500 text-white px-4 py-2 rounded">{t('logout')}</button>
          ) : (
            <>
              <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">{t('login')}</Link>
              <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded">{t('signup')}</Link>
            </>
          )}
        </div>

        <div className="flex md:hidden items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-500">
          <NavLink to="/" className="block px-3 py-2 text-gray-300 hover:bg-gray-700">{t('home')}</NavLink>
          <NavLink to="/pricing" className="block px-3 py-2 text-gray-300 hover:bg-gray-700">{t('pricing')}</NavLink>
          <NavLink to="/blog" className="block px-3 py-2 text-gray-300 hover:bg-gray-700">{t('blog')}</NavLink>
          <NavLink to="/gallery" className="block px-3 py-2 text-gray-300 hover:bg-gray-700">{t('gallery')}</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
