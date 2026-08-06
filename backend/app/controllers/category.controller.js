const CategoryService = require("../services/category.service");

// Lấy tất cả Category
exports.findAll = async (req, res) => {
  try {
    const categories = await CategoryService.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 Category theo ID
exports.findOne = async (req, res) => {
  try {
    const category = await CategoryService.findOne(req.params.id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm Category
exports.create = async (req, res) => {
  try {
    const id = await CategoryService.create(req.body);

    res.status(201).json({
      message: "Category created successfully",
      category_id: id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật Category
exports.update = async (req, res) => {
  try {
    const affectedRows = await CategoryService.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.json({
      message: "Category updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa Category
exports.delete = async (req, res) => {
  try {
    const affectedRows = await CategoryService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.json({
      message: "Category deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
