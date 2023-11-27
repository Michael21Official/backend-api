// userApi.js

const executeQuery = require('../../db.js');

const createUser = async (
  username,
  email,
  password,
  account_created_at,
  scientific_interests,
  birth_year,
  university_name,
  faculty,
  field_of_study,
  degree_level,
  user_title,
  other_user_details
) => {
  const query = `
    INSERT INTO users (
      username,
      email,
      password,
      account_created_at,
      scientific_interests,
      birth_year,
      university_name,
      faculty,
      field_of_study,
      degree_level,
      user_title,
      other_user_details
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    username,
    email,
    password,
    account_created_at,
    scientific_interests,
    birth_year,
    university_name,
    faculty,
    field_of_study,
    degree_level,
    user_title,
    other_user_details,
  ];

  try {
    const result = await executeQuery(query, values);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  const query = 'SELECT * FROM users WHERE user_id = ?';
  const values = [userId];

  try {
    const user = await executeQuery(query, values);
    return user[0];
  } catch (error) {
    throw error;
  }
};

const updateUser = async (
  userId,
  updatedData
) => {
  const { 
    username,
    email,
    password,
    scientific_interests,
    birth_year,
    university_name,
    faculty,
    field_of_study,
    degree_level,
    user_title,
    other_user_details
  } = updatedData;

  const query = `
    UPDATE users
    SET
      username = ?,
      email = ?,
      password = ?,
      scientific_interests = ?,
      birth_year = ?,
      university_name = ?,
      faculty = ?,
      field_of_study = ?,
      degree_level = ?,
      user_title = ?,
      other_user_details = ?
    WHERE user_id = ?
  `;

  const values = [
    username,
    email,
    password,
    scientific_interests,
    birth_year,
    university_name,
    faculty,
    field_of_study,
    degree_level,
    user_title,
    other_user_details,
    userId,
  ];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId) => {
  const query = 'DELETE FROM users WHERE user_id = ?';
  const values = [userId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  const query = 'SELECT * FROM users';

  try {
    const users = await executeQuery(query);
    return users;
  } catch (error) {
    throw error;
  }
};

const updatePassword = async (userId, newPassword) => {
  const query = 'UPDATE users SET password = ? WHERE user_id = ?';
  const values = [newPassword, userId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getUserStats = async (userId) => {
  const query = 'SELECT * FROM user_stats WHERE user_id = ?';
  const values = [userId];

  try {
    const userStats = await executeQuery(query, values);
    return userStats[0];
  } catch (error) {
    throw error;
  }
};

const getUserPosts = async (userId) => {
  const query = 'SELECT * FROM posts WHERE user_id = ?';
  const values = [userId];

  try {
    const userPosts = await executeQuery(query, values);
    return userPosts;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  updatePassword,
  getUserStats,
  getUserPosts,
};
