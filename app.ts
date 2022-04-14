import express, { Express, Request, Response } from 'express';
import sortRouter from './src/routers/sorterController'

const app: Express = express();

// Setup static directory to serve
app.use(express.json())
app.use(sortRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

export default app