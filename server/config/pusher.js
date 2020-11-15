import mongoose from 'mongoose';
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: '1092469',
  key: '112ac0aaf066858a98b8',
  secret: '567eecb278a29ebb5370',
  cluster: 'ap2',
});

const dbPusher = () => {
  const db = mongoose.connection;
  db.once('open', () => {
    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
      if (change.operationType === 'insert') {
        const messageDetails = change.fullDocument;
        pusher.trigger('messages', 'inserted', {
          name: messageDetails.name,
          message: messageDetails.message,
          timestamp: new Date().toISOString(),
          received: messageDetails.received,
        });
      } else {
        console.log('Error triggering pusher');
      }
    });
  });
};

export default dbPusher;
