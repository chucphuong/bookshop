const PublisherService = require("../services/publisher.service");

// Lấy tất cả Publisher
exports.findAll = async (req, res) => {
  try {
    const publishers = await PublisherService.findAll();
    res.json(publishers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 Publisher theo ID
exports.findOne = async (req, res) => {
  try {
    const publisher = await PublisherService.findOne(req.params.id);

    if (!publisher) {
      return res.status(404).json({
        message: "Publisher not found",
      });
    }

    res.json(publisher);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm Publisher
exports.create = async (req, res) => {
  try {
    const id = await PublisherService.create(req.body);

    res.status(201).json({
      message: "Publisher created successfully",
      publisher_id: id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật Publisher
exports.update = async (req, res) => {
  try {
    const affectedRows = await PublisherService.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Publisher not found",
      });
    }

    res.json({
      message: "Publisher updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa Publisher
exports.delete = async (req, res) => {
  try {
    const affectedRows = await PublisherService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Publisher not found",
      });
    }

    res.json({
      message: "Publisher deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
