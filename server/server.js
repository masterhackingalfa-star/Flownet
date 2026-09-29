import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import ConnectDB from './db.js';
import { inngest , functions } from './inngest/index.js';
import inngestExpress from 'inngest/express';

const app = express();

await ConnectDB()
app.use(express.json());

app.use(cors());

app.get('/' , (req,res) => res.send('Server is running'));

app.use("/api/inngest" , inngestExpress({client:inngest , functions}));

const PORT = process.env.PORT || 4000;

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));

//08:51:16