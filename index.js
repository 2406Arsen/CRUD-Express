import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import router from './router.js';

config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/api', router);

const DB_URL =
	'mongodb+srv://ArsenDB:142536aqswde@cluster0.arvs6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function start() {
	try {
		await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
		app.listen(PORT, () => console.log(`server was started on ` + PORT + ' port'));
	} catch (error) {
		console.log(e);
	}
}
start();
