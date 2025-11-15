import React from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Search= () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = React.useState('');
    const [sortBy, setSortBy] = React.useState('relevance');

    const products = [
        {
            id: 1,
            name: 'Silk Midi Dress',
            brand: 'LUXE Atelier',
            price: 890,
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Dresses'
        },
        {
            id: 2,
            name: 'Cashmere Blazer',
            brand: 'LUXE Essentials',
            price: 1450,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Blazers'
        }
    ];

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Search Header */}
                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    placeholder="Search for products, brands, categories..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                />
                                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            </div>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                            >
                                <option value="relevance">Sort by Relevance</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="newest">Newest First</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">
                                {filteredProducts.length} results for "{searchQuery || 'all products'}"
                            </p>
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                                <Filter size={20} />
                                <span>Filters</span>
                            </button>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                onClick={() => navigate(`/product/${product.id}`)}
                            >
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                                    <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                                    <div className="font-semibold text-gray-900">₹{product.price.toLocaleString()}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredProducts.length === 0 && searchQuery && (
                        <div className="text-center py-16">
                            <SearchIcon size={64} className="mx-auto text-gray-400 mb-4" />
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No results found</h2>
                            <p className="text-gray-600 mb-6">Try adjusting your search terms or browse our categories</p>
                            <button
                                onClick={() => navigate('/')}
                                className="bg-pink-600 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-700 transition-colors duration-200"
                            >
                                Browse All Products
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Search;