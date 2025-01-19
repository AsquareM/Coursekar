const { Router } = require('express');
const router = Router();

router.get('/signup', (req, res) => {
    const { email, name, password } = req.body;
    res.send({ status: 200, message: 'Signup successful' })
})

router.get('/signin', (req, res) => {
    const { email, password } = req.body;
    res.send({ status: 200, message: 'Signin successful' })
})

router.get('/my_courses', (req, res) => {
    const { email } = req.body;
    res.send({ status: 200, message: 'My courses fetched successfully', data: { id } })
})

module.exports = router;