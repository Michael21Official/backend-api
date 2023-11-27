// routes/api.js
const express = require('express');
const router = express.Router();
const commentsRoutes = require('./comments/commentsRoutes');
const commentsImagesRoutes = require('./comments/commentsImagesRoutes');
const globalMessagesRoutes = require('./globalMessages/globalMessagesRoutes');
const globalMessagesImagesRoutes = require('./globalMessages/globalMessagesImagesRoutes');
const messagesRoutes = require('./messages/messagesRoutes');
const messagesImagesRoutes = require('./messages/messagesImagesRoutes');
const notificationsRoutes = require('./notifications/notificationsRoutes');
const postsRoutes = require('./posts/postsRoutes');
const postImagesRoutes = require('./posts/postImagesRoutes');
const userRoutes = require('./user/userRoutes');
const avatarImagesRoutes = require('./user/avatarImagesRoutes');
const userStatsRoutes = require('./user/userStatsRoutes');

// Dodaj trasy z poszczególnych modułów
router.use('/comments', commentsRoutes);
router.use('/comments/images', commentsImagesRoutes);
router.use('/globalMessages', globalMessagesRoutes);
router.use('/globalMessages/images', globalMessagesImagesRoutes);
router.use('/messages', messagesRoutes);
router.use('/messages/images', messagesImagesRoutes);
router.use('/notifications', notificationsRoutes);
router.use('/posts', postsRoutes);
router.use('/posts/images', postImagesRoutes);
router.use('/user', userRoutes);
router.use('/user/avatarImages', avatarImagesRoutes);
router.use('/user/stats', userStatsRoutes);

module.exports = router;
