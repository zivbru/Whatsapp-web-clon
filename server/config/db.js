import mongoose from 'mongoose';

// move this to config file
const dbPassword = 'zivbru123';
const dbName = 'whatsappdb';

const connectionUrl = `mongodb+srv://zivbru:${dbPassword}@cluster0.xiuv0.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    await mongoose.connect(connectionUrl, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('DB connected!!');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
