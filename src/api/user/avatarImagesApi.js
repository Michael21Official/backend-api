const executeQuery = require('../../db.js');

exports.addAvatarImage = async (userId, imageData) => {
  const query = 'INSERT INTO avatarimages (user_id, image_data, created_at) VALUES (?, ?, NOW())';
  const values = [userId, imageData];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

exports.getAvatarImageByUserId = async (userId) => {
  const query = 'SELECT * FROM avatarimages WHERE user_id = ?';
  const values = [userId];

  try {
    const avatarImage = await executeQuery(query, values);
    return avatarImage[0];
  } catch (error) {
    throw error;
  }
};

exports.updateAvatarImage = async (userId, newImageData) => {
  const query = 'UPDATE avatarimages SET image_data = ?, created_at = NOW() WHERE user_id = ?';
  const values = [newImageData, userId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

exports.deleteAvatarImage = async (userId) => {
  const query = 'DELETE FROM avatarimages WHERE user_id = ?';
  const values = [userId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};
