const { Router } = require('express');
const router = Router();

router.post('/signup', (req, res) => {
    const { email, name, password } = req.body;
    res.send({ status: 200, message: 'Signup successful' })
})

router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    res.send({ status: 200, message: 'Signin successful' })
})

router.post('/courses', (req, res) => {
    const { name, description, price } = req.body;
    res.send({ status: 200, message: 'Course created successfully' })
})

router.put('/courses/:id', (req, res) => {
    const { name, description, price } = req.body;
    res.send({ status: 200, message: 'Course updated successfully' })
})

router.delete('/courses/:id', (req, res) => {
    const { name, description, price } = req.body;
    res.send({ status: 200, message: 'Course deleted successfully' })
})

router.get('/courses/:id', (req, res) => {
    const { id } = req.params;
    res.send({ status: 200, message: 'Course fetched successfully' })
})

router.get('/courses', (req, res) => {
    res.send({ status: 200, message: 'Courses fetched successfully' })
})

module.exports = router;