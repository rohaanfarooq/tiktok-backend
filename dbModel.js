import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  likes: String,
  messages: String,
  shares: String,
  channel: String,
  description: String,
  song: String,
});

export default mongoose.model("videos-tiktok", tiktokSchema);
