// messagesRoutes.js
const express = require('express');
const router = express.Router();
const messagesApi = require('../../api/messages/messagesApi'); // Import funkcji z pliku messagesApi.js

// Trasy związane z wiadomościami
router.post('/', async (req, res) => {
  // Dodawanie nowej wiadomości
  try {
    const userId = req.body.userId;
    const content = req.body.content;
    const created_at = req.body.created_at; // Zakładam, że tę wartość przekazujesz w żądaniu
    const messageId = await messagesApi.addMessage(userId, content, created_at);
    res.json({ messageId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:messageId', async (req, res) => {
  // Pobieranie konkretnej wiadomości
  try {
    const message = await messagesApi.getMessageById(req.params.messageId);
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:messageId', async (req, res) => {
  // Aktualizacja wiadomości
  try {
    const messageId = req.params.messageId;
    const updatedData = req.body; // Przyjmuję, że przekazujesz dane do aktualizacji w formie obiektu
    await messagesApi.updateMessage(messageId, updatedData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:messageId', async (req, res) => {
  // Usuwanie wiadomości
  try {
    await messagesApi.deleteMessage(req.params.messageId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  // Pobieranie wszystkich wiadomości danego użytkownika
  try {
    const userId = req.params.userId;
    const messages = await messagesApi.getAllMessagesByUserId(userId);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
