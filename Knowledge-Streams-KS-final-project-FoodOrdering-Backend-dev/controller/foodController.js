const catagory = require("../Models/CatagoryModel");
const food = require("../Models/foodModel");
const Pfood = require("../Models/popularModel");

const getAllData = async (req, res) => {
  const myData = await food.find({});
  res.status(200).json({ myData });
};

const getCatagory = async (req, res) => {
  const myData = await catagory.find({});
  res.status(200).json({ myData });
};
 const singleCategoryController = async (req, res) => {
  try {
    const   myData = await singleCategory.findOne({ id });
    res.status(200).send({
      success: true,
      message: "Get SIngle Category SUccessfully",
      myData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single Category",
    });
  }
};

const getPopularData = async (req, res) => {
  const myData = await Pfood.find({});
  res.status(200).json({ myData });
};

const getFoodById = async (req, res) => {
  const { id } = req.params;
  try {
    // Use findById to get a specific food item by ID
    const myData = await food.findById(id);

    if (!myData) {
      return res.status(404).json({ error: "Food item not found" });
    }

    res.status(200).json({ myData });
  } catch (error) {
    console.error("Error in getFoodById:", error);
    res.status(500).json({ error: error.message });
  }
};
const getPopularById = async (req, res) => {
  const { id } = req.params;
  try {
    const myData = await Pfood.findById(id); // Use Pfood model for popular data

    if (!myData) {
      return res.status(404).json({ error: "Popular item not found" });
    }

    res.status(200).json({ myData });
  } catch (error) {
    console.error("Error in getPopularById:", error);
    res.status(500).json({ error: error.message });
  }
};

const getFoodsByCategory = async (req, res) => {
  const { categoryName } = req.params;

  try {
    // Assuming your model has a field named "CategoryName"
    const foodsInCategory = await food.find({ CategoryName: categoryName });

    res.status(200).json({ myData: foodsInCategory });
  } catch (error) {
    console.error('Error fetching foods by category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// module.exports = getAllData ;
module.exports = { getAllData, getPopularData,getFoodsByCategory, getCatagory, getFoodById ,getPopularById, singleCategoryController};
// module.exports = { getAllData, getPopularData, getFoodById };
