// userStatsRoutes.js
const express = require('express');
const router = express.Router();

const {
  createUserStats,
  getUserStatsById,
  updateUserStats,
  deleteUserStats,
} = require('../../api/user/userStatsApi'); // Import funkcji z pliku userStatsApi.js

// Trasy związane ze statystykami użytkowników
router.post('/', async (req, res) => {
  // Dodawanie nowych statystyk użytkownika
  try {
    await createUserStats(
      req.body.userId,
      req.body.account_created_at,
      req.body.scientific_interests,
      req.body.other_user_stats_details
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:userId', async (req, res) => {
  // Pobieranie statystyk użytkownika
  try {
    const userStats = await getUserStatsById(req.params.userId);
    res.json(userStats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:userId', async (req, res) => {
  // Aktualizacja statystyk użytkownika
  try {
    await updateUserStats(req.params.userId, req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:userId', async (req, res) => {
  // Usuwanie statystyk użytkownika
  try {
    await deleteUserStats(req.params.userId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
