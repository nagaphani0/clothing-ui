import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { toast } from 'react-toastify';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            toast.success('Thank you for subscribing to our newsletter!');
            setEmail('');
            setIsLoading(false);
        }, 1000);
    };

    return (
        <section className="py-20 bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-400">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center mb-6">
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                            <Mail className="text-white" size={32} />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                        Stay in Style
                    </h2>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Be the first to discover new collections, exclusive offers, and fashion insights
                        from our design team.
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span>Subscribe</span>
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <p className="text-white/70 text-sm mt-4">
                        No spam, unsubscribe at any time. Read our{' '}
                        <a href="#privacy" className="underline hover:text-white transition-colors duration-200">
                            Privacy Policy
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;