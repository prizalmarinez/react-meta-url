const express = require('express');
const path = require('path')
const urlMetadata = require('url-metadata')

const app = express();

app.get('/api/urlmetadata', (req, res) => {
  console.log(req.query.id);
  const url = req.query.id;

  urlMetadata(url).then(
    function (metadata) { // success handler
      console.log(metadata)
      res.send(metadata);
    },
    function (error) { // failure handler
      console.log(error)
    })
})


// serve static in prod
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);