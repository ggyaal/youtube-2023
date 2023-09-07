import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
	title: {type: String, required: true},
	description: String,
	createdAt: {type: Date, required: true},
	hastags: [{type: String}],
	meta: {
		views: {type: Number, required: true},
		rating: {type: Number, required: true}
	}
});

const Video = mongoose.Model("Video", videoSchema);
export default Video;