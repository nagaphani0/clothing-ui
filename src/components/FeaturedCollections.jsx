import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedCollections = () => {
    const collections = [
        {
            id: 1,
            title: 'Spring Elegance',
            subtitle: 'Ethereal designs for the modern woman',
            image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            items: '24 pieces'
        },
        {
            id: 2,
            title: 'Urban Minimalism',
            subtitle: 'Clean lines meet contemporary style',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            items: '18 pieces'
        },
        {
            id: 3,
            title: 'Evening Luxe',
            subtitle: 'Sophisticated glamour for special occasions',
            image: 'https://images.unsplash.com/photo-1566479179817-c0b5b4b8b1cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            items: '12 pieces'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">
                        Featured Collections
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Carefully curated pieces that embody our commitment to exceptional craftsmanship and timeless design
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={collection.image}
                                        alt={collection.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <h3 className="text-2xl font-serif font-medium mb-2">{collection.title}</h3>
                                        <p className="text-gray-200 mb-3">{collection.subtitle}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-300">{collection.items}</span>
                                            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 group-hover:opacity-0 transition-opacity duration-500">
                                    <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">{collection.title}</h3>
                                    <p className="text-gray-600 text-sm">{collection.items}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className="group bg-gradient-to-r from-pink-600 to-violet-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center space-x-2 mx-auto">
                        <span>View All Collections</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedCollections;