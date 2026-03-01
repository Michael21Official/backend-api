// avatarImagesRoutes.js
const express = require('express');
const router = express.Router();

const {
  addAvatarImage,
  getAvatarImageByUserId,
  updateAvatarImage,
  deleteAvatarImage,
} = require('../../api/user/avatarImagesApi'); // Import funkcji z pliku avatarImagesApi.js

// Trasy związane z obrazami avatarów
router.post('/', async (req, res) => {
  // Dodawanie nowego obrazu avataru
  try {
    await addAvatarImage(req.body.userId, req.body.imageData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:userId', async (req, res) => {
  // Pobieranie obrazu avataru danego użytkownika
  try {
    const avatarImage = await getAvatarImageByUserId(req.params.userId);
    res.json(avatarImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:userId', async (req, res) => {
  // Aktualizacja obrazu avataru
  try {
    await updateAvatarImage(req.params.userId, req.body.newImageData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:userId', async (req, res) => {
  // Usuwanie obrazu avataru
  try {
    await deleteAvatarImage(req.params.userId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
