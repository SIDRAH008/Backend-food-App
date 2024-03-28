const { mongoose } = require("mongoose");
mongoose;
const foodSchema = new mongoose.Schema(
  {

    
    name: {
      type: String,
    },
    Catagoryname: {
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


const food = mongoose.model("food_items", foodSchema);
module.exports = food;
