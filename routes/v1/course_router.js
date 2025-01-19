const { Router } = require('express');
const router = Router();

router.get('/courses', (req, res) => {
    res.send({ status: 200, message: 'Courses fetched successfully' })
})

router.get('/courses/:id', (req, res) => {
    const { id } = req.params;
    res.send({ status: 200, message: 'Course fetched successfully', data: { id } })
})

router.get('/courses/:id/purchase', (req, res) => {
    const { id } = req.params;
    res.send({ status: 200, message: 'Course purchased successfully', data: { id } })
})

module.exports = router;