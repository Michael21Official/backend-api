// messagesImagesApi.js

const executeQuery = require('../../db.js');

const addMessageImage = async (messageId, imageData) => {
  const query = 'INSERT INTO messagesimages (message_id, image_data, created_at) VALUES (?, ?, NOW())';
  const values = [messageId, imageData];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getMessageImageByMessageId = async (messageId) => {
  const query = 'SELECT * FROM messagesimages WHERE message_id = ?';
  const values = [messageId];

  try {
    const messageImage = await executeQuery(query, values);
    return messageImage[0];
  } catch (error) {
    throw error;
  }
};

const updateMessageImage = async (messageId, newImageData) => {
  const query = 'UPDATE messagesimages SET image_data = ?, created_at = NOW() WHERE message_id = ?';
  const values = [newImageData, messageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const deleteMessageImage = async (messageId) => {
  const query = 'DELETE FROM messagesimages WHERE message_id = ?';
  const values = [messageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

// Dodatkowe funkcje związane z operacjami na obrazach wiadomości...

module.exports = {
  addMessageImage,
  getMessageImageByMessageId,
  updateMessageImage,
  deleteMessageImage,
};
