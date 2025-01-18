const express = require('express');
const cors = require('cors');
const v1Router = require('./routers/v1/v1_router.js');

const app = express();
app.use(cors())

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`);
    next();
})

app.use('/api/v1', v1Router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
