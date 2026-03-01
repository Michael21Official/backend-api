// commentsImagesApi.js

const executeQuery = require('../../db');

const addCommentImage = async (commentId, imageData) => {
  const query = 'INSERT INTO commentsimages (comment_id, image_data, created_at) VALUES (?, ?, NOW())';
  const values = [commentId, imageData];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getCommentImageByCommentId = async (commentId) => {
  const query = 'SELECT * FROM commentsimages WHERE comment_id = ?';
  const values = [commentId];

  try {
    const commentImage = await executeQuery(query, values);
    return commentImage[0];
  } catch (error) {
    throw error;
  }
};

const updateCommentImage = async (commentId, newImageData) => {
  const query = 'UPDATE commentsimages SET image_data = ?, created_at = NOW() WHERE comment_id = ?';
  const values = [newImageData, commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const deleteCommentImage = async (commentId) => {
  const query = 'DELETE FROM commentsimages WHERE comment_id = ?';
  const values = [commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

// Dodatkowe funkcje związane z operacjami na obrazach komentarzy...

module.exports = {
  addCommentImage,
  getCommentImageByCommentId,
  updateCommentImage,
  deleteCommentImage,
  // Dodatkowe funkcje związane z operacjami na obrazach komentarzy...
};
