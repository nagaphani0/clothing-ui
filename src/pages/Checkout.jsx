import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'US',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: ''
    });

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Order placed successfully!');
        navigate('/payment');
    };

    const subtotal = 890;
    const shipping = 0;
    const tax = 71.2;
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
                        Checkout
                    </motion.h1>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Shipping & Payment */}
                        <div className="space-y-8">
                            {/* Contact Information */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                        required
                                    />
                                </div>
                                <div className="mt-4 space-y-4">
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                        required
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="state"
                                            placeholder="State"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="zipCode"
                                            placeholder="ZIP code"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                            required
                                        />
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                            required
                                        >
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h2>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        name="nameOnCard"
                                        placeholder="Name on card"
                                        value={formData.nameOnCard}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        placeholder="Card number"
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                        required
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="expiryDate"
                                            placeholder="MM/YY"
                                            value={formData.expiryDate}
                                            onChange={handleInputChange}
                                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="cvv"
                                            placeholder="CVV"
                                            value={formData.cvv}
                                            onChange={handleInputChange}
                                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

                                {/* Cart Items */}
                                <div className="space-y-4 mb-4">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Silk Midi Dress"
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900">Silk Midi Dress</h3>
                                            <p className="text-sm text-gray-600">LUXE Atelier</p>
                                            <p className="text-sm text-gray-500">Qty: 1</p>
                                        </div>
                                        <span className="font-semibold">$890</span>
                                    </div>
                                </div>

                                <hr className="my-4" />

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
                                    type="submit"
                                    className="w-full bg-pink-600 text-white py-3 rounded-full font-medium hover:bg-pink-700 transition-colors duration-200"
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Checkout;