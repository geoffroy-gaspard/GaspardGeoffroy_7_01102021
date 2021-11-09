const express = require ('express');
const mysql = require('mysql');

const userRoutes = require('./routes/post');

const app = express();

app.use(express.json());

app.use('/api/groupomania', userRoutes);

const port = process.env.PORT || 3300;
app.listen(port, () => {
    console.log(`API Rest Groupomania listening on port ${port}`);
});