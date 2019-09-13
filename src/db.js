import Dexie from "dexie";

const db = new Dexie("TidesDB");
db.version(1).stores({
	dailyTide: "id, timestamp, data",
	sixMinTide: "id, timestamp, data",
	monthlyTide: "id, timestamp, data",
});

export default db;
