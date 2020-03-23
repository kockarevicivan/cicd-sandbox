const express = require('express');
const functions = require('./functions');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello Vega!'));

app.get('/add', (req, res) => {
    const first = +req.query.first;
    const second = +req.query.second;

    if (!first || !second) res.send('Query parameters "first" and "second" are expected.'); 

    res.send(
        'Answer:' + functions.addNumbers(first, second)
    );
});


app.listen(port, () => console.log(`App listening on http://localhost:${port}`))