const { mongoose } = require("mongoose");

const catagorySchema = new mongoose.Schema(
  {
    Catagoryname: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const catagory = mongoose.model("Catagory", catagorySchema);
module.exports = catagory;
