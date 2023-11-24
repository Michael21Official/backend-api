// notificationsApi.js

const executeQuery = require('../../db.js');

const addNotification = async (
  userId,
  type,
  relatedId,
  likedPostId,
  dislikedPostId,
  likedCommentId,
  dislikedCommentId,
  isRead
) => {
  const query = `
    INSERT INTO notifications (
      user_id,
      type,
      related_id,
      liked_post_id,
      disliked_post_id,
      liked_comment_id,
      disliked_comment_id,
      is_read,
      created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
  `;

  const values = [userId, type, relatedId, likedPostId, dislikedPostId, likedCommentId, dislikedCommentId, isRead];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getNotificationById = async (notificationId) => {
  const query = 'SELECT * FROM notifications WHERE notification_id = ?';
  const values = [notificationId];

  try {
    const notification = await executeQuery(query, values);
    return notification[0];
  } catch (error) {
    throw error;
  }
};

const markNotificationAsRead = async (notificationId) => {
  const query = 'UPDATE notifications SET is_read = true WHERE notification_id = ?';
  const values = [notificationId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getAllNotificationsByUserId = async (userId) => {
  const query = 'SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC';
  const values = [userId];

  try {
    const notifications = await executeQuery(query, values);
    return notifications;
  } catch (error) {
    throw error;
  }
};

// Dodatkowe funkcje związane z operacjami na powiadomieniach...

module.exports = {
  addNotification,
  getNotificationById,
  markNotificationAsRead,
  getAllNotificationsByUserId,
  // Dodatkowe funkcje związane z operacjami na powiadomieniach...
};
