const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authMiddleware.js');
const authRouter = require('../auth/authRouter.js');
const userRouter = require('../users/userRouter.js');
const journalRouter = require('../journal/journalRouter.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, userRouter);
server.use('/api/journal', authenticate, journalRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});  

module.exports = server;