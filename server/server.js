const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.static(__dirname + '/../client/'));
app.use(cors());
app.listen(3000, () => {
  console.log('listening on 3000');
});
