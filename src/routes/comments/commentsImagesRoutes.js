// commentsImagesRoutes.js
const express = require('express');
const router = express.Router();

const {
  addCommentImage,
  getCommentImageByCommentId,
  updateCommentImage,
  deleteCommentImage,
} = require('../../api/comments/commentsImagesApi'); // Import funkcji z pliku commentsImagesApi.js

// Trasy związane z obrazami komentarzy
router.post('/', async (req, res) => {
  // Dodawanie nowego obrazu komentarza
  try {
    await addCommentImage(req.body.commentId, req.body.imageData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:commentId', async (req, res) => {
  // Pobieranie obrazu komentarza
  try {
    const commentImage = await getCommentImageByCommentId(req.params.commentId);
    res.json(commentImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:commentId', async (req, res) => {
  // Aktualizacja obrazu komentarza
  try {
    await updateCommentImage(req.params.commentId, req.body.newImageData);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:commentId', async (req, res) => {
  // Usuwanie obrazu komentarza
  try {
    await deleteCommentImage(req.params.commentId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
