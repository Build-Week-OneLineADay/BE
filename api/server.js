const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/authRouter.js');
const userRouter = require('../users/userRouter.js');
const postRouter = require('../posts/postRouter.js');

const authenticate = require('../auth/authMiddleware.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);//login and register
server.use('/api/users', authenticate, userRouter);
server.use('/api/journal', authenticate, postRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});  

module.exports = server;