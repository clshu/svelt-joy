import mongoose from 'mongoose';

// console.log('B4: ', import.meta.env);

const uri = import.meta.env.VITE_DB_URI || '';

let connectionStatus: mongoose.ConnectionStates = 0;

export const dbConnect = async () => {
	if (connectionStatus == 1) {
		console.log('-> DB is already connected.');
		return;
	}

	await mongoose.connect(uri).then(() => console.log('-> DB is connected.'));

	connectionStatus = mongoose.connections[0].readyState;
};

export const dbDisconnect = async () => {
	if (connectionStatus == 1) {
		await mongoose.connection.close(true).then(() => console.log('-> DB connection is closed'));

		connectionStatus = 0;
	}
};
