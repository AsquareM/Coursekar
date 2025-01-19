const mongoose = require("mongoose");
require("dotenv").config();

const {
	Schema,
	Types: { ObjectId },
} = mongoose;

const userSchema = new Schema({
	_id: ObjectId,
	name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	role: {
		type: String,
		enum: ["admin", "user"],
		default: "user",
	},
});

const courseSchema = new Schema({
	_id: ObjectId,
	title: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	length: { type: Number, required: true },
	creatorId: {
		type: ObjectId,
		required: true,
		ref: "User",
	},
	imageUrl: String,
});

const purchaseSchema = new Schema({
	userId: { type: ObjectId, required: true, ref: "User" },
	courseId: { type: ObjectId, required: true, ref: "Course" },
});

const User = mongoose.model("User", userSchema);
const Course = mongoose.model("Course", courseSchema);
const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = { User, Course, Purchase };
