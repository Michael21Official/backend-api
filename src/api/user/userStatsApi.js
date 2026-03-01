// userStatsApi.js

const executeQuery = require('../../db.js');

const createUserStats = async (userId, account_created_at, scientific_interests, other_user_stats_details) => {
  const query = `
    INSERT INTO user_stats (
      user_id,
      posts_count,
      likes_count,
      comments_count,
      successful_posts_count,
      failed_posts_count,
      account_created_at,
      scientific_interests,
      other_user_stats_details
    ) VALUES (?, 0, 0, 0, 0, 0, ?, ?, ?)
  `;

  const values = [userId, account_created_at, scientific_interests, other_user_stats_details];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getUserStatsById = async (userId) => {
  const query = 'SELECT * FROM user_stats WHERE user_id = ?';
  const values = [userId];

  try {
    const userStats = await executeQuery(query, values);
    return userStats[0];
  } catch (error) {
    throw error;
  }
};

const updateUserStats = async (userId, updatedData) => {
  const {
    posts_count,
    likes_count,
    comments_count,
    successful_posts_count,
    failed_posts_count,
    account_created_at,
    scientific_interests,
    other_user_stats_details,
  } = updatedData;

  const query = `
    UPDATE user_stats
    SET
      posts_count = ?,
      likes_count = ?,
      comments_count = ?,
      successful_posts_count = ?,
      failed_posts_count = ?,
      account_created_at = ?,
      scientific_interests = ?,
      other_user_stats_details = ?
    WHERE user_id = ?
  `;

  const values = [
    posts_count,
    likes_count,
    comments_count,
    successful_posts_count,
    failed_posts_count,
    account_created_at,
    scientific_interests,
    other_user_stats_details,
    userId,
  ];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const deleteUserStats = async (userId) => {
  const query = 'DELETE FROM user_stats WHERE user_id = ?';
  const values = [userId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUserStats,
  getUserStatsById,
  updateUserStats,
  deleteUserStats,
};
