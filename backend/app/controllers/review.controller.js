const ReviewService = require("../services/review.service");

// Lấy tất cả Review
exports.findAll = async (req, res) => {
  try {
    const reviews = await ReviewService.findAll();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 Review theo ID
exports.findOne = async (req, res) => {
  try {
    const review = await ReviewService.findOne(req.params.id);

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm Review
exports.create = async (req, res) => {
  try {
    const id = await ReviewService.create(req.body);

    res.status(201).json({
      message: "Review created successfully",
      review_id: id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật Review
exports.update = async (req, res) => {
  try {
    const affectedRows = await ReviewService.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.json({
      message: "Review updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa Review
exports.delete = async (req, res) => {
  try {
    const affectedRows = await ReviewService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.json({
      message: "Review deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
