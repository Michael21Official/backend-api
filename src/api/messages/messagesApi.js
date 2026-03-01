// messagesApi.js

const executeQuery = require('../../db.js');

const addMessage = async (userId, content, created_at) => {
  const query = 'INSERT INTO messages (user_id, content, created_at) VALUES (?, ?, ?)';
  const values = [userId, content, created_at];

  try {
    const result = await executeQuery(query, values);
    return result.insertId; // ID nowo utworzonej wiadomości
  } catch (error) {
    throw error;
  }
};

const getMessageById = async (messageId) => {
  const query = 'SELECT * FROM messages WHERE message_id = ?';
  const values = [messageId];

  try {
    const message = await executeQuery(query, values);
    return message[0];
  } catch (error) {
    throw error;
  }
};

const updateMessage = async (messageId, updatedData) => {
  const { content } = updatedData;

  const query = 'UPDATE messages SET content = ? WHERE message_id = ?';
  const values = [content, messageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const deleteMessage = async (messageId) => {
  const query = 'DELETE FROM messages WHERE message_id = ?';
  const values = [messageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

const getAllMessagesByUserId = async (userId) => {
  const query = 'SELECT * FROM messages WHERE user_id = ?';
  const values = [userId];

  try {
    const messages = await executeQuery(query, values);
    return messages;
  } catch (error) {
    throw error;
  }
};

// Dodatkowe funkcje związane z operacjami na wiadomościach...

module.exports = {
  addMessage,
  getMessageById,
  updateMessage,
  deleteMessage,
  getAllMessagesByUserId,
  // Dodatkowe eksportowane funkcje...
};
