import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer= () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="text-3xl font-serif font-bold mb-4">AMMU</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Redefining luxury fashion with sustainable practices and timeless designs
                            that celebrate individuality and craftsmanship.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Shop</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">New Arrivals</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Women</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Men</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Accessories</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sale</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Gift Cards</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Size Guide</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Shipping & Returns</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Care Instructions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Track Order</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail size={16} className="text-gray-400" />
                                <span className="text-gray-400">hello@luxe.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={16} className="text-gray-400" />
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin size={16} className="text-gray-400 mt-1" />
                                <span className="text-gray-400">
                  123 Fashion Avenue<br />
                  New York, NY 10001
                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                                Accessibility
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                                Sustainability
                            </a>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © {currentYear} LUXE. All rights reserved. Built with ❤️ by{' '}
                            <a
                                rel="nofollow"
                                target="_blank"
                                href="https://meku.dev"
                                className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                            >
                                Meku.dev
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;