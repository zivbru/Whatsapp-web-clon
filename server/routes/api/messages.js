import express from 'express';
import Messages from '../../models/message.js';
const router = express.Router();

router.get('/sync', (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).send(data);
  });
});

router.post('/new', (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).send(`New message created : \n ${data}`);
  });
});

export default router;
