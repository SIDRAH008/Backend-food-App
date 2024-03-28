const { mongoose } = require("mongoose");
const PopularSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },

    img: {
      type: Array,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Pfood = mongoose.model("popular_item", PopularSchema);
module.exports = Pfood;
