// globalMessagesImagesApi.js

const executeQuery = require('../../db');

const addGlobalMessageImage = async (globalMessageId, imageData) => {
  const query = 'INSERT INTO globalmessagesimages (global_message_id, image_data, created_at) VALUES (?, ?, NOW())';
  const values = [globalMessageId, imageData];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getGlobalMessageImageByGlobalMessageId = async (globalMessageId) => {
  const query = 'SELECT * FROM globalmessagesimages WHERE global_message_id = ?';
  const values = [globalMessageId];

  try {
    const globalMessageImage = await executeQuery(query, values);
    return globalMessageImage[0];
  } catch (error) {
    throw error;
  }
};

const updateGlobalMessageImage = async (globalMessageId, newImageData) => {
  const query = 'UPDATE globalmessagesimages SET image_data = ?, created_at = NOW() WHERE global_message_id = ?';
  const values = [newImageData, globalMessageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const deleteGlobalMessageImage = async (globalMessageId) => {
  const query = 'DELETE FROM globalmessagesimages WHERE global_message_id = ?';
  const values = [globalMessageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

// Dodatkowe funkcje związane z operacjami na obrazach globalnych wiadomości...

module.exports = {
  addGlobalMessageImage,
  getGlobalMessageImageByGlobalMessageId,
  updateGlobalMessageImage,
  deleteGlobalMessageImage,
};
