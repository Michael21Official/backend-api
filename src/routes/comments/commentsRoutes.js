// commentsRoutes.js
const express = require('express');
const router = express.Router();

const {
  addComment,
  getCommentById,
  updateComment,
  deleteComment,
  getAllCommentsByPostId,
  getCommentLikes,
  likeComment,
  unlikeComment,
  getCommentDislikes,
  dislikeComment,
  undislikeComment,
} = require('../../api/comments/commentsApi'); // Import funkcji z pliku commentsApi.js

// Trasy związane z komentarzami
router.post('/', async (req, res) => {
  // Dodawanie nowego komentarza
  try {
    const commentId = await addComment(
      req.body.userId,
      req.body.postId,
      req.body.content,
      req.body.created_at,
      req.body.likes_count,
      req.body.dislikes_count,
      req.body.other_comment_details
    );
    res.json({ commentId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:commentId', async (req, res) => {
  // Pobieranie konkretnego komentarza
  try {
    const comment = await getCommentById(req.params.commentId);
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:commentId', async (req, res) => {
  // Aktualizacja komentarza
  try {
    await updateComment(req.params.commentId, req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:commentId', async (req, res) => {
  // Usuwanie komentarza
  try {
    await deleteComment(req.params.commentId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/post/:postId', async (req, res) => {
  // Pobieranie wszystkich komentarzy do danego posta
  try {
    const comments = await getAllCommentsByPostId(req.params.postId);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:commentId/likes', async (req, res) => {
  // Pobieranie liczby polubień dla komentarza
  try {
    const likesCount = await getCommentLikes(req.params.commentId);
    res.json({ likesCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:commentId/like', async (req, res) => {
  // Polubienie komentarza
  try {
    await likeComment(req.params.commentId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:commentId/unlike', async (req, res) => {
  // Odlubienie komentarza
  try {
    await unlikeComment(req.params.commentId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:commentId/dislikes', async (req, res) => {
  // Pobieranie liczby niepolubień dla komentarza
  try {
    const dislikesCount = await getCommentDislikes(req.params.commentId);
    res.json({ dislikesCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:commentId/dislike', async (req, res) => {
  // Niepolubienie komentarza
  try {
    await dislikeComment(req.params.commentId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:commentId/undislike', async (req, res) => {
  // Odniepolubienie komentarza
  try {
    await undislikeComment(req.params.commentId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
