import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEdit, FiTrash2, FiPlus, FiSearch, FiFilter, FiX, FiCheck, FiAlertCircle } from 'react-icons/fi';

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        gender: '',
        goal: ''
    });
    const [notification, setNotification] = useState({
        show: false,
        message: '',
        type: 'success' // 'success' or 'error'
    });

    useEffect(() => {
        const mockUsers = [
            {
                id: 1,
                name: 'AbhinRaj',
                place: 'Edavannapara',
                phone: '8592943588',
                age: 23,
                gender: 'Male',
                goal: 'Weight Gain',
                courseDuration: '12',
                joinDate: '2023-01-15'
            },
            {
                id: 2,
                name: 'Megha',
                place: 'Moottoli',
                phone: '9400749917',
                age: 23,
                gender: 'Female',
                goal: 'Fat Loss',
                courseDuration: '12',
                joinDate: '2023-02-20'
            },
            {
                id: 3,
                name: 'Akshay',
                place: 'Faroke',
                phone: '8078720009',
                age: 23,
                gender: 'Male',
                goal: 'Weight Gain',
                courseDuration: '12',
                joinDate: '2023-03-10'
            },
            {
                id: 4,
                name: 'Neha',
                place: 'Kakkodi',
                phone: '9746895058',
                age: 21,
                gender: 'Female',
                goal: 'Weight Gain',
                courseDuration: '6',
                joinDate: '2023-04-05'
            },
            {
                id: 5,
                name: 'Hemand',
                place: 'Edavannapara',
                phone: '9633799929',
                age: 13,
                gender: 'Male',
                goal: 'Weight Gain',
                courseDuration: '6',
                joinDate: '2023-05-12'
            }
        ];
        setUsers(mockUsers);
    }, []);

    const showNotification = (message, type = 'success') => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ ...notification, show: false });
        }, 3000);
    };

    const filteredUsers = users.filter(user => {
        const matchesSearch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone.includes(searchTerm);

        const matchesGender = filters.gender ? user.gender === filters.gender : true;
        const matchesGoal = filters.goal ? user.goal === filters.goal : true;

        return matchesSearch && matchesGender && matchesGoal;
    });

    const handleEdit = (user) => {
        setCurrentUser(user);
        setIsModalOpen(true);
    };

    const handleDelete = (user) => {
        setUserToDelete(user);
        setIsDeleteConfirmOpen(true);
    };

    const confirmDelete = () => {
        try {
            setUsers(users.filter(user => user.id !== userToDelete.id));
            setIsDeleteConfirmOpen(false);
            setUserToDelete(null);
            showNotification(`${userToDelete.name} has been deleted successfully.`);
        } catch (error) {
            showNotification(`Failed to delete ${userToDelete.name}.`, 'error');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (currentUser.id) {
                // Update existing user
                setUsers(users.map(user => user.id === currentUser.id ? currentUser : user));
                showNotification(`${currentUser.name} has been updated successfully.`);
            } else {
                // Add new user
                const newUser = {
                    ...currentUser,
                    id: users.length + 1,
                    joinDate: new Date().toISOString().split('T')[0]
                };
                setUsers([...users, newUser]);
                showNotification(`${newUser.name} has been added successfully.`);
            }
            setIsModalOpen(false);
            setCurrentUser(null);
        } catch (error) {
            showNotification(
                currentUser.id
                    ? `Failed to update ${currentUser.name}.`
                    : 'Failed to add new member.',
                'error'
            );
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const resetFilters = () => {
        setFilters({
            gender: '',
            goal: ''
        });
    };

    const hasActiveFilters = filters.gender || filters.goal;

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            {/* Notification Toast */}
            <AnimatePresence>
                {notification.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg shadow-lg ${notification.type === 'success'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                    >
                        {notification.type === 'success' ? (
                            <FiCheck className="mr-2 text-xl" />
                        ) : (
                            <FiAlertCircle className="mr-2 text-xl" />
                        )}
                        <span className="font-medium">{notification.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Fitness Members</h1>
                        <p className="text-gray-600 mt-1">
                            Total Members: <span className="font-semibold">{users.length}</span>
                            {filteredUsers.length !== users.length && (
                                <span className="ml-2">
                                    (Showing <span className="font-semibold">{filteredUsers.length}</span>)
                                </span>
                            )}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center justify-center px-4 py-2 rounded-lg transition-colors ${showFilters ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-700 shadow-sm border border-gray-300'}`}
                        >
                            <FiFilter className="mr-2" />
                            Filters
                            {hasActiveFilters && (
                                <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                    {Object.values(filters).filter(Boolean).length}
                                </span>
                            )}
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                                setCurrentUser({
                                    id: null,
                                    name: '',
                                    place: '',
                                    phone: '',
                                    age: '',
                                    gender: '',
                                    goal: '',
                                    courseDuration: '1'
                                });
                                setIsModalOpen(true);
                            }}
                            className="flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 hover:from-gray-800 hover:via-gray-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg shadow-md"
                        >
                            <FiPlus className="mr-2" />
                            Add Member
                        </motion.button>
                    </div>
                </div>

                {/* Filters Panel */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden mb-6 border border-gray-200"
                        >
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-medium text-gray-800">Filter Members</h3>
                                    <button
                                        onClick={resetFilters}
                                        className="text-sm text-blue-600 hover:text-blue-800"
                                    >
                                        Reset all
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                        <select
                                            name="gender"
                                            value={filters.gender}
                                            onChange={handleFilterChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        >
                                            <option value="">All Genders</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Fitness Goal</label>
                                        <select
                                            name="goal"
                                            value={filters.goal}
                                            onChange={handleFilterChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        >
                                            <option value="">All Goals</option>
                                            <option value="Fat Loss">Fat Loss</option>
                                            <option value="Weight Gain">Weight Gain</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                    <div className="p-4 border-b border-gray-200">
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search members by name, place or phone..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Place</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goal</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Duration</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((user) => (
                                        <motion.tr
                                            key={user.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                <div className="text-xs text-gray-500">Joined: {user.joinDate}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.place}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.age}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${user.gender === 'Male' ? 'bg-blue-100 text-blue-800' :
                                                        user.gender === 'Female' ? 'bg-pink-100 text-pink-800' :
                                                            'bg-purple-100 text-purple-800'}`}>
                                                    {user.gender}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${user.goal === 'Fat Loss' ? 'bg-red-100 text-red-800' :
                                                        'bg-green-100 text-green-800'}`}>
                                                    {user.goal}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                                                    {user.courseDuration} month{user.courseDuration !== '1' ? 's' : ''}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-2">
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => handleEdit(user)}
                                                        className="text-emerald-600 hover:text-emerald-900"
                                                    >
                                                        <FiEdit size={18} />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => handleDelete(user)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        <FiTrash2 size={18} />
                                                    </motion.button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                                            No members found matching your criteria
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>

            {/* Add/Edit User Modal */}
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-xl shadow-xl w-full max-w-md"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {currentUser.id ? 'Edit Member' : 'Add New Member'}
                                </h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={currentUser.name}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Place*</label>
                                            <input
                                                type="text"
                                                name="place"
                                                value={currentUser.place}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={currentUser.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Age*</label>
                                            <input
                                                type="number"
                                                name="age"
                                                value={currentUser.age}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                required
                                                min="16"
                                                max="100"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Gender*</label>
                                            <select
                                                name="gender"
                                                value={currentUser.gender}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                required
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Goal*</label>
                                            <select
                                                name="goal"
                                                value={currentUser.goal}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                required
                                            >
                                                <option value="">Select Goal</option>
                                                <option value="Fat Loss">Fat Loss</option>
                                                <option value="Weight Gain">Weight Gain</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Duration (months)*</label>
                                            <select
                                                name="courseDuration"
                                                value={currentUser.courseDuration}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                required
                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => (
                                                    <option key={month} value={month}>{month}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-end space-x-3">
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white rounded-md hover:from-gray-800 hover:via-gray-700 hover:to-emerald-700 shadow-md"
                                    >
                                        {currentUser.id ? 'Update' : 'Add'} Member
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteConfirmOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    onClick={() => setIsDeleteConfirmOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-xl shadow-xl w-full max-w-md p-6"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Confirm Deletion</h2>
                            <button
                                onClick={() => setIsDeleteConfirmOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <FiX size={20} />
                            </button>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete <span className="font-semibold">{userToDelete?.name}</span>?
                        </p>

                        <div className="flex justify-end space-x-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsDeleteConfirmOpen(false)}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-md hover:from-red-700 hover:to-red-900 shadow-md"
                            >
                                Delete Member
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default HomePage;