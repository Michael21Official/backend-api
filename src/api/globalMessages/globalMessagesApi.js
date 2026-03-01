// globalMessagesApi.js

const executeQuery = require('../../db');

const addGlobalMessage = async (content, created_at) => {
  const query = 'INSERT INTO globalmessages (content, created_at) VALUES (?, ?)';
  const values = [content, created_at];

  try {
    const result = await executeQuery(query, values);
    return result.insertId; // ID nowo utworzonej globalnej wiadomości
  } catch (error) {
    throw error;
  }
};

const getGlobalMessageById = async (globalMessageId) => {
  const query = 'SELECT * FROM globalmessages WHERE global_message_id = ?';
  const values = [globalMessageId];

  try {
    const globalMessage = await executeQuery(query, values);
    return globalMessage[0];
  } catch (error) {
    throw error;
  }
};

const updateGlobalMessage = async (globalMessageId, updatedData) => {
  const { content, created_at } = updatedData;

  const query = `
    UPDATE globalmessages
    SET
      content = ?,
      created_at = ?
    WHERE global_message_id = ?
  `;

  const values = [content, created_at, globalMessageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const deleteGlobalMessage = async (globalMessageId) => {
  const query = 'DELETE FROM globalmessages WHERE global_message_id = ?';
  const values = [globalMessageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getAllGlobalMessages = async () => {
  const query = 'SELECT * FROM globalmessages';

  try {
    const globalMessages = await executeQuery(query);
    return globalMessages;
  } catch (error) {
    throw error;
  }
};

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

// Dodatkowe funkcje związane z operacjami na globalnych wiadomościach...

module.exports = {
  addGlobalMessage,
  getGlobalMessageById,
  updateGlobalMessage,
  deleteGlobalMessage,
  getAllGlobalMessages,
  addGlobalMessageImage,
  getGlobalMessageImageByGlobalMessageId,
  updateGlobalMessageImage,
  deleteGlobalMessageImage,
};
