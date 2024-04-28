import mongoose from 'mongoose';

export async function connect() {
  try {
    if (typeof process.env.MONGODB_URL !== 'string') {
      throw new Error('MONGODB_URL environment variable is not defined or is not a string');
    }

    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    connection.on('error', (err) => {
      console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
      process.exit();
    });
  } catch (error) {
    console.log('Something goes wrong!');
    console.log(error);
  }
}