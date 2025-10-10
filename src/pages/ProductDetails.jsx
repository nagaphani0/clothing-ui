import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {motion} from 'framer-motion';
import {ArrowLeft, Heart, ShoppingBag, Star} from 'lucide-react';
import {toast} from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {products} from "../components/ProductGrid.jsx";

const ProductDetails= () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products[parseInt(id || '1') - 1];
    const [selectedImage, setSelectedImage] = React.useState(0);
    const [selectedColor, setSelectedColor] = React.useState(0);
    const [selectedSize, setSelectedSize] = React.useState(0);

    const handleAddToCart = () => {
        toast.success('Added to cart!');
        // send data
        // console.log(product)
        localStorage.setItem("cart",JSON.stringify(product))
        console.log('cart',localStorage.getItem("cart"))
    };

    const handleAddToWishlist = () => {
        toast.success('Added to wishlist!');
        // send data
        // console.log(product)

    };

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
                    >
                        <ArrowLeft size={20} />
                        <span>Back</span>
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Images */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 mb-4"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <div className="flex space-x-4">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                                            selectedImage === index ? 'border-pink-600' : 'border-gray-200'
                                        }`}
                                    >
                                        <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="text-sm text-gray-500">{product.brand}</span>
                                    {product.isNew && (
                                        <span className="bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium">New</span>
                                    )}
                                </div>

                                <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">{product.name}</h1>

                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                                            />
                                        ))}
                                        <span className="text-sm text-gray-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 mb-6">
                                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                                    {product.originalPrice && (
                                        <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                                    )}
                                </div>

                                <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

                                {/* Color Selection */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                                    <div className="flex space-x-3">
                                        {product.colors.map((color, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedColor(index)}
                                                className={`w-8 h-8 rounded-full border-2 ${
                                                    selectedColor === index ? 'border-gray-900' : 'border-gray-300'
                                                }`}
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Size Selection */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                                    <div className="flex space-x-3">
                                        {product.sizes.map((size, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedSize(index)}
                                                className={`px-4 py-2 border rounded-lg text-sm font-medium ${
                                                    selectedSize === index
                                                        ? 'border-pink-600 text-pink-600 bg-pink-50'
                                                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex space-x-4 mb-8">
                                    <button
                                        onClick={handleAddToCart}
                                        className="flex-1 bg-pink-600 text-white px-8 py-4 rounded-full font-medium hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                                    >
                                        <ShoppingBag size={20} />
                                        <span>Add to Cart</span>
                                    </button>
                                    <button
                                        onClick={handleAddToWishlist}
                                        className="p-4 border border-gray-300 rounded-full hover:border-pink-600 hover:text-pink-600 transition-colors duration-200"
                                    >
                                        <Heart size={20} />
                                    </button>
                                </div>

                                <div className="text-sm text-gray-600">
                                    <p className="mb-2"><strong>Free shipping</strong> on orders over $500</p>
                                    <p className="mb-2"><strong>30-day returns</strong> - easy and free</p>
                                    <p><strong>In stock</strong> - ships within 2 business days</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetails;