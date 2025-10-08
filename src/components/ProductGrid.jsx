import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductGrid= () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: 'Silk Midi Dress',
            brand: 'LUXE Atelier',
            price: 890,
            originalPrice: 1200,
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isNew: true,
            colors: ['#000000', '#8B4513', '#800080']
        },
        {
            id: 2,
            name: 'Cashmere Blazer',
            brand: 'LUXE Essentials',
            price: 1450,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isNew: false,
            colors: ['#F5F5DC', '#000000', '#708090']
        },
        {
            id: 3,
            name: 'Evening Gown',
            brand: 'LUXE Couture',
            price: 2890,
            image: 'https://images.unsplash.com/photo-1566479179817-c0b5b4b8b1cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isNew: false,
            colors: ['#000000', '#8B0000', '#000080']
        },
        {
            id: 4,
            name: 'Leather Handbag',
            brand: 'LUXE Accessories',
            price: 650,
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isNew: true,
            colors: ['#8B4513', '#000000', '#F5F5DC']
        },
        {
            id: 5,
            name: 'Wool Coat',
            brand: 'LUXE Outerwear',
            price: 1890,
            originalPrice: 2400,
            image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isNew: false,
            colors: ['#8B4513', '#000000', '#708090']
        },
        {
            id: 6,
            name: 'Designer Heels',
            brand: 'LUXE Footwear',
            price: 780,
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isNew: true,
            colors: ['#000000', '#8B0000', '#FFD700']
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">
                        Trending Now
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover the most coveted pieces from our latest arrivals
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="aspect-[3/4] overflow-hidden relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />

                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        {product.isNew && (
                                            <span className="bg-gradient-to-r from-pink-600 to-violet-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        New
                      </span>
                                        )}
                                        {product.originalPrice && (
                                            <span className="bg-cyan-400 text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                        Sale
                      </span>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200" aria-label="Add to wishlist">
                                            <Heart size={18} className="text-gray-700 hover:text-pink-600" />
                                        </button>
                                        <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200" aria-label="Quick add to bag">
                                            <ShoppingBag size={18} className="text-gray-700 hover:text-pink-600" />
                                        </button>
                                    </div>

                                    {/* Quick Shop Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <button className="w-full bg-white text-gray-900 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
                                            Quick Shop
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-500 font-medium">{product.brand}</span>
                                        <div className="flex gap-1">
                                            {product.colors.map((color, colorIndex) => (
                                                <div
                                                    key={colorIndex}
                                                    className="w-4 h-4 rounded-full border border-gray-200"
                                                    style={{ backgroundColor: color }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center space-x-2">
                    <span className="text-xl font-semibold text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>
                                        {product.originalPrice && (
                                            <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;