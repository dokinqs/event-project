const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const authController = require('./controller/authController');
const eventRouter = require('./routes/eventRouter');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(authController.receiveToken);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/event', eventRouter);
app.get('/hello', (req, res) => {
  res.json({'msg': 'hey'})
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
