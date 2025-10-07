import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart, Award } from 'lucide-react';

const SustainabilitySection = () => {
    const features = [
        {
            icon: <Leaf className="text-green-600" size={32} />,
            title: 'Eco-Friendly Materials',
            description: 'Sourced from sustainable and organic materials with minimal environmental impact'
        },
        {
            icon: <Recycle className="text-blue-600" size={32} />,
            title: 'Circular Fashion',
            description: 'Designed for longevity with repair services and recycling programs'
        },
        {
            icon: <Heart className="text-pink-600" size={32} />,
            title: 'Ethical Production',
            description: 'Fair trade practices ensuring ethical working conditions for all artisans'
        },
        {
            icon: <Award className="text-violet-600" size={32} />,
            title: 'Certified Quality',
            description: 'GOTS and OEKO-TEX certified materials meeting the highest standards'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                            Sustainable
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Luxury Fashion
              </span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We believe luxury and sustainability go hand in hand. Our commitment to the planet
                            drives every decision we make, from material sourcing to production processes.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                        >
                            Learn More About Our Impact
                        </motion.button>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Sustainable fashion production"
                                className="w-full h-[600px] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Floating Stats */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
                                <div className="text-sm text-gray-600">Sustainable Materials</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                                <div className="text-sm text-gray-600">Ethical Production</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;