import mongoose from "mongoose";

/**
 * Gets the env variables
 */
const { MONGO_URI } = process.env;

/**
 * Handles connecting to the database
 */
export const Database = {
  connect: async () => {
    try {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      });

      console.log("Connected to MongoDB");
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  },
};
