require('dotenv').config();
const http = require('node:http');
const express = require('express');
const socketIO = require('socket.io');

const serverConfig = require('./config/server.config');
const testDatabaseConnection = require('./src/testDatabaseConnection');

// const apiRouter = require('./routes/apiRouter');
const authRouter = require('./routes/authRouter');
const userMoodrout = require('./routes/api/userMood');
const exercisesRouter = require('./routes/api/exercisesRouter');
const articlesRouter = require('./routes/api/articlesRouter');
const chatsRouter = require('./routes/api/chatsRouter');

const app = express();
const httpServer = http.createServer(app);
const wsServer = new socketIO.Server(httpServer);
const PORT = process.env.PORT ?? 4000;

serverConfig(app);

// app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/mood', userMoodrout);
app.use('/exercises', exercisesRouter);
app.use('/articles', articlesRouter);
app.use('/chats', chatsRouter);

wsServer.on('connection', (socket) => {
  socket.on('chat:outgoing', (message) => {
    socket.emit('chat:outgoing:success', 'Сообщение принято, спасибо');
    socket.broadcast.emit('chat:incoming', message);
  });
});

httpServer.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on PORT: ${PORT}`);
  testDatabaseConnection();
});
