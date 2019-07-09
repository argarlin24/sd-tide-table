import Dexie from "dexie";

const db = new Dexie("TidesDB");
db.version(1).stores({
	dailyTide: "id, timestamp, data",
	monthlyTide: "id",
});

export default db;
