const { Router } = require('express');
const router = Router();

// Routers
const userRouter = require('./user_router.js');
const adminRouter = require('./admin_router.js');
const courseRouter = require('./course_router.js');

// Routes
router.use('/user', userRouter);
router.use('/admin', adminRouter);
router.use('/course', courseRouter);

module.exports = router;