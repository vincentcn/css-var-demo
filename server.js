const express = require('express');
const app = express();

app.set('port', 8000);
app.use(express.static('app'));

const server = app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
