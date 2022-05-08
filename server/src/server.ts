import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import 'dotenv/config';

const app = express();

app.use(cors({
  origin: process.env.CORS || 'http://localhost:3000'
}));
app.use(express.json());
app.use(routes);

const app_http_port = process.env.PORT || 3333;

app.listen(app_http_port, () => {
  console.log('HTTP server running on port ' + app_http_port);
});