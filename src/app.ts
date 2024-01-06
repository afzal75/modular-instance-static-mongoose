import cors from 'cors';
import express, { Application, Request, Response } from 'express';

// import { catRoutes } from './app/modules/Cat/Cat.route';
import { dbConnect } from './utils/dbconnect';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// connections
dbConnect();

// application routes
// app.use('/api/v1/cat', catRoutes);

const getAController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the API Documentation',
  });
};

app.get('/', getAController);

export default app;
