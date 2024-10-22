const Category = require("../models/categoryModel");

const categoryService = {
  getAllCategories: () => {
    return Category.getAll();
  },
  createCategory: (category) => {
    return Category.create(category);
  },
};

module.exports = categoryService;
