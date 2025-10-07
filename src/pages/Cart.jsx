import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
//
// interface CartItem {
//     id: number;
//     name: string;
//     brand: string;
//     price: number;
//     image: string;
//     quantity: number;
//     size: string;
//     color: string;
// }

const Cart= () => {
    const navigate = useNavigate();

    // const [cartItems, setCartItems] = React.useState<CartItem[]>([
    const [cartItems, setCartItems] = React.useState([
        {
            id: 1,
            name: 'Silk Midi Dress',
            brand: 'LUXE Atelier',
            price: 890,
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            quantity: 1,
            size: 'M',
            color: 'Black'
        }
    ]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity === 0) {
            setCartItems(cartItems.filter(item => item.id !== id));
            toast.success('Item removed from cart');
        } else {
            setCartItems(cartItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
        toast.success('Item removed from cart');
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 500 ? 0 : 25;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-serif font-bold text-gray-900 mb-8"
                    >
                        Shopping Cart
                    </motion.h1>

                    {cartItems.length === 0 ? (
                        <div className="text-center py-16">
                            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
                            <p className="text-gray-600 mb-6">Add some items to get started</p>
                            <button
                                onClick={() => navigate('/')}
                                className="bg-pink-600 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-700 transition-colors duration-200"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2">
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-white rounded-lg shadow-sm p-6"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-20 object-cover rounded-lg"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                                    <p className="text-sm text-gray-600">{item.brand}</p>
                                                    <p className="text-sm text-gray-500">Size: {item.size} | Color: {item.color}</p>
                                                    <p className="font-semibold text-gray-900">${item.price}</p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 border border-gray-300 rounded hover:border-gray-400"
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <span className="w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 border border-gray-300 rounded hover:border-gray-400"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-2 text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between">
                                            <span>Subtotal</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Shipping</span>
                                            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Tax</span>
                                            <span>${tax.toFixed(2)}</span>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="flex justify-between font-semibold text-lg">
                                            <span>Total</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => navigate('/checkout')}
                                        className="w-full bg-pink-600 text-white py-3 rounded-full font-medium hover:bg-pink-700 transition-colors duration-200"
                                    >
                                        Proceed to Checkout
                                    </button>
                                    <button
                                        onClick={() => navigate('/')}
                                        className="w-full mt-2 text-gray-600 hover:text-gray-900"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Cart;