// This is our Processing layer
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const mongoose = require('mongoose');

const { default: Blog } = require('./model/Blog.js');
const { default: Message } = require('./model/Message.js');

const corsOptions = {
  origin: ['https://messenger-pigeon-beta.vercel.app', 'http://localhost:5173']
}

app.use(cors(corsOptions));

// Start our socket.io server
const io = new Server(server, {
  cors: corsOptions
});

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);

// Example from MongoDB tutorial
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

// Creating message from our Message schema
async function createMessage() {
  const savedMessage = await Message.create({
    sender: 'Person 1',
    text: "I don't forgive you",
    attachment: null,
  });
  console.log('Message Saved', savedMessage);
};


// What happens when the Frontend socket is loaded
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('sendMessage', async (args) => {
    console.log(args);
  });
});

// Where server is running eg: localport 3000
server.listen(3000, () => {
  console.log('listening on *:3000');
});
