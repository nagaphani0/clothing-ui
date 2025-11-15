import React, {useState} from 'react';
import {Heart, Menu, Search, ShoppingBag, User, X} from 'lucide-react';
import {AnimatePresence, motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
// import heroJp from '../assets/g.png';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    // const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        {/* <img src={heroJp} alt=""  className="w-30"  /> */}
                        <a href="/" className="text-2xl font-serif font-bold text-gray-900 hover:text-pink-600 transition-colors duration-300">
                            DHARANI
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/collections" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                            Collections
                        </a>
                        <a href="/women" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                            Women
                        </a>
                        <a href="/men" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                            Men
                        </a>
                        <a href="/sustainability" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                            Sustainability
                        </a>
                        <button
                            onClick={() => navigate('/admin')}
                            className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium"
                        >
                            Admin
                        </button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => navigate('/search')}
                            className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-300"
                            aria-label="Search"
                        >
                            <Search size={20} />
                        </button>
                        <button className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-300" aria-label="Wishlist">
                            <Heart size={20} />
                        </button>
                        <button
                            onClick={() => navigate('/account')}
                            className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-300"
                            aria-label="Account"
                        >
                            <User size={20} />
                        </button>
                        <button
                            onClick={() => navigate('/cart')}
                            className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-300 relative"
                            aria-label="Shopping bag"
                        >
                            <ShoppingBag size={20} />
                            <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors duration-300"
                            aria-label="Menu"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <AnimatePresence>
                    {isSearchOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-gray-100 py-4"
                        >
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for brands, categories, fabrics..."
                                    className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                    autoFocus
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-gray-100 py-4"
                        >
                            <div className="flex flex-col space-y-4">
                                <a href="#collections" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                                    Collections
                                </a>
                                <a href="#women" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                                    Women
                                </a>
                                <a href="#men" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                                    Men
                                </a>
                                <a href="#sustainability" className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                                    Sustainability
                                </a>
                                <button
                                    onClick={() => navigate('/admin')}
                                    className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-left"
                                >
                                    Admin
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;