import mongoose from "mongoose"

export const mongo = mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('Database connection error:', err);
});