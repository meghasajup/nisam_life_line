import cron from 'node-cron';
import { Details } from '../models/detailsModel.js';

// Configure cron job to run daily at midnight
cron.schedule('0 0 * * *', async () => {
  const jobStartTime = new Date();
  console.log(`⏰ Starting auto-delete job at ${jobStartTime.toISOString()}`);

  // Calculate cutoff date (30 days ago)
  const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
  const cutoffDate = new Date(Date.now() - THIRTY_DAYS_IN_MS);

  try {
    // Delete records that were soft-deleted more than 30 days ago
    const result = await Details.deleteMany({
      isDeleted: true,
      deletedAt: {
        $lte: cutoffDate,
        $exists: true  // Ensure deletedAt exists
      }
    });

    const jobEndTime = new Date();
    const duration = (jobEndTime - jobStartTime) / 1000;

    console.log(`✅ Auto-delete job completed in ${duration.toFixed(2)}s`);
    console.log(`🗑️  Permanently deleted ${result.deletedCount} records older than ${cutoffDate.toISOString()}`);

  } catch (error) {
    console.error('❌ Auto-delete job failed:', error.message);
    // You might want to add error reporting here (e.g., Sentry, email notification)
  }
}, {
  scheduled: true,
  timezone: "UTC"  // Explicitly set timezone to avoid surprises
});

console.log('🔄 Scheduled automatic deletion of old soft-deleted records (runs daily at 00:00 UTC)');