import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { toast } from 'react-toastify';

// interface Product {
//     id: number;
//     name: string;
//     brand: string;
//     price: number;
//     originalPrice?: number;
//     image: string;
//     isNew: boolean;
//     colors: string[];
//     description: string;
//     category: string;
// }

const Admin = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Silk Midi Dress',
            brand: 'LUXE Atelier',
            price: 890,
            originalPrice: 1200,
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isNew: true,
            colors: ['#000000', '#8B4513', '#800080'],
            description: 'Elegant silk midi dress perfect for any occasion.',
            category: 'Dresses'
        },
        {
            id: 2,
            name: 'Cashmere Blazer',
            brand: 'LUXE Essentials',
            price: 1450,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isNew: false,
            colors: ['#F5F5DC', '#000000', '#708090'],
            description: 'Luxurious cashmere blazer for professional looks.',
            category: 'Blazers'
        }
    ]);

    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        price: 0,
        originalPrice: undefined,
        image: '',
        isNew: false,
        colors: [],
        description: '',
        category: ''
    });

    const handleAdd = () => {
        setIsAdding(true);
        setFormData({
            name: '',
            brand: '',
            price: 0,
            originalPrice: undefined,
            image: '',
            isNew: false,
            colors: [],
            description: '',
            category: ''
        });
    };

    const handleEdit = (product) => {
        setEditingId(product.id);
        setFormData(product);
    };

    const handleSave = () => {
        if (isAdding) {
            const newProduct = {
                ...formData,
                id: Date.now(),
                colors: formData.colors || []
            };
            setProducts([...products, newProduct]);
            toast.success('Product added successfully!');
        } else if (editingId) {
            setProducts(products.map(p =>
                p.id === editingId ? { ...formData, id: editingId } : p
            ));
            toast.success('Product updated successfully!');
        }
        setIsAdding(false);
        setEditingId(null);
        setFormData({});
    };

    const handleDelete = (id) => {
        setProducts(products.filter(p => p.id !== id));
        toast.success('Product deleted successfully!');
    };

    const handleCancel = () => {
        setIsAdding(false);
        setEditingId(null);
        setFormData({});
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Admin Dashboard</h1>
                    <p className="text-gray-600">Manage your products</p>
                </motion.div>

                <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-6 border-b border-gray-200">
                        <button
                            onClick={handleAdd}
                            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center space-x-2"
                        >
                            <Plus size={20} />
                            <span>Add Product</span>
                        </button>
                    </div>

                    {(isAdding || editingId) && (
                        <div className="p-6 border-b border-gray-200 bg-gray-50">
                            <h2 className="text-xl font-semibold mb-4">{isAdding ? 'Add New Product' : 'Edit Product'}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    value={formData.name || ''}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Brand"
                                    value={formData.brand || ''}
                                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                />
                                <input
                                    type="number"
                                    placeholder="Price"
                                    value={formData.price || ''}
                                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                />
                                <input
                                    type="number"
                                    placeholder="Original Price (optional)"
                                    value={formData.originalPrice || ''}
                                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value ? parseFloat(e.target.value) : undefined })}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    value={formData.image || ''}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Category"
                                    value={formData.category || ''}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                                />
                                <textarea
                                    placeholder="Description"
                                    value={formData.description || ''}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 md:col-span-2"
                                    rows={3}
                                />
                                <div className="flex items-center space-x-2 md:col-span-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.isNew || false}
                                        onChange={(e) => setFormData({ ...formData, isNew: e.target.checked })}
                                        className="rounded"
                                    />
                                    <label className="text-sm text-gray-700">New Product</label>
                                </div>
                            </div>
                            <div className="mt-4 flex space-x-2">
                                <button
                                    onClick={handleSave}
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                                >
                                    <Save size={20} />
                                    <span>Save</span>
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2"
                                >
                                    <X size={20} />
                                    <span>Cancel</span>
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img className="h-10 w-10 rounded-lg object-cover" src={product.image} alt={product.name} />
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                                <div className="text-sm text-gray-500">{product.description.slice(0, 50)}...</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.brand}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{product.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.category}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => handleEdit(product)}
                                            className="text-indigo-600 hover:text-indigo-900 mr-4"
                                        >
                                            <Edit size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;