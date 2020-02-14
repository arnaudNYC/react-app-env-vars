const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

const { API_URL } = process.env;

app.set('views', path.join(__dirname, '../frontend/build'));
app.engine('html', require('ejs').renderFile);

app.use(
  '/static',
  express.static(path.join(__dirname, '../frontend/build/static')),
);

app.get('/', (req, res) => {
  res.render('index.html', { API_URL });
});

app.listen(port, () => console.log(`🏃‍♂️ on port ${port}!`));
