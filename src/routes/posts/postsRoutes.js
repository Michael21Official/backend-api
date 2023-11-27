// postsRoutes.js
const express = require('express');
const router = express.Router();

const {
  addPost,
  getPostById,
  updatePost,
  deletePost,
  getAllPostsByUserId,
} = require('../../api/posts/postsApi'); // Import funkcji z pliku postsApi.js

// Trasy związane z postami
router.post('/', async (req, res) => {
  // Dodawanie nowego posta
  try {
    const postId = await addPost(
      req.body.userId,
      req.body.content,
      req.body.created_at,
      req.body.status,
      req.body.visitors_count,
      req.body.views_count,
      req.body.category,
      req.body.title,
      req.body.other_post_details
    );
    res.json({ postId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:postId', async (req, res) => {
  // Pobieranie konkretnego posta
  try {
    const post = await getPostById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:postId', async (req, res) => {
  // Aktualizacja posta
  try {
    await updatePost(req.params.postId, req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:postId', async (req, res) => {
  // Usuwanie posta
  try {
    await deletePost(req.params.postId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  // Pobieranie wszystkich postów danego użytkownika
  try {
    const posts = await getAllPostsByUserId(req.params.userId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
