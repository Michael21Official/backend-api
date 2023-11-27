const express = require('express');
const router = express.Router();

const {
  addGlobalMessage,
  getGlobalMessageById,
  updateGlobalMessage,
  deleteGlobalMessage,
  getAllGlobalMessages,
  addGlobalMessageImage,
  getGlobalMessageImageByGlobalMessageId,
  updateGlobalMessageImage,
  deleteGlobalMessageImage,
} = require('../../api/globalMessages/globalMessagesApi'); // Import funkcji z pliku globalMessagesApi.js

// Trasy związane z globalnymi wiadomościami
router.post('/', async (req, res) => {
  // Dodawanie nowej globalnej wiadomości
  try {
    const globalMessageId = await addGlobalMessage(req.body.content, req.body.created_at);
    res.json({ globalMessageId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:globalMessageId', async (req, res) => {
  // Pobieranie konkretnej globalnej wiadomości
  try {
    const globalMessage = await getGlobalMessageById(req.params.globalMessageId);
    res.json(globalMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:globalMessageId', async (req, res) => {
  // Aktualizacja globalnej wiadomości
  try {
    await updateGlobalMessage(req.params.globalMessageId, req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:globalMessageId', async (req, res) => {
  // Usuwanie globalnej wiadomości
  try {
    await deleteGlobalMessage(req.params.globalMessageId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  // Pobieranie wszystkich globalnych wiadomości
  try {
    const globalMessages = await getAllGlobalMessages();
    res.json(globalMessages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Trasy związane z obrazami globalnych wiadomości
router.post('/:globalMessageId/images', async (req, res) => {
  // Dodawanie obrazu do globalnej wiadomości
  try {
    await addGlobalMessageImage(req.params.globalMessageId, req.body.imageData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:globalMessageId/images', async (req, res) => {
  // Pobieranie obrazu związanej z globalną wiadomością
  try {
    const globalMessageImage = await getGlobalMessageImageByGlobalMessageId(req.params.globalMessageId);
    res.json(globalMessageImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:globalMessageId/images', async (req, res) => {
  // Aktualizacja obrazu związanej z globalną wiadomością
  try {
    await updateGlobalMessageImage(req.params.globalMessageId, req.body.newImageData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:globalMessageId/images', async (req, res) => {
  // Usuwanie obrazu związanej z globalną wiadomością
  try {
    await deleteGlobalMessageImage(req.params.globalMessageId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
