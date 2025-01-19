const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const v1Router = require("./routes/v1/v1_routers.js");

const app = express();
app.use(cors());

app.use((req, res, next) => {
	console.log(`${req.method}: ${req.url}`);
	next();
});

app.use("/api/v1", v1Router);

async function main() {
	await mongoose.connect(process.env.MONGO_URI);
	console.log("Connected to MongoDB");
	app.listen(3000, () => {
		console.log("Server is running on port 3000");
	});
}

main();
