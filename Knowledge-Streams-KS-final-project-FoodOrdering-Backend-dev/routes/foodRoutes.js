var express = require("express");
const {
  getAllData,
  getPopularData,
  getCatagory,
  getFoodById,
  singleCategoryController,
  getPopularById,
  getFoodsByCategory
} = require("../controller/foodController.js");
var router = express.Router();

/* GET users listing. */
router.get("/get", getAllData);
router.get("/category", getCatagory);
router.get("/category/:categoryName", getFoodsByCategory);
router.get("/popular", getPopularData);
router.get("/getfood/:id", getFoodById);
router.get("/getpopular/:id", getPopularById)

module.exports = router;