const categoryService = require("../services/categoryService");

exports.getAllCategories = (req, res) => {
  categoryService
    .getAllCategories()
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json({ error: err.message }));
};

exports.createCategory = (req, res) => {
  const category = req.body;
  categoryService
    .createCategory(category)
    .then((id) => res.status(201).json({ id }))
    .catch((err) => res.status(500).json({ error: err.message }));
};
