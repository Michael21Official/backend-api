// postImagesRoutes.js
const express = require('express');
const router = express.Router();

const {
  addPostImage,
  getPostImageById,
  getPostImagesByPostId,
  updatePostImage,
  deletePostImage,
} = require('../../api/posts/postImagesApi'); // Import funkcji z pliku postImagesApi.js

// Trasy związane z obrazami postów
router.post('/', async (req, res) => {
  // Dodawanie nowego obrazu posta
  try {
    const imageId = await addPostImage(req.body.postId, req.body.image_data, req.body.created_at);
    res.json({ imageId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:imageId', async (req, res) => {
  // Pobieranie konkretnego obrazu posta
  try {
    const postImage = await getPostImageById(req.params.imageId);
    res.json(postImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/post/:postId', async (req, res) => {
  // Pobieranie wszystkich obrazów danego posta
  try {
    const postImages = await getPostImagesByPostId(req.params.postId);
    res.json(postImages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:imageId', async (req, res) => {
  // Aktualizacja obrazu posta
  try {
    await updatePostImage(req.params.imageId, req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:imageId', async (req, res) => {
  // Usuwanie obrazu posta
  try {
    await deletePostImage(req.params.imageId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
