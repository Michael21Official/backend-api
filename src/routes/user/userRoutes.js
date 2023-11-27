const express = require('express');
const router = express.Router();

const {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  updatePassword,
  getUserStats,
  getUserPosts,
} = require('../../api/user/userApi'); // Import funkcji z pliku userApi.js

// Trasy związane z użytkownikami
router.post('/', async (req, res) => {
  // Dodawanie nowego użytkownika
  try {
    const userId = await createUser(
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.account_created_at,
      req.body.scientific_interests,
      req.body.birth_year,
      req.body.university_name,
      req.body.faculty,
      req.body.field_of_study,
      req.body.degree_level,
      req.body.user_title,
      req.body.other_user_details
    );
    res.json({ userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:userId', async (req, res) => {
  // Pobieranie konkretnego użytkownika
  try {
    const user = await getUserById(req.params.userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:userId', async (req, res) => {
  // Aktualizacja użytkownika
  try {
    await updateUser(req.params.userId, req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:userId', async (req, res) => {
  // Usuwanie użytkownika
  try {
    await deleteUser(req.params.userId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  // Pobieranie wszystkich użytkowników
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/update-password/:userId', async (req, res) => {
  // Aktualizacja hasła użytkownika
  try {
    await updatePassword(req.params.userId, req.body.newPassword);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/stats/:userId', async (req, res) => {
  // Pobieranie statystyk użytkownika
  try {
    const userStats = await getUserStats(req.params.userId);
    res.json(userStats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/posts/:userId', async (req, res) => {
  // Pobieranie postów użytkownika
  try {
    const userPosts = await getUserPosts(req.params.userId);
    res.json(userPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
