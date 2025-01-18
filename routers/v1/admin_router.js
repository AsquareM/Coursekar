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

module.exports = router;