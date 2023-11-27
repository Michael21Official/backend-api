// commentsApi.js

const executeQuery = require('../../db');

const addComment = async (
  userId,
  postId,
  content,
  created_at,
  likes_count,
  dislikes_count,
  other_comment_details
) => {
  const query = `
    INSERT INTO comments (
      user_id,
      post_id,
      content,
      created_at,
      likes_count,
      dislikes_count,
      other_comment_details
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    userId,
    postId,
    content,
    created_at,
    likes_count,
    dislikes_count,
    other_comment_details,
  ];

  try {
    const result = await executeQuery(query, values);
    return result.insertId; // ID nowo utworzonego komentarza
  } catch (error) {
    throw error;
  }
};

const getCommentById = async (commentId) => {
  const query = 'SELECT * FROM comments WHERE comment_id = ?';
  const values = [commentId];

  try {
    const comment = await executeQuery(query, values);
    return comment[0];
  } catch (error) {
    throw error;
  }
};

const updateComment = async (commentId, updatedData) => {
  const { content, likes_count, dislikes_count, other_comment_details } = updatedData;

  const query = `
    UPDATE comments
    SET
      content = ?,
      likes_count = ?,
      dislikes_count = ?,
      other_comment_details = ?
    WHERE comment_id = ?
  `;

  const values = [content, likes_count, dislikes_count, other_comment_details, commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const deleteComment = async (commentId) => {
  const query = 'DELETE FROM comments WHERE comment_id = ?';
  const values = [commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getAllCommentsByPostId = async (postId) => {
  const query = 'SELECT * FROM comments WHERE post_id = ?';
  const values = [postId];

  try {
    const comments = await executeQuery(query, values);
    return comments;
  } catch (error) {
    throw error;
  }
};

const getCommentLikes = async (commentId) => {
  const query = 'SELECT likes_count FROM comments WHERE comment_id = ?';
  const values = [commentId];

  try {
    const result = await executeQuery(query, values);
    return result[0]?.likes_count || 0;
  } catch (error) {
    throw error;
  }
};

const likeComment = async (commentId) => {
  const query = 'UPDATE comments SET likes_count = likes_count + 1 WHERE comment_id = ?';
  const values = [commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const unlikeComment = async (commentId) => {
  const query = 'UPDATE comments SET likes_count = likes_count - 1 WHERE comment_id = ?';
  const values = [commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getCommentDislikes = async (commentId) => {
  const query = 'SELECT dislikes_count FROM comments WHERE comment_id = ?';
  const values = [commentId];

  try {
    const result = await executeQuery(query, values);
    return result[0]?.dislikes_count || 0;
  } catch (error) {
    throw error;
  }
};

const dislikeComment = async (commentId) => {
  const query = 'UPDATE comments SET dislikes_count = dislikes_count + 1 WHERE comment_id = ?';
  const values = [commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const undislikeComment = async (commentId) => {
  const query = 'UPDATE comments SET dislikes_count = dislikes_count - 1 WHERE comment_id = ?';
  const values = [commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

// inne funkcje związane z operacjami na komentarzach...

module.exports = {
  addComment,
  getCommentById,
  updateComment,
  deleteComment,
  getAllCommentsByPostId,
  getCommentLikes,
  likeComment,
  unlikeComment,
  getCommentDislikes,
  dislikeComment,
  undislikeComment,
  // inne eksportowane funkcje...
};
