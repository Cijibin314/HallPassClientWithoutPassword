const express = require('express');

const app = express();

app.use(express());

app.get('/monitor', (req, res) => {
    res.status(200).send("This worked!");
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});