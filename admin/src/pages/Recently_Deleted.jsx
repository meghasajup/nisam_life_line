import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrash2, FiClock, FiUser, FiMapPin, FiPhone, FiCalendar, FiRefreshCw, FiX } from 'react-icons/fi';
import Lottie from 'lottie-react'; 
import emptyTrashAnimation from '../assests/Empty Box.json';
import successAnimation from '../assests/successfully.json';
import deleteAnimation from '../assests/Delete message.json';

const RecentlyDeleted = () => {
  const [deletedItems, setDeletedItems] = useState([
    {
      id: 1,
      name: 'Rajan',
      place: 'Edavannapara',
      phone: '9633799929',
      age: 56,
      gender: 'Male',
      goal: 'Fat Loss',
      courseDuration: '3 months',
      deletedAt: '2023-05-15 14:30'
    },
    {
      id: 2,
      name: 'Padmini',
      place: 'Kakkodi',
      phone: '8139822831',
      age: 52,
      gender: 'Female',
      goal: 'Weight Gain',
      courseDuration: '6 months',
      deletedAt: '2023-05-14 09:15'
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [actionSuccess, setActionSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleRestoreConfirmation = () => {
    setShowRestoreModal(true);
  };

  const handleDeleteConfirmation = () => {
    setShowDeleteModal(true);
  };

  const restoreItems = () => {
    // Close modal and show success
    setShowRestoreModal(false);
    
    setTimeout(() => {
      setDeletedItems(deletedItems.filter(item => !selectedItems.includes(item.id)));
      setSelectedItems([]);
      setSuccessMessage(`${selectedItems.length} item(s) restored successfully!`);
      setActionSuccess(true);
      
      setTimeout(() => setActionSuccess(false), 3000);
    }, 1000);
  };

  const permanentDelete = () => {
    setShowDeleteModal(false);
    
    setTimeout(() => {
      setDeletedItems(deletedItems.filter(item => !selectedItems.includes(item.id)));
      setSelectedItems([]);
      setSuccessMessage(`${selectedItems.length} item(s) permanently deleted!`);
      setActionSuccess(true);
      
      setTimeout(() => setActionSuccess(false), 3000);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 500 }
    },
    exit: { opacity: 0, scale: 0.9 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
      {/* Success Notification */}
      <AnimatePresence>
        {actionSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
              <Lottie 
                animationData={successAnimation} 
                loop={false} 
                style={{ height: 40, width: 40 }} 
              />
              <span className="ml-2">{successMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Restore Confirmation Modal */}
      <AnimatePresence>
        {showRestoreModal && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setShowRestoreModal(false)}
            />
            
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Confirm Restoration</h3>
                      <p className="text-gray-600 mt-2">
                        Are you sure you want to restore {selectedItems.length} selected item(s)?
                      </p>
                    </div>
                    <button 
                      onClick={() => setShowRestoreModal(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                  
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      onClick={() => setShowRestoreModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={restoreItems}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <FiRefreshCw className="mr-2" />
                      Confirm Restore
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setShowDeleteModal(false)}
            />
            
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Lottie 
                      animationData={deleteAnimation} 
                      loop={false} 
                      style={{ height: 100, width: 100 }} 
                    />
                    <h3 className="text-2xl font-bold text-gray-800 mt-4">Permanent Deletion</h3>
                    <p className="text-gray-600 mt-2">
                      This action cannot be undone. {selectedItems.length} item(s) will be permanently deleted.
                    </p>
                  </div>
                  
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={permanentDelete}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
                    >
                      <FiTrash2 className="mr-2" />
                      Delete Permanently
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Recently Deleted</h1>
            <p className="text-gray-600">Items deleted in the last 30 days</p>
          </div>
          <div className="flex space-x-3">
            {selectedItems.length > 0 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRestoreConfirmation}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
                >
                  <FiRefreshCw className="mr-2" />
                  Restore Selected
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDeleteConfirmation}
                  className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-colors"
                >
                  <FiTrash2 className="mr-2" />
                  Delete Permanently
                </motion.button>
              </>
            )}
          </div>
        </div>

        {deletedItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-sm"
          >
            <Lottie 
              animationData={emptyTrashAnimation} 
              loop={true} 
              style={{ height: 200, width: 200 }} 
            />
            <h3 className="text-xl font-medium text-gray-700 mt-4">No deleted items</h3>
            <p className="text-gray-500 mt-2">Items you delete will appear here for 30 days</p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-4"
          >
            {deletedItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className={`bg-white rounded-xl shadow-sm overflow-hidden border-l-4 ${selectedItems.includes(item.id) ? 'border-blue-500' : 'border-transparent'}`}
              >
                <div className="p-5 flex items-start">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleSelectItem(item.id)}
                    className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                          <FiUser className="mr-2 text-blue-500" />
                          {item.name}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-4">
                          <div className="flex items-center text-gray-600">
                            <FiMapPin className="mr-2 text-green-500" />
                            {item.place}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FiPhone className="mr-2 text-purple-500" />
                            {item.phone}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <span className="mr-2 text-yellow-500">Age:</span>
                            {item.age}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <span className="mr-2 text-pink-500">Gender:</span>
                            {item.gender}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FiClock className="mr-1" />
                        Deleted on {new Date(item.deletedAt).toLocaleString()}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                      <div>
                        <span className="font-medium text-gray-700">Goal:</span> {item.goal}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Course Duration:</span> {item.courseDuration}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default RecentlyDeleted;