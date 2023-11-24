// postsApi.js

const executeQuery = require('../../db.js');

const addPost = async (
  userId,
  content,
  created_at,
  status,
  visitors_count,
  views_count,
  category,
  title,
  other_post_details
) => {
  const query = `
    INSERT INTO posts (
      user_id,
      content,
      created_at,
      status,
      visitors_count,
      views_count,
      category,
      title,
      other_post_details
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [userId, content, created_at, status, visitors_count, views_count, category, title, other_post_details];

  try {
    const result = await executeQuery(query, values);
    return result.insertId; // ID nowo utworzonego posta
  } catch (error) {
    throw error;
  }
};

const getPostById = async (postId) => {
  const query = 'SELECT * FROM posts WHERE post_id = ?';
  const values = [postId];

  try {
    const post = await executeQuery(query, values);
    return post[0];
  } catch (error) {
    throw error;
  }
};

const updatePost = async (postId, updatedData) => {
  const { content, status, visitors_count, views_count, category, title, other_post_details } = updatedData;

  const query = `
    UPDATE posts
    SET
      content = ?,
      status = ?,
      visitors_count = ?,
      views_count = ?,
      category = ?,
      title = ?,
      other_post_details = ?
    WHERE post_id = ?
  `;

  const values = [content, status, visitors_count, views_count, category, title, other_post_details, postId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const deletePost = async (postId) => {
  const query = 'DELETE FROM posts WHERE post_id = ?';
  const values = [postId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getAllPostsByUserId = async (userId) => {
  const query = 'SELECT * FROM posts WHERE user_id = ?';
  const values = [userId];

  try {
    const posts = await executeQuery(query, values);
    return posts;
  } catch (error) {
    throw error;
  }
};

// Inne funkcje związane z operacjami na postach...

module.exports = {
  addPost,
  getPostById,
  updatePost,
  deletePost,
  getAllPostsByUserId,
};
