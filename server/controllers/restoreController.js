import asyncHandler from 'express-async-handler';
import { Details } from '../models/detailsModel.js';

export const restoreMultipleItems = asyncHandler(async (req, res) => {
  const { ids } = req.body;

  // Validation
  if (!ids || !Array.isArray(ids)) {
    return res.status(400).json({
      success: false,
      message: "Please provide an array of IDs to restore"
    });
  }

  if (ids.length === 0) {
    return res.status(400).json({
      success: false,
      message: "No IDs provided for restoration"
    });
  }

  try {
    // Restore all matching documents that are currently deleted
    const result = await Details.updateMany(
      {
        _id: { $in: ids },
        isDeleted: true
      },
      {
        $set: { isDeleted: false },
        $unset: { deletedAt: 1 }
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "No deleted items found to restore"
      });
    }

    res.status(200).json({
      success: true,
      message: `${result.modifiedCount} item(s) restored successfully`,
      restoredCount: result.modifiedCount,
      data: result
    });

  } catch (error) {
    console.error('Error restoring items:', error);
    res.status(500).json({
      success: false,
      message: "Server error during restoration",
      error: error.message
    });
  }
});
