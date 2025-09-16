import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiTrash2,
  FiClock,
  FiUser,
  FiMapPin,
  FiPhone,
  FiRefreshCw,
  FiX
} from 'react-icons/fi';
import Lottie from 'lottie-react';
import emptyTrashAnimation from '../assests/Empty Box.json';
import successAnimation from '../assests/successfully.json';
import deleteAnimation from '../assests/Delete message.json';
import { axiosInstance } from '../config/axiosInstance';

const RecentlyDeleted = () => {
  const [deletedItems, setDeletedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [actionSuccess, setActionSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  // Fetch deleted items
  const fetchDeletedItems = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/admin/recently-deleted", {
        withCredentials: true
      });
      setDeletedItems(response.data.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load deleted items. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDeletedItems();
  }, []);

  // Toggle selection
  const toggleSelectItem = (id) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  // Select all
  const selectAllItems = () => {
    if (selectedItems.length === deletedItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(deletedItems.map(item => item._id));
    }
  };

  // Restore
  const restoreItems = async () => {
    setShowRestoreModal(false);
    setIsProcessing(true);
    setError(null);

    try {
      const response = await axiosInstance.post(
        "/admin/restore-items",
        { ids: selectedItems },
        { withCredentials: true }
      );

      if (response.data.success) {
        setSelectedItems([]);
        setSuccessMessage(response.data.message);
        setActionSuccess(true);
        await fetchDeletedItems(); 
      } else {
        setError(response.data.message || "Restoration failed.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error restoring items.");
    } finally {
      setIsProcessing(false);
      setTimeout(() => {
        setActionSuccess(false);
        setError(null);
      }, 3000);
    }
  };

  // Permanent Delete
  const permanentDelete = async () => {
    setShowDeleteModal(false);
    setIsProcessing(true);
    setError(null);

    try {
      const response = await axiosInstance.delete(
        `/admin/permanent-delete/${selectedItems[0]}`,
        { withCredentials: true }
      );

      if (response.data.success) {
        setSelectedItems([]);
        setSuccessMessage(response.data.message);
        setActionSuccess(true);
        await fetchDeletedItems(); 
      } else {
        setError(response.data.message || "Deletion failed.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error deleting items.");
    } finally {
      setIsProcessing(false);
      setTimeout(() => {
        setActionSuccess(false);
        setError(null);
      }, 3000);
    }
  };

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 500 }
    },
    exit: { opacity: 0, scale: 0.95 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 relative">
      {/* Success Notification */}
      <AnimatePresence>
        {actionSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-center">
              <Lottie animationData={successAnimation} loop={false} className="h-8 w-8" />
              <span className="ml-2">{successMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Notification */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-center">
              <span>{error}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Restore Confirmation */}
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
                      <h3 className="text-xl font-bold text-gray-800">Confirm Restoration</h3>
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
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={restoreItems}
                      disabled={isProcessing}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                    >
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10"
                              stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 
                                  0 12h4zm2 5.291A7.962 7.962 0 
                                  014 12H0c0 3.042 1.135 5.824 
                                  3 7.938l3-2.647z"/>
                          </svg>
                          Restoring...
                        </>
                      ) : (
                        <>
                          <FiRefreshCw className="mr-2" />
                          Confirm Restore
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Delete Confirmation */}
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
                    <Lottie animationData={deleteAnimation} loop={false} className="h-24 w-24" />
                    <h3 className="text-xl font-bold text-gray-800 mt-4">Permanent Deletion</h3>
                    <p className="text-gray-600 mt-2">
                      This action cannot be undone. {selectedItems.length} item(s) will be permanently deleted.
                    </p>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={permanentDelete}
                      disabled={isProcessing}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center"
                    >
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10"
                              stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 
                                  0 12h4zm2 5.291A7.962 7.962 0 
                                  014 12H0c0 3.042 1.135 5.824 
                                  3 7.938l3-2.647z"/>
                          </svg>
                          Deleting...
                        </>
                      ) : (
                        <>
                          <FiTrash2 className="mr-2" />
                          Delete Permanently
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Header and Action Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Recently Deleted</h1>
            <p className="text-gray-600">Items deleted in the last 30 days</p>
          </div>

          {deletedItems.length > 0 && (
            <div className="flex items-center gap-4">
              {selectedItems.length > 0 ? (
                <>
                  <span className="text-sm text-gray-600">
                    {selectedItems.length} selected
                  </span>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setShowRestoreModal(true)}
                      className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <FiRefreshCw className="mr-2" />
                      Restore
                    </button>
                    <button
                      onClick={() => setShowDeleteModal(true)}
                      className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      <FiTrash2 className="mr-2" />
                      Delete
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={selectAllItems}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Select all
                </button>
              )}
            </div>
          )}
        </div>

        {/* Content Area */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : deletedItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-sm"
          >
            <Lottie animationData={emptyTrashAnimation} loop={true} className="h-48 w-48" />
            <h3 className="text-lg font-medium text-gray-700 mt-4">No deleted items</h3>
            <p className="text-gray-500 mt-2 text-center max-w-md px-4">
              Items you delete will appear here for 30 days
            </p>
          </motion.div>
        ) : (
          <motion.div initial="hidden" animate="visible" className="grid gap-4">
            {deletedItems.map((item) => (
              <motion.div
                key={item._id}
                variants={itemVariants}
                className={`bg-white rounded-xl shadow-sm overflow-hidden border-l-4 ${selectedItems.includes(item._id) ? 'border-blue-500' : 'border-transparent'
                  } transition-all`}
              >
                <div className="p-5 flex items-start">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item._id)}
                    onChange={() => toggleSelectItem(item._id)}
                    className="mt-1 h-5 w-5 text-blue-600 rounded cursor-pointer"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                          <FiUser className="mr-2 text-blue-500" />
                          {item.fullName || 'No name provided'}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-4 text-sm">
                          {item.place && (
                            <div className="flex items-center text-gray-600">
                              <FiMapPin className="mr-2 text-green-500" />
                              {item.place}
                            </div>
                          )}
                          {item.phoneNumber && (
                            <div className="flex items-center text-gray-600">
                              <FiPhone className="mr-2 text-purple-500" />
                              {item.phoneNumber}
                            </div>
                          )}
                          {item.age && (
                            <div className="flex items-center text-gray-600">
                              <span className="mr-2">Age:</span>
                              {item.age}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FiClock className="mr-1" />
                        {new Date(item.deletedAt).toLocaleDateString()}
                      </div>
                    </div>

                    {(item.goal || item.duration) && (
                      <div className="mt-3 pt-3 border-t border-gray-100 text-sm">
                        {item.goal && (
                          <p className="text-gray-700">
                            <span className="font-medium">Goal:</span> {item.goal}
                          </p>
                        )}
                        {item.duration && (
                          <p className="text-gray-700">
                            <span className="font-medium">Duration:</span> {item.duration} month(s)
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RecentlyDeleted;
