import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import messagesRouter from './routes/messages.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/messages', messagesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
