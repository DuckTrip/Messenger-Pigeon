require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const mongoose = require('mongoose');

const { default: Blog } = require('./model/Blog.js');
const { default: Message } = require('.model/Message.js');

const io = new Server(server, {
  cors: {
    origin: ['https://messenger-pigeon-beta.vercel.app', 'http://localhost:5173']
  }
});

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);

async function dbCreate() {
  const article = await Blog.create({
    title: 'Awesome Post!',
    slug: 'awesome-post!',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });
  console.log('Created article', article);
}

// What happens when the Frontend socket is loaded
io.on('connection', (socket) => {
  console.log('a user connected');
});

// Where server is running
server.listen(3000, () => {
  console.log('listening on *:3000');
});
