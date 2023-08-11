import express from 'express';
import cors from 'cors';
import enforce from 'express-sslify';
// import path from 'path';
import { handler } from './build/handler.js';

const app = express();
const port = process.env.PORT || 80;
const env = process.env.NODE_ENV || '';

if (env === 'production') {
	// Deployed at Heroku and behind Heroku proxy
	// For other platforms, see
	// https://www.npmjs.com/package/express-sslify
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
}
app.use(cors());

export const shutdown = async () => {
	console.log('Leaving....');
	process.exit(0);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

// Sveltekit does its magic here
app.use(handler);

// sendFile will go here
// app.get('/*', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/index.html'));
// });

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at PORT: ${port}`);
});
