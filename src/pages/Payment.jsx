import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard, Truck, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Payment= () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-green-100 p-4 rounded-full">
                                <CheckCircle size={64} className="text-green-600" />
                            </div>
                        </div>

                        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                            Payment Successful!
                        </h1>

                        <p className="text-xl text-gray-600 mb-8">
                            Thank you for your purchase. Your order has been confirmed and will be shipped soon.
                        </p>

                        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Details</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Order Information</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong>Order Number:</strong> #12345</p>
                                        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                                        <p><strong>Total:</strong> $961.20</p>
                                        <p><strong>Payment Method:</strong> Credit Card ending in 1234</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Shipping Address</h3>
                                    <div className="text-sm text-gray-600">
                                        <p>John Doe</p>
                                        <p>123 Fashion Street</p>
                                        <p>New York, NY 10001</p>
                                        <p>United States</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-6" />

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-4">Items Ordered</h3>
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Silk Midi Dress"
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900">Silk Midi Dress</h4>
                                        <p className="text-sm text-gray-600">LUXE Atelier</p>
                                        <p className="text-sm text-gray-500">Quantity: 1</p>
                                    </div>
                                    <span className="font-semibold">$890.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                                <Truck className="mx-auto text-blue-600 mb-2" size={32} />
                                <h3 className="font-semibold text-gray-900 mb-2">Shipping</h3>
                                <p className="text-sm text-gray-600">Your order will be shipped within 2 business days</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                                <CreditCard className="mx-auto text-green-600 mb-2" size={32} />
                                <h3 className="font-semibold text-gray-900 mb-2">Payment</h3>
                                <p className="text-sm text-gray-600">Payment processed securely</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                                <Shield className="mx-auto text-purple-600 mb-2" size={32} />
                                <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
                                <p className="text-sm text-gray-600">Your information is protected</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate('/account')}
                                className="bg-pink-600 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-700 transition-colors duration-200"
                            >
                                View Order History
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-gray-400 transition-colors duration-200"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Payment;