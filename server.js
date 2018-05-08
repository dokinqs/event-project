const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const authController = require('./controller/authController');
const apiRouter = require('./routes/apiRouter');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(authController.recieveToken);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
