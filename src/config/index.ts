import { config } from 'dotenv';
import { CHAT_DB_URI, PORT } from '../const/dataBase';

config();

if (!PORT) {
	console.error('==> No PORT provided. Specify PORT in .env file to continue');
	process.exit(1);
}

if (!CHAT_DB_URI) {
	console.error(
		'==> No MONGODB URI provided. Specify a valid URI in .env file to continue'
	);
	process.exit(1);
}
