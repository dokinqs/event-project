const apiRouter = require('express').Router();

const eventRouter = require('./eventRouter');
const authRouter = require('./authRouter');

apiRouter.use('/events', eventRouter);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;
