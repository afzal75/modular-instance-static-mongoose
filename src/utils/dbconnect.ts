import mongoose from 'mongoose';
import config from '../app/config';

const dbConnect = async (): Promise<void> => {
  try {
    if (!config.database_url) {
      throw new Error('Database url is not defined');
    }
    await mongoose.connect(config.database_url as string);
    console.log('🗄️  Database is connected ❤️‍🔥');
  } catch (err: unknown | [message?: string] | string | undefined) {
    console.log(`❌  Error connecting to database: ${err}`);
  }
};

export { dbConnect };
