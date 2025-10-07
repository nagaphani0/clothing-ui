import React from 'react';
import { motion } from 'framer-motion';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Account= () => {
    const [activeTab, setActiveTab] = React.useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'orders', label: 'Orders', icon: Package },
        { id: 'wishlist', label: 'Wishlist', icon: Heart },
        { id: 'settings', label: 'Settings', icon: Settings }
    ];

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
                        My Account
                    </motion.h1>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <User size={32} className="text-pink-600" />
                                    </div>
                                    <h2 className="font-semibold text-gray-900">John Doe</h2>
                                    <p className="text-sm text-gray-600">john@example.com</p>
                                </div>

                                <nav className="space-y-2">
                                    {tabs.map((tab) => {
                                        const Icon = tab.icon;
                                        return (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                                                    activeTab === tab.id
                                                        ? 'bg-pink-50 text-pink-600 border border-pink-200'
                                                        : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                            >
                                                <Icon size={20} />
                                                <span>{tab.label}</span>
                                            </button>
                                        );
                                    })}
                                    <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                                        <LogOut size={20} />
                                        <span>Logout</span>
                                    </button>
                                </nav>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-3">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-lg shadow-sm p-6"
                            >
                                {activeTab === 'profile' && (
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                                <input
                                                    type="text"
                                                    defaultValue="John"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                                <input
                                                    type="text"
                                                    defaultValue="Doe"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    defaultValue="john@example.com"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                                <input
                                                    type="tel"
                                                    defaultValue="+1 (555) 123-4567"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                                />
                                            </div>
                                        </div>
                                        <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition-colors duration-200">
                                            Save Changes
                                        </button>
                                    </div>
                                )}

                                {activeTab === 'orders' && (
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order History</h2>
                                        <div className="space-y-4">
                                            <div className="border border-gray-200 rounded-lg p-4">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">Order #12345</h3>
                                                        <p className="text-sm text-gray-600">Placed on {new Date().toLocaleDateString()}</p>
                                                    </div>
                                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            Delivered
                          </span>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                                        alt="Silk Midi Dress"
                                                        className="w-16 h-16 object-cover rounded-lg"
                                                    />
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-gray-900">Silk Midi Dress</h4>
                                                        <p className="text-sm text-gray-600">LUXE Atelier</p>
                                                    </div>
                                                    <span className="font-semibold">$890.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'wishlist' && (
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">My Wishlist</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="border border-gray-200 rounded-lg p-4">
                                                <img
                                                    src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                                    alt="Cashmere Blazer"
                                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                                />
                                                <h3 className="font-semibold text-gray-900 mb-2">Cashmere Blazer</h3>
                                                <p className="text-sm text-gray-600 mb-2">LUXE Essentials</p>
                                                <p className="font-semibold text-gray-900">$1,450</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'settings' && (
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-4">Notifications</h3>
                                                <div className="space-y-3">
                                                    <label className="flex items-center">
                                                        <input type="checkbox" defaultChecked className="rounded" />
                                                        <span className="ml-3 text-sm">Email notifications for orders</span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input type="checkbox" defaultChecked className="rounded" />
                                                        <span className="ml-3 text-sm">Promotional emails</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-4">Privacy</h3>
                                                <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                                                    Change Password
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Account;