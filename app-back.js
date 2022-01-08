const express = require('express');
const path = require('path');

const app = express();

const publicDirectoryPath = path.join(__dirname,  '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

const port = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.render('index');
});

app.get('/test', (req, res) => {
    res.render('<h1>Test</h1>');
})

app.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log('Open on port ' + url);
});