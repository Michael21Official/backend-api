const express = require('express');
const router = express.Router();

const {
  addNotification,
  getNotificationById,
  markNotificationAsRead,
  getAllNotificationsByUserId,
} = require('../../api/notifications/notificationsApi'); // Import funkcji z pliku notificationsApi.js

// Trasy związane z powiadomieniami
router.post('/', async (req, res) => {
  // Dodawanie nowego powiadomienia
  try {
    await addNotification(
      req.body.userId,
      req.body.type,
      req.body.relatedId,
      req.body.likedPostId,
      req.body.dislikedPostId,
      req.body.likedCommentId,
      req.body.dislikedCommentId,
      req.body.isRead
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:notificationId', async (req, res) => {
  // Pobieranie konkretnego powiadomienia
  try {
    const notification = await getNotificationById(req.params.notificationId);
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:notificationId/mark-as-read', async (req, res) => {
  // Oznaczanie powiadomienia jako przeczytanego
  try {
    await markNotificationAsRead(req.params.notificationId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  // Pobieranie wszystkich powiadomień danego użytkownika
  try {
    const notifications = await getAllNotificationsByUserId(req.params.userId);
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
