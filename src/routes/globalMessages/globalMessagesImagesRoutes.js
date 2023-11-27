// globalMessagesImagesRoutes.js
const express = require('express');
const router = express.Router();

const {
  addGlobalMessageImage,
  getGlobalMessageImageByGlobalMessageId,
  updateGlobalMessageImage,
  deleteGlobalMessageImage,
} = require('../../api/globalMessages/globalMessagesImagesApi'); // Import funkcji z pliku globalMessagesImagesApi.js

// Trasy związane z obrazami globalnych wiadomości
router.post('/', async (req, res) => {
  // Dodawanie nowego obrazu globalnej wiadomości
  try {
    await addGlobalMessageImage(req.body.globalMessageId, req.body.imageData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:globalMessageId', async (req, res) => {
  // Pobieranie obrazu globalnej wiadomości o danym ID
  try {
    const globalMessageImage = await getGlobalMessageImageByGlobalMessageId(req.params.globalMessageId);
    res.json(globalMessageImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:globalMessageId', async (req, res) => {
  // Aktualizacja obrazu globalnej wiadomości
  try {
    await updateGlobalMessageImage(req.params.globalMessageId, req.body.newImageData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:globalMessageId', async (req, res) => {
  // Usuwanie obrazu globalnej wiadomości
  try {
    await deleteGlobalMessageImage(req.params.globalMessageId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
