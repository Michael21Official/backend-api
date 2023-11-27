// messagesImagesRoutes.js
const express = require('express');
const router = express.Router();
const messagesImagesApi = require('../../api/messages/messagesImagesApi'); // Import funkcji z pliku messagesImagesApi.js

// Trasy związane z obrazami wiadomości
router.post('/', async (req, res) => {
  // Dodawanie nowego obrazu wiadomości
  try {
    await messagesImagesApi.addMessageImage(req.body.messageId, req.body.imageData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:messageId', async (req, res) => {
  // Pobieranie obrazu wiadomości o danym ID wiadomości
  try {
    const messageImage = await messagesImagesApi.getMessageImageByMessageId(req.params.messageId);
    res.json(messageImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:messageId', async (req, res) => {
  // Aktualizacja obrazu wiadomości
  try {
    await messagesImagesApi.updateMessageImage(req.params.messageId, req.body.newImageData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:messageId', async (req, res) => {
  // Usuwanie obrazu wiadomości
  try {
    await messagesImagesApi.deleteMessageImage(req.params.messageId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
