const mongoose = require("mongoose");

const TitleSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  watchAfter: {
    type: [String],
    required: true,
  },
  standAlone: {
    type: Boolean,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  imgUrl: {
    type: String,
  },
  smallImgUrl: {
    type: String,
  },
  backgroundUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  duration: {
    type: Number,
  },
});

const UniverseSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  titles: [TitleSchema],
  description: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
});

const Universe = mongoose.model("Universe", UniverseSchema);
module.exports = Universe;
