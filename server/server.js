import express from 'express';
import messagesRoute from './routes/api/messages.js';
import connectDB from './config/db.js';
import dbPusher from './config/pusher.js';
import cors from 'cors';

//app config
const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json({ extended: false }));
app.use(cors());

// DB config
connectDB();

// when message sent we watch the event
dbPusher();

app.use('/api/messages', messagesRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
