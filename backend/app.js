require('dotenv').config();
const http = require('node:http');
const express = require('express');
const socketIO = require('socket.io');
const path = require('node:path');

const serverConfig = require('./config/server.config');
const testDatabaseConnection = require('./src/testDatabaseConnection');

const authRouter = require('./routes/authRouter');
const userMoodrout = require('./routes/api/userMood');
const exercisesRouter = require('./routes/api/exercisesRouter');
const favoriteExercisesRouter = require('./routes/api/favoriteExerciseRouter');
const articlesRouter = require('./routes/api/articlesRouter');
const userLkRouter = require('./routes/api/userLkRouter');
const chatsRouter = require('./routes/api/chatsRouter');
const userDiaryRouter = require('./routes/api/userDiaryRouter');
const welcometestScoreRouter = require('./routes/api/welcomeTestScoreRouter');
const userrecomendationsstoreRouter = require('./routes/api/userrecomendationsstoreRouter');
const userEditRouter = require('./routes/api/userEditRouter');
const likesRouter = require('./routes/api/likesRouter');

const app = express();
const httpServer = http.createServer(app);
const wsServer = new socketIO.Server(httpServer);
const PORT = process.env.PORT ?? 4000;

serverConfig(app);

app.use('/api/lk', userLkRouter);
app.use('/api/auth', authRouter);
app.use('/api/mood', userMoodrout);
app.use('/api/exercises', exercisesRouter);
app.use('/api/allfavorite', favoriteExercisesRouter);
app.use('/api/articles', articlesRouter);
app.use('/api/chats', chatsRouter);
app.use('/api/userdiary', userDiaryRouter);
app.use('/api/welcometest', welcometestScoreRouter);
app.use('/api/userrecomendationsstore', userrecomendationsstoreRouter);
app.use('/api/useredit', userEditRouter);
app.use('/api/favoritearticles', likesRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

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
