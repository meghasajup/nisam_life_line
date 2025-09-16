import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiLayout,
    FiTrash2,
    FiLogOut,
    FiMenu,
    FiX,
    FiUser,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axiosInstance';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('');
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const activeMenuItem = menuItems.find(item => item.path === currentPath);
        if (activeMenuItem) {
            setActiveItem(activeMenuItem.name);
        }
    }, []);

    const menuItems = [
        { name: 'Dashboard', icon: <FiLayout size={20} />, path: '/' },
        { name: 'Recently Deleted', icon: <FiTrash2 size={20} />, path: '/recently-deleted' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleItemClick = (itemName, path) => {
        setActiveItem(itemName);
        setIsMobileMenuOpen(false);
        navigate(path);
    };

    const handleLogout = async () => {
        try {
            await axiosInstance.post('/admin/logout', {}, { withCredentials: true });
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 30 }
        },
        closed: {
            opacity: 0,
            y: -10,
            transition: { type: 'spring', stiffness: 300, damping: 30 }
        }
    };

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 bg-white text-gray-800 z-50 shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo and Brand */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                            </button>

                            <div className="flex items-center">
                                <h1 className="text-xl font-bold bg-gradient-to-br from-gray-500 via-gray-600 to-emerald-400 bg-clip-text text-transparent">
                                    <a href="/">Nisam Lifeline</a>
                                </h1>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-2">
                            {menuItems.map((item) => (
                                <motion.button
                                    key={item.name}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleItemClick(item.name, item.path)}
                                    className={`flex items-center px-4 py-2 rounded-lg transition-all ${activeItem === item.name ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white shadow-md' : 'hover:bg-gray-100 text-gray-700'}`}
                                >
                                    <span className="mr-2">{item.icon}</span>
                                    <span>{item.name}</span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Right Side Icons */}
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <button
                                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                                    onBlur={() => setTimeout(() => setShowProfileDropdown(false), 200)}
                                    className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${showProfileDropdown ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white' : 'bg-gray-100 text-gray-700'}`}>
                                        <FiUser size={16} />
                                    </div>
                                    <span className="hidden md:inline font-medium">Admin</span>
                                </button>

                                <AnimatePresence>

                                    {showProfileDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                                        >
                                            <button
                                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center focus:outline-none"
                                                onClick={handleLogout}
                                            >
                                                <FiLogOut size={16} className="mr-2" />
                                                Logout
                                            </button>
                                        </motion.div>
                                    )}

                                </AnimatePresence>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="md:hidden bg-white overflow-hidden border-t border-gray-200"
                        >
                            <div className="px-4 py-2 space-y-1">
                                {menuItems.map((item) => (
                                    <motion.button
                                        key={item.name}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={itemVariants}
                                        onClick={() => handleItemClick(item.name, item.path)}
                                        className={`w-full flex items-center p-3 rounded-lg transition-all ${activeItem === item.name ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white shadow-md' : 'hover:bg-gray-100 text-gray-700'}`}
                                    >
                                        <span className="mr-3">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </motion.button>
                                ))}

                                <motion.button
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={itemVariants}
                                    className="w-full flex items-center p-3 rounded-lg hover:bg-gray-100 text-red-600"
                                    onClick={handleLogout}
                                >
                                    <FiLogOut size={20} className="mr-3" />
                                    <span>Logout</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <div className="pt-16"></div>
        </>
    );
};
export default Navbar;