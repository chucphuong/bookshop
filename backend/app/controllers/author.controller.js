const AuthorService = require("../services/author.service");

// Lấy tất cả author
exports.findAll = async (req, res) => {
  try {
    const authors = await AuthorService.findAll();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 author theo ID
exports.findOne = async (req, res) => {
  try {
    const author = await AuthorService.findOne(req.params.id);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    res.json(author);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm author
exports.create = async (req, res) => {
  try {
    const id = await AuthorService.create(req.body);

    res.status(201).json({
      message: "Author created successfully",
      author_id: id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật author
exports.update = async (req, res) => {
  try {
    const affectedRows = await AuthorService.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    res.json({
      message: "Author updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa author
exports.delete = async (req, res) => {
  try {
    const affectedRows = await AuthorService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
    res.json({
      message: "Author deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
