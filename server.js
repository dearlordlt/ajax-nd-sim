const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/ajax-nds'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/ajax-nds/' }),
);

app.listen(process.env.PORT || 8080);